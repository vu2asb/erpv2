import { NextResponse } from "next/server";

// Handling POST request
export async function POST(req :any, res:any) {
    // Get the Form Data from the POST request
    const data = await req.json();
    const stringifyData = JSON.stringify(data);
    // const data = await req.json();
    console.log('CL-PER-100:: POST data sent as json:: '+stringifyData+'');
    // add code here to send and save data to database

    return NextResponse.json({data})
}