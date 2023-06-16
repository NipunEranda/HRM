const jwt = require("jsonwebtoken");
const moment = require("moment");
const { MongoClient, ServerApiVersion } = require("mongodb");
const middy = require("middy");
const axios = require("axios");
const qs = require("qs");

exports.systemLogin = async (event) => {
  let mongoClient,
    user = {},
    token = null,
    insertedU = null,
    result = null,
    profileData = null,
    content = JSON.parse(event.body);
  try {
    mongoClient = new MongoClient(process.env.MONGO_URL, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    const clientPromise = mongoClient.connect();
    const database = (await clientPromise).db(process.env.MONGO_DB);

    if (content.type == "microsoft") {
      //Authenticate User
      const response = await axios.post(
        `https://login.microsoftonline.com/${process.env.AZURE_AUTH_TENENT}/oauth2/v2.0/token`,
        qs.stringify({
          client_id: process.env.AZURE_AUTH_CLIENT_ID,
          scope: "user.read Files.Read.All offline_access",
          code: content.code,
          redirect_uri: process.env.AZURE_AUTH_REDIRECT_URI,
          grant_type: "authorization_code",
          client_secret: process.env.AZURE_AUTH_CLIENT_SECRET,
          state: 12345,
        }),
        {
          Headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      //Get Profile Data
      profileData = await axios.get("https://graph.microsoft.com/v1.0/me", {
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
        },
      });

      profileData['data']["system"] = "microsoft";

      // axios.get("https://graph.microsoft.com/v1.0/me/photo/$value", {
      //   headers: {
      //     Authorization: `Bearer ${response.data.access_token}`,
      //   },
      // }).then(imageResponse => {
      //   console.log(imageResponse);
      // }).catch(e => {
      //   console.log(e);
      // });
    } else if (content.type == "google") {
      profileData = {
        id: content.user.sub,
        name: content.user.name,
        email: content.user.email,
        system: "google",
      };
    }

    //Create a User Object
    user = {
      sid: profileData.data ? profileData.data.id : profileData.id,
      name: profileData.data ? profileData.data.displayName : profileData.name,
      email: profileData.data ? profileData.data.mail : profileData.email,
      loggedSystem: profileData.data
        ? profileData.data.system
        : profileData.system,
    };

    //Check if user is already registered or not
    result = await database.collection("users").findOne({ email: user.email });

    if (!result) {
      //If user doesn't exists, Register
      insertedU = await database.collection("users").insertOne(user);
      token = await new Promise((resolve, reject) => {
        jwt.sign(
          {
            user: {
              _id: insertedU.insertedId.toString(),
              name: user.name,
              email: user.email,
              loggedSystem: user.loggedSystem,
              created: moment(new Date()).format("YYYY-MM-DD"),
            },
          },
          process.env.SECRET,
          { expiresIn: "24h" },
          (err, token) => {
            resolve(token);
          }
        );
      });
    } else {
      //If user exists, Login
      token = await new Promise((resolve, reject) => {
        result["loggedSystem"] = user.loggedSystem;
        console.log(result);
        jwt.sign(
          { user: result },
          process.env.SECRET,
          { expiresIn: "24h" },
          (err, token) => {
            resolve(token);
          }
        );
      });
    }

    return {
      status: 200,
      response: {
        data: { status: "success", token: token, user: result ? result : user },
        error: null,
      },
    };
  } catch (e) {
    console.log(e);
    return { status: 500, response: { data: null, error: e } };
  } finally {
    mongoClient.close();
  }
};

exports.verifyToken = function () {
  try {
    return {
      before: (handler, next) => {
        const bearerHeader =
          handler.event.headers["authorization"] != undefined
            ? handler.event.headers["authorization"]
            : handler.event.headers.authroization != undefined
            ? handler.event.headers.authroization
            : null;
        if (bearerHeader != null) {
          const bearer = bearerHeader.split(" ");
          const bearerToken = bearer[1];
          jwt.verify(bearerToken, process.env.SECRET);
          next();
        } else {
          return handler.callback(null, {
            statusCode: 403,
            body: JSON.stringify({
              auth: "no",
              message: "Access Denied",
            }),
          });
        }
      },
    };
  } catch (e) {
    if (e.name === "TokenExpiredError") {
      e.message = "Token Expired";
    }
    console.log(e);
    return handler.callback(null, {
      statusCode: 403,
      body: JSON.stringify({}),
    });
  }
};

const handler = async function (event, context) {
  try {
    var result = null;
    if (
      event.path == "/.netlify/functions/auth/login" &&
      event.httpMethod == "POST"
    ) {
      result = await exports.systemLogin(event);
    }
    return {
      statusCode: result ? (result.status ? result.status : 500) : 500,
      body: JSON.stringify(result.response),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500 || e.status,
      body: e.message,
    };
  }
};

exports.handler = middy(handler);
