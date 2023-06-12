const jwt = require('jsonwebtoken');
const moment = require('moment');
const { MongoClient } = require("mongodb");
const middy = require('middy');

exports.systemLogin = async (event) => {
    try{

    }catch(e){

    }
}

exports.verifyToken = function () {
    try {
        return ({
            before: (handler, next) => {
                const bearerHeader = (handler.event.headers['authorization'] != undefined) ? handler.event.headers['authorization'] : (handler.event.headers.authroization != undefined) ? handler.event.headers.authroization : null;
                if (bearerHeader != null) {
                    const bearer = bearerHeader.split(' ');
                    const bearerToken = bearer[1];
                    jwt.verify(bearerToken, process.env.SECRET);
                    next();
                } else {
                    return handler.callback(null, {
                        statusCode: 403,
                        body: JSON.stringify({
                            auth: 'no',
                            message: 'Access Denied'
                        })
                    });
                }
            }
        });
    } catch (e) {
        if (e.name === 'TokenExpiredError') {
            e.message = 'Token Expired';
        }
        console.log(e);
        return handler.callback(null, {
            statusCode: 403,
            body: JSON.stringify({})
        });
    }
}

const handler = async function (event, context) {
  try {
    var result = null;
    if (event.path == '/.netlify/functions/auth/login' && event.httpMethod == 'POST') {
        result = await exports.systemLogin(event);
    }
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500 || e.status,
      body: e.message,
    };
  }
};

exports.handler = middy(handler);
