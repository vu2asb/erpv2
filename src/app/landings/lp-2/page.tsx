"use client";

import TimerLP from "@/components/timer-lp";
import { CiCalendar } from "react-icons/ci";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const separator = "   "; // Adjust the number of spaces as needed

const LandingPage2 = () => {
  const freqMins = 10; // in minutes e.g. 10
  const nowTime = new Date().getTime();
  const now = new Date(nowTime);

  // Set Now Time :: Get day, hour, and second from the Date object
  const nyear = now.getFullYear();
  const nmonth = now.getMonth() + 1;
  const nday = now.getDate();
  const nhour = now.getHours();
  const nmin = now.getMinutes();
  const nseconds = now.getSeconds();
  // Show Now Time
  console.log("Present Year:", nyear);
  console.log("Present Month:", nmonth);
  console.log("Present Day:", nday);
  console.log("Present Hour:", nhour);
  console.log("Present Min:", nmin);
  console.log("Present Sec:", nseconds);

  // Set Target Time by adding latency; value held by variable 'freqMins' in minutes to the current time
  now.setMinutes(now.getMinutes() + freqMins);
  const tYear = now.getFullYear();
  const tMonth = now.getMonth() + 1;
  let tDay = now.getDate();
  let tHour = now.getHours();
  let tMin = now.getMinutes();
  const tSec = now.getSeconds();

  let ampm = "";
  if (tHour >= 12) {
    ampm = "PM";
    tHour = tHour - 12;
  } else {
    ampm = "AM";
  }

  // Show Target Time
  console.log("Target Year", tYear);
  console.log("Target Month", tMonth);
  console.log("Target Day:", tDay);
  console.log("Target Hour:", tHour);
  console.log("Target Min:", tMin);
  console.log("Target Sec:", tSec);

  // const monthIndex = now.getMonth();
  const monthIndex = tMonth;
  const monthName = monthNames[monthIndex - 1];
  console.log(monthName); // Output: "September"

  const suffixes = ["th", "st", "nd", "rd", "th"];
  // tDay = 20;
  const dayIndex = tDay % 10;
  const daySuffix = suffixes[dayIndex >= 4 || dayIndex === 0 || (tDay >= 11 && tDay <= 13) ? 0 : dayIndex];
  // console.log("Suffix: " + daySuffix + "");

  const mynow = new Date();
  now.setMinutes(mynow.getMinutes() + 10);
  const isoDateString = now.toISOString();
  console.log("ISO 8601 string:", isoDateString);

  // tMin = 1

  return (
    <main className="container mx-auto h-screen flex justify-center items-center">
      <div className="px-4 w-full flex flex-col justify-center items-center">
        <section className="m-20 p-20">
          <h1 className="text-2xl">The upper part of the landing page.</h1>
        </section>
        <section className="m-10 p-5 flex flex-row">
          <div>
            <CiCalendar size={100} className="text-[#c9b7a3]" />
          </div>
          <div className="flex flex-col justify-items-center items-center my-auto mr-20 ml-20">
            <span className="text-[#c9b7a3] text-[20px] mb-3">
              Webinar Begins
            </span>
            <span className="text-[#c9b7a3] text-[15px]">
              {/* {monthName},{tDay}th,{tYear} */}
              {monthName}, {separator}{tDay}{daySuffix},{separator}{tYear}
              {/* September, 15th, 2024 */}
            </span>
            <span className="text-[#c9b7a3] text-[20px]">
              {/* {tHour}:{(tMin < 10) ? `${tMin.toFixed(2)}`: tMin} {ampm} */}
              {tHour}:{(tMin < 10) ? `0${tMin}`: tMin} {ampm}    
            </span>
          </div>
          <TimerLP launchDate={isoDateString} />
          {/* 2024: Year
            10: Month
            15: Day
            T: Separator between date and time
            17: Hour (in 24-hour format)
            00: Minute
            00: Second */}
        </section>
        <section className="m-20 p-20">
          <h1 className="text-2xl">The lower part of the landing page.</h1>
        </section>
      </div>
    </main>
  );
};

export default LandingPage2;
