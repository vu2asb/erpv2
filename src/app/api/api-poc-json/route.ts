import { pool } from "@/lib/db";
import dbConnect from "@/lib/dbconnect";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
// Handling POST request
export async function POST(req: NextRequest, res: NextResponse) {
  // Get the json data recieved with the POST request
  const data = await req.json();
  const stringifyData = JSON.stringify(data);
  const obj = JSON.parse(stringifyData);

  console.log(
    "First Name: " +
      obj.fName +
      ", Last Name: " +
      obj.lName +
      ", email: " +
      obj.email +
      ", Registeration Timestamp: " +
      obj.regTime +
      ", Webinar Reference: " +
      obj.webinarRef +
      "Weninar Notes: " +
      obj.webinarNote +
      ""
  );

  console.log("POST data sent as json:: " + stringifyData + "");
  // add code here to send and save data to database

  try {
    // "INSERT INTO contact_us (name, email, client_date_time_tz, message) VALUES ('"+obj.tname+"', '"+obj.temail+"', '"+obj.tstamp+"', '"+obj.tmessage+"')";
    const queryText =
      "INSERT INTO webinar_reg (first, last, email, reg_time, webinar_ref, webinar_note) VALUES ($1, $2, $3, $4, $5, $6)";

    const result = await pool.query(queryText, [
      obj.fName,
      obj.lName,
      obj.email,
      obj.regTime,
      obj.webinarRef,
      obj.webinarNote,
    ]);

    // const result = await pool.query(query);
    const re = result.rows[0];
    const t32 = JSON.stringify(result.rowCount) + ": Row(s) Added";
    console.log("Row(s) added::" + JSON.stringify(result.rowCount) + "...");

    return new Response(JSON.stringify(t32), {
      status: 200,
    });
  } catch {
    return new Response("DB error while trying to insert record", {
      status: 500,
    });
  }

  // return new NextResponse("Dummy return value");
}
