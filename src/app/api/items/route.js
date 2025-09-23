// get all api route
export async function GET() {
  const data = {
    message: "Successfully get data",
    error: false,
    status: 200
  }
 
  return Response.json({ data })
}

// post data api route
export async function POST(req) {
  const result = await req.json();
 
  return Response.json({ result })
}