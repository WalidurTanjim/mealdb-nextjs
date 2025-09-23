// get single data api route
export async function GET(req, { params }) {
    const idParams = await params;
 
    return Response.json({ idParams })
}

// delete single data api route
export async function DELETE(req, { params }) {
    const idParams = await params;
 
    return Response.json({ idParams })
}

// patch single data api route
export async function PATCH(req, { params }) {
    const idParams = await params;
 
    return Response.json({ idParams })
}