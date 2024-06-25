import {pool} from "@/app/lib/db";
import dbConnect from "@/app/lib/dbconnect"

export async function GET(request:Request)
{
  // Check
  dbConnect()
  try{
    const query = " DELETE FROM notes;"
    const result  = await pool.query(query);
    const re = result.rows[0] ;
    const t32 = JSON.stringify(result.rowCount) + ": Row(s) Deleted";
    return new Response(JSON.stringify(t32), {
          status: 200
        })
  }
  catch{
    return new Response("DB ERROR ", {
      status: 500
    })

  }
  

}
