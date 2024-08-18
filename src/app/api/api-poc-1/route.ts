import { pool } from "@/lib/db";
import dbConnect from "@/lib/dbconnect";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return new Response("GET Success", {
    status: 200,
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  dbConnect();
  // Retrieves the incoming request body: It accesses the request object (req) and calls the formData() method on it.
  // Parses the form data: It asynchronously parses the request body as form data and returns a FormData object.
  // Assigns the parsed data to a variable: The parsed form data is stored in the data variable for further processing.
  const data = await req.formData();
  const firstName = data.get("fName");
  const lastName = data.get("lName");
  const email = data.get("email");
  const regTime = data.get("regTime");
  const webinarID = data.get("webinarRef");
  const webinarNote = data.get("webinarNote");
  console.log(
    "Name: " +
      firstName +
      " " +
      lastName +
      ", Email: " +
      email +
      ", Time: " +
      regTime +
      ", Webinar ID: " +
      webinarID +
      ", Webinar Notes: " +
      webinarNote +
      ""
  );
  //--------------------------------------------------------------------

  try {
    // Sample Eg.: SELECT * FROM webinar_reg
    const queryText =
      "INSERT INTO webinar_reg (first, last, email, reg_time, webinar_ref, webinar_note) VALUES ($1, $2, $3, $4, $5, $6)";
    const resultSet = await pool.query(queryText, [
      firstName,
      lastName,
      email,
      regTime,
      webinarID,
      webinarNote,
    ]);

    console.log(resultSet);
    const t32 = JSON.stringify(resultSet.rowCount) + ": Row(s) Added";
    return new Response(JSON.stringify(t32), {
      status: 200,
    });
  } catch {
    return new Response("Could not insert webinar reg info in db!", {
      status: 500,
    });
  }
}
