'use strict';
const { MongoClient, ObjectId } = require("mongodb");
const auth = require('./auth');
const middy = require('middy');

exports.getStaffList = async (event) => {
    let mongoClient;
    try {
        mongoClient = new MongoClient(process.env.MONGO_URL);
        const clientPromise = mongoClient.connect();
        const data = auth.getUserDataFromToken(event);
        const database = (await clientPromise).db(process.env.MONGO_DB);
        const staff = await database.collection('staff').find({ deleted: false }).toArray();
        if (data) {
            return { status: 200, response: { data: staff, error: null } };
        }
        return { status: 500, response: { data: null, error: 'something went wrong' } };
    } catch (e) {
        console.log(e);
        return { status: 500, response: { data: null, error: err } };
    } finally {
        await mongoClient.close();
    }
}

exports.insertStaff = async (event) => {
    let mongoClient;
    try {
        mongoClient = new MongoClient(process.env.MONGO_URL);
        const clientPromise = mongoClient.connect();
        const data = auth.getUserDataFromToken(event);
        const database = (await clientPromise).db(process.env.MONGO_DB);
        if (data) {
            const staffData = JSON.parse(event.body);
            await database.collection("staff").insertOne(staffData);
            const staff = await database.collection('staff').find({ deleted: false }).toArray();
            return { status: 200, response: { data: staff, error: null } };
        }
        return { status: 500, response: { data: null, error: 'something went wrong' } };
    } catch (e) {
        console.log(e);
        return { status: 500, response: { data: null, error: err } };
    } finally {
        await mongoClient.close();
    }
}

exports.updateStaff = async (event) => {
    let mongoClient;
    try {
        mongoClient = new MongoClient(process.env.MONGO_URL);
        const clientPromise = mongoClient.connect();
        const data = auth.getUserDataFromToken(event);
        const database = (await clientPromise).db(process.env.MONGO_DB);
        if (data) {
            const staffData = JSON.parse(event.body);
            await database.collection('staff').updateOne({ _id: new ObjectId(staffData._id) }, { $set: { personal: staffData.personal, work: staffData.work, contact: staffData.contact } });
            const staff = await database.collection('staff').find({ deleted: false }).toArray();
            return { status: 200, response: { data: staff, error: null } };
        }
        return { status: 500, response: { data: null, error: 'something went wrong' } };
    } catch (e) {
        console.log(e);
        return { status: 500, response: { data: null, error: err } };
    } finally {
        await mongoClient.close();
    }


}

exports.removeStaff = async (event) => {
    let mongoClient;
    try {
        mongoClient = new MongoClient(process.env.MONGO_URL);
        const clientPromise = mongoClient.connect();
        const data = auth.getUserDataFromToken(event);
        const database = (await clientPromise).db(process.env.MONGO_DB);
        if (data) {
            await database.collection('staff').updateOne({ "_id": new ObjectId(event.queryStringParameters.id) }, { $set: { deleted: true } });
            const staff = await database.collection('staff').find({ deleted: false }).toArray();
            return { status: 200, response: { status: 'Success', data: staff, error: null } };
        }
        return { status: 500, response: { data: null, error: 'something went wrong' } };
    } catch (e) {
        console.log(e);
        return { status: 500, response: { data: null, error: err } };
    } finally {
        await mongoClient.close();
    }
}

const handler = async function (event, context) {
    try {
        var result = null;
        if (event.path == '/.netlify/functions/staff' && event.httpMethod == 'GET') {
            result = await exports.getStaffList(event);
        } else if (event.path == '/.netlify/functions/staff' && event.httpMethod == 'DELETE') {
            result = await exports.removeStaff(event);
        } else if (event.path == '/.netlify/functions/staff' && event.httpMethod == "PUT") {
            result = await exports.updateStaff(event);
        } else if (event.path == '/.netlify/functions/staff' && event.httpMethod == "POST") {
            result = await exports.insertStaff(event);
        }
        return {
            statusCode: result ? result.status ? result.status : 500 : 500,
            body: JSON.stringify(result.response)
        }
    } catch (e) {
        return {
            statusCode: 500 || e.status,
            body: e.message,
        }
    }
}

exports.handler = middy(handler).use(auth.verifyToken());