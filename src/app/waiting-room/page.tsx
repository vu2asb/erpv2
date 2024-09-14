"use client";

import Image from "next/image";
import TimerLP from "@/components/timer-lp";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const doorToOpen = 10;

const WaitingRoom = () => {
  // from registeration page:: const urlStringToPass = "/waiting-room?year="+tgtYear+"&month="+tgtMonth+"&day="+tgtDay+"&hour="+tgtHour+"&min="+tgtMin+"&sec="+tgtSec+"";
  const searchParams = useSearchParams();
  const webRef = searchParams.get("wref");
  const webNote = searchParams.get("wnote");
  const tgtYear = searchParams.get("year");
  const tgtMonth = searchParams.get("month");
  const tgtDay = searchParams.get("day");
  const tgtHour = searchParams.get("hour");
  let tgtMin = searchParams.get("min");
  const tgtSec = searchParams.get("sec");

  const countDown =
    (Number(tgtYear)*60*60*24*30*12)+(Number(tgtMonth)*60*60*24*30)+(Number(tgtDay)*60*60*24)+(Number(tgtHour) * 60 * 60) + (Number(tgtMin) * 60) + (Number(tgtSec));
  console.log("Waiting Room Calculated seconds: " + countDown);

  console.log(
    "Waiting Room Got:  yy: " +
      tgtYear +
      ", mm: " +
      tgtMonth +
      ", dd: " +
      tgtDay +
      ", hr: " +
      tgtHour +
      ", min: " +
      tgtMin +
      ", sec: " +
      tgtSec +
      ""
  );

  //-----------------experiment begins------------------
  // function createISO8601FromVariables(
  //   year: number,
  //   month: number,
  //   day: number,
  //   hour: number,
  //   minute: number,
  //   second: number
  // ): string {
  //   // Note: JavaScript months are 0-indexed (January is 0, December is 11), so we subtract 1 from the month.
  //   const date = new Date(year, month - 1, day, hour, minute, second);

  //   // Convert the Date object to ISO 8601 format
  //   const iso8601String = date.toISOString();

  //   console.log("ISO 8601 String: ", iso8601String);
  //   return iso8601String;
  // }
  // // Example usage
  // const year = tgtYear; //2024;
  // const month = tgtMonth; //9;    // September
  // const day = tgtDay; //13;
  // const hour = tgtHour; // 18;
  // const minute = tgtMin; //49;
  // const second = tgtSec; //16;

  // const isoDate = createISO8601FromVariables(
  //   Number(year),
  //   Number(month),
  //   Number(day),
  //   Number(hour),
  //   Number(minute),
  //   Number(second)
  // );
  // const mynow = new Date();
  // mynow.setMinutes(mynow.getMinutes() + doorToOpen); // The counter loading time is set here
  // const isoDateString = mynow.toISOString();
  // console.log("ISO 8601 string:", isoDateString);
  //-----------------experiment ends------------------

  //---------------Timer Begins-----------------------
  const totCount = Number(tgtMin) * 60; // count down in seconds
  console.log("Waiting Room Countdown [sec]: " + totCount);

  let [count, setCount] = useState(totCount); // Timer in seconds

  useEffect(() => {
    const intervalId = setInterval(function () {
      count-=0.5;
      if (count == 0) {
        clearInterval(intervalId);
        console.log("Timeout :: Interval cleared.");
        // redirect to webinar player page
        window.location.href = "/player";
      } else {
        /*console.log("useEffect for Timer function triggered; Count = " + count + ""
        );*/

        // Get the <p> element by its id and update its innerHTML when component mounts
        const countElement = document.getElementById("counter");
        if (countElement) {
          // TypeScript knows at this point countElement is not null
          // You can do something like this now -> countElement.innerHTML = `${count}`;
          const minutes = Math.floor(count / 60); // Get the whole minutes
          const seconds = count % 60; // Get the remaining seconds
          countElement.innerHTML = "" + minutes + " Min " + seconds + " Sec";
        } else {
          console.error('Element with id "counter" not found');
        }
      }
    }, 1000); // setInterval value in milli seconds; e.g. 1000 means 1000ms = 1 sec
  });

   //---------------Timer Ends-----------------------
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        src="/assets/waiting-area.jpg" // Replace with your image path
        alt="Your Image"
        layout="fill"
        objectFit="cover"
      />
      <div
        style={{
          position: "absolute",
          fontSize: "40px",
          top: 40,
          left: 0,
          right: 0,
          padding: "20px",
          margin: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          textAlign: "center",
        }}
      >
        Welcome to the Waiting Room
      </div>
      <div
        style={{
          position: "absolute",
          fontSize: "30px",
          top: 500,
          left: 650,
          right: 650,
          padding: "10px",
          margin: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          textAlign: "center",
          // placeItems: "center"
        }}
      >
        Webinar begins in
      </div>

      <div
        style={{
          position: "absolute",
          fontSize: "30px",
          top: 650,
          left: 650,
          right: 650,
          padding: "10px",
          margin: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          textAlign: "center",
          // placeItems: "center"
        }}
      >
        <p id="counter">Count down info </p>
      </div>
      <div className="flex justify-center items-center mx-10">
        {/* <TimerLP launchDate={isoDateString} /> */}
        {/* 2024: Year
            10: Month
            15: Day
            T: Separator between date and time
            17: Hour (in 24-hour format)
            00: Minute
            00: Second */}
      </div>
    </div>
  );
};

export default WaitingRoom;
