const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient('mongodb+srv://leonardikarl:hvX91y0gskxo39aF@swooshly.tcrshyy.mongodb.net/?retryWrites=true');

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const database = (await clientPromise).db('swooshly_user_data');
        const collection = database.collection('users');
        const results = await collection.find({}).limit(10).toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }