const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  
  try {
    const searchTerm = searchParams.get('user') // Get the search term from the query parameters
    const database = (await clientPromise).db('swooshly_user_data');
    const collection = database.collection('users');

    // Create a case-insensitive regex pattern for the search term
    const searchRegex = new RegExp(searchTerm, "i");

    // Perform the search using the regex pattern, limit results to 12, and sort by relevance
    const results = await collection
      .find({ username: { $regex: searchRegex } })
      .limit(12)
      .toArray();

    return Response.json({
      statusCode: 200,
      body: JSON.stringify(results),
    });
  } catch (error) {
    return Response.json({ statusCode: 500, body: error.toString() });
  }
}