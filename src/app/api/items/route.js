import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

// get all api route
export async function GET() {
  const db = await dbConnect('users');
  const result = await db.find({}).toArray();
 
  return Response.json({ result })
}

// post data api route
export async function POST(req) {
  const data = await req.json();
  const db = await dbConnect('users');
  const result = await db.insertOne(data);
  revalidatePath('/products');
 
  return Response.json({ result })
}