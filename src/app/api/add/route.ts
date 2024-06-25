// import {pool} from"@/lib/db"
import dbConnect from "@/lib/dbconnect"

export async function GET(request:Request)
{
    // Check
    dbConnect();
    console.log("Attempted dbconnect funcion");

}


