"use client";

import React, { useState, useEffect } from "react";

const TimerPoC = () => {
  let [count, setCount] = useState(10); // Timer set for 10 seconds


  useEffect(() => {
    const intervalId = setInterval(function () {
      count--;
    //   console.log("useEffect for Timer function triggered; Count = " + count + "");
      if(count == 0){
        clearInterval(intervalId);
        console.log("Timeout :: Interval cleared.");
      }
      else {
        // console.log("Counting");
      }
    }, 1000); // setInterval value in milli seconds; e.g. 1000 means 1000ms = 1 sec
  });



  return <div>Hello</div>;
};

export default TimerPoC;
