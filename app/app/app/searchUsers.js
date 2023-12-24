const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient('mongodb+srv://leonardikarl:hvX91y0gskxo39aF@swooshly.tcrshyy.mongodb.net/?retryWrites=true');

const clientPromise = mongoClient.connect();

export async function searchUsers({ search, }) {
    try {
        const searchTerm = search; // Get the search term from the query parameters
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

