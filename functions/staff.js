'use strict';
const { MongoClient, ObjectId } = require("mongodb");
const auth = require('./auth');
const middy = require('middy');

// staff dropdown Info
exports.maritalStatusList = ['Select an Option', 'Single', 'Married', 'Divorced'];
exports.genderList = ['Select an Option', 'Male', 'Female'];
exports.titleList = ['Select an Option', 'Dr', 'Mr', 'Mrs', 'Ms', 'Prof', 'Rev'];
exports.booleans = ['Select an Option', false, true];

exports.getStaffList = async (event) => {
    let mongoClient;
    try {
        mongoClient = new MongoClient(process.env.MONGO_URL);
        const clientPromise = mongoClient.connect();
        const data = auth.getUserDataFromToken(event);
        const database = (await clientPromise).db(process.env.MONGO_DB);
        const staff = await database.collection('staff').find({ deleted: false }).toArray();
        if (data) {
            return { status: 200, response: { data: filterDataForUsers(data, staff), error: null } };
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
            const staffId = staffData._id;
            delete staffData['_id'];
            await database.collection('staff').updateOne({ _id: new ObjectId(staffId) }, { $set: staffData });
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

exports.importStaff = async (event) => {
    let mongoClient;
    try {
        let staffFileData = [];
        mongoClient = new MongoClient(process.env.MONGO_URL);
        const clientPromise = mongoClient.connect();
        const data = auth.getUserDataFromToken(event);
        const database = (await clientPromise).db(process.env.MONGO_DB);

        // Retrieve staffList
        const allStaff = await database.collection('staff').find({ deleted: false }).toArray();

        // Create staffList
        await Promise.all(JSON.parse(event.body).rows.map(async (row, r) => {
            const emp = { deleted: false };

            // Creating staff object
            JSON.parse(event.body).columns.map((column, c) => {
                // Convert selections to indexes
                if (column.split(" ").join("_").toLowerCase() == 'marital_status')
                    emp[column.split(" ").join("_").toLowerCase()] = this.maritalStatusList.indexOf(row[c]);
                else if (column.split(" ").join("_").toLowerCase() == 'gender')
                    emp[column.split(" ").join("_").toLowerCase()] = this.genderList.indexOf(row[c]);
                else if (column.split(" ").join("_").toLowerCase() == 'title')
                    emp[column.split(" ").join("_").toLowerCase()] = this.titleList.indexOf(row[c]);
                else if (column.split(" ").join("_").toLowerCase() == 'overtime' || column.split(" ").join("_").toLowerCase() == 'status')
                    emp[column.split(" ").join("_").toLowerCase()] = this.booleans.indexOf(row[c]);
                else
                    emp[column.split(" ").join("_").toLowerCase()] = (row[c] ? row[c] != '' ? row[c] : null : null);
            });
            
            if(!allStaff.filter(s => s.email == emp.email && s.nic == emp.nic)[0])
                // Insert if staff member doesn't exist
                await database.collection("staff").insertOne(emp);
            else
                // Update staff member if exists
                await database.collection('staff').updateOne({ _id: new ObjectId(allStaff.filter(s => s.email == emp.email && s.nic == emp.nic)[0]._id) }, { $set: emp });

            staffFileData.push(emp);
        }));

        await Promise.all(allStaff.map(async (staff, s) => {
            // Remove staff member
            if(!staffFileData.filter(sfd => sfd.email == staff.email && sfd.nic == staff.nic)[0])
                await database.collection('staff').updateOne({ "_id": new ObjectId(staff._id) }, { $set: { deleted: true } });
        }));

        const staffList = await database.collection('staff').find({ deleted: false }).toArray();
        return { status: 200, response: { data: staffList, error: null } };
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
        if (event.path == `${process.env.VUE_APP_API_URL}/staff` && event.httpMethod == 'GET') {
            result = await exports.getStaffList(event);
        } else if (event.path == `${process.env.VUE_APP_API_URL}/staff` && event.httpMethod == 'DELETE') {
            result = await exports.removeStaff(event);
        } else if (event.path == `${process.env.VUE_APP_API_URL}/staff` && event.httpMethod == "PUT") {
            result = await exports.updateStaff(event);
        } else if (event.path == `${process.env.VUE_APP_API_URL}/staff` && event.httpMethod == "POST") {
            result = await exports.insertStaff(event);
        } else if (event.path == `${process.env.VUE_APP_API_URL}/staff/upload` && event.httpMethod == "POST") {
            result = await exports.importStaff(event);
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

function filterDataForUsers(data, staff) {
    let temp = [];
    if (data.user.role == 'user') {
        staff.map(s => {
            temp.push({
                _id: s._id,
                personal: {
                    info: {
                        fullName: s.full_name,
                        email: s.email
                    }
                },
                contact: {
                    address: {
                        country: s.country,
                        city: s.city
                    }
                },
                deleted: s.deleted
            });
        });
        return temp;
    } else {
        return staff;
    }
}

exports.handler = middy(handler).use(auth.verifyToken());