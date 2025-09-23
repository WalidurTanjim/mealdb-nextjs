import dbConnect from "@/lib/dbConnect";

// get all api route
export async function GET() {
  const db = await dbConnect('users');
  const result = await db.find({}).toArray();
 
  return Response.json({ result })
}

// post data api route
export async function POST(req) {
  const result = await req.json();
 
  return Response.json({ result })
}