const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  
  try {
    const searchTerm = searchParams.get('user') // Get the search term from the query parameters
    const database = (await clientPromise).db('swooshly_user_data');
    const collection = database.collection('users');

    // Perform the search using the regex pattern, limit results to 12, and sort by relevance
    const results = await collection
      .find({
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } }, // Search in 'name'
          { username: { $regex: searchTerm.replace(/\s/g, ''), $options: 'i' } } // Remove spaces for 'username'
        ]
      })
      .limit(12)
      .toArray();


    return Response.json({results});
  } catch (error) {
    return Response.json({ statusCode: 500, body: error.toString() });
  }
}