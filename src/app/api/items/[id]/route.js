import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// get single data api route
export async function GET(req, { params }) {
    const idParams = (await params)?.id;
    const query = { _id: new ObjectId(idParams) };
    const db = await dbConnect('users');
    const result = await db.findOne(query);
 
    return Response.json({ result })
}

// delete single data api route
export async function DELETE(req, { params }) {
    const idParams = (await params)?.id;
    const query = { _id: new ObjectId(idParams) };
    const db = await dbConnect('users');
    const result = await db.deleteOne(query);
 
    return Response.json({ result })
}

// patch single data api route
export async function PATCH(req, { params }) {
    const idParams = (await params)?.id;
    const postedData = await req.json();
    const query = { _id: new ObjectId(idParams) };
    const db = await dbConnect('users');
    const filter = {
        $set: {...postedData}
    }
    const options = { upsert: true };
    const result = await db.updateOne(query, filter, options);
 
    return Response.json({ result })
}