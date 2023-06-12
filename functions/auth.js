const jwt = require("jsonwebtoken");
const moment = require("moment");
const { MongoClient } = require("mongodb");
const middy = require("middy");
const axios = require("axios");
const qs = require("qs");

exports.systemLogin = async (event) => {
  let mongoClient;
  try {
    console.log(JSON.parse(event.body).code);
    axios
      .post(
        `https://login.microsoftonline.com/${process.env.AZURE_AUTH_TENENT}/oauth2/v2.0/token`,
        qs.stringify({
          client_id: process.env.AZURE_AUTH_CLIENT_ID,
          scope: "user.read Files.Read.All offline_access",
          code: JSON.parse(event.body).code,
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
      )
      .then((response) => {
        console.log(response.data);
      });

    return {
      status: 200,
      response: { data: { status: "success" }, error: null },
    };
  } catch (e) {
    console.log(e);
    return { status: 500, response: { data: null, error: e } };
  } finally {
    if (mongoClient) mongoClient.close();
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
