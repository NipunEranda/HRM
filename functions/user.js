'use strict';
const jwt = require("jsonwebtoken");
const moment = require("moment");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const middy = require("middy");
const axios = require("axios");
const qs = require("qs");
const auth = require('./auth');

exports.updateUserTheme = async (event) => {
    let mongoClient;
    try {
        console.log();
        mongoClient = new MongoClient(process.env.MONGO_URL);
        const clientPromise = mongoClient.connect();
        const data = auth.getUserDataFromToken(event);
        const database = (await clientPromise).db(process.env.MONGO_DB);
        // const staff = await database.collection('staff').find({}).toArray();
        await database.collection('users').updateOne({ _id: new ObjectId(data.user._id) }, { $set: { theme: event.queryStringParameters.value } });
        if (data) {
            return {
                status: 200, response: {
                    data: { status: "success" },
                    error: null,
                }
            };
        }
        return { status: 500, response: { data: null, error: 'something went wrong' } };
    } catch (e) {
        console.log(e);
        return { status: 500, response: { data: null, error: e } };
    } finally {
        await mongoClient.close();
    }
};

const handler = async function (event, context) {
    try {
        var result = null;
        if (
            event.path == "/.netlify/functions/user/theme" &&
            event.httpMethod == "PUT"
        ) {
            result = await exports.updateUserTheme(event);
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

exports.handler = middy(handler).use(auth.verifyToken());