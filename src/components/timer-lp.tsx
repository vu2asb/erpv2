// Building Under Construction Page with Countdown Timer | React + Next.js 14 + TailwindCSS | Geekboots
// https://www.youtube.com/watch?v=2dz81rb29eo&t=626s


"use client";

import { useState, useEffect } from "react";
import { CiCalendar } from "react-icons/ci";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const nowTime = new Date().getTime();

// console.log("Present Time is: " + nowTime + ""); // Output: 1694097460000 (example value)
console.log("Present Time is: " + (nowTime + 10 * 60 * 1000) + ""); // Output: 1694097460000 (example value)
const tenMinutesLater = nowTime + 10 * 60 * 1000; // 10 minutes in milliseconds
console.log("Time 10 minutes later:: " + new Date(tenMinutesLater) + "");

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();
  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  //   days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString();
  //   hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString();
  //   minutes = Math.floor((difference / (1000 * 60)) % 60).toString();
  //   seconds = Math.floor((difference / 1000) % 60).toString();

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const TimerLP = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
  }, [launchDate]);

  return (
    <div>
      <div className="flex flex-row">
        <div>
          <CiCalendar size={100} />
        </div>
        {/* <h1 className="text-2xl">
            The middle part of the landing page to be used to place the timer.
          </h1> */}
        <div className="flex flex-col justify-items-center items-center my-auto mr-20 ml-20">
        <span className="text-[20px] mb-3">Webinar Begins</span>
          <span className="text-[14px]">September, 15th, 2024</span>
          <span className="text-[20px]">4:54 PM</span>
        </div>

        <span className="flex flex-col justify-center items-center bg-secondary text-primary text-5xl rounded-2xl w-36 m-1.5 py-4">
          {timeLeft.days}
          <small className="text-[16px] uppercase font-semibold text-primary">
            Days
          </small>
        </span>
        <span className="flex flex-col justify-center items-center bg-secondary text-primary text-5xl rounded-2xl w-36 m-1.5 py-4">
          {timeLeft.hours}
          <small className="text-[16px] uppercase font-semibold text-primary">
            Hours
          </small>
        </span>
        <span className="flex flex-col justify-center items-center bg-secondary text-primary text-5xl rounded-2xl w-36 m-1.5 py-4">
          {timeLeft.minutes}
          <small className="text-[16px] uppercase font-semibold text-primary">
            Minutes
          </small>
        </span>
        <span className="flex flex-col justify-center items-center bg-secondary text-primary text-5xl rounded-2xl w-36 m-1.5 py-4">
          {timeLeft.seconds}
          <small className="text-[16px] uppercase font-semibold text-primary">
            Seconds
          </small>
        </span>
      </div>
    </div>
  );
};

export default TimerLP;
