const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const searchTerm = event.queryStringParameters.q; // Get the search term from the query parameters
        const database = (await clientPromise).db('swooshly_user_data');
        const collection = database.collection('users');

        // Create a case-insensitive regex pattern for the search term
        const searchRegex = new RegExp(searchTerm, "i");

        // Perform the search using the regex pattern, limit results to 12, and sort by relevance
        const results = await collection
            .find({ username: { $regex: searchRegex } })
            .limit(12)
            .toArray();

        return {
            statusCode: 200,
            body: JSON.stringify(results),
        };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};

module.exports = { handler };

