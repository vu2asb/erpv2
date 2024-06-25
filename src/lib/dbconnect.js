import {pool} from "@/app/lib/db";

export default async function dbConnect(){
    await pool.connect((err, client, release)=>{
        if(err){
            return console.error("DB-100: Error in setting up db connection", err.stack)
        }
        else{
            console.log("DB-101: DB connection setup successfully");
        }

        client.query("SELECT NOW()", (err, result)=>{
            // Release connection 
            release();

            if(err){
                return console.error("DB-102: DB connection ok but Error in Query execution", err.stack)
            }
        })
        console.log("DB-103: DB connection setup and query execution success");
    })

}