"use client";

import { FormEvent } from 'react'
import { useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("Initial");
  const [error, setError] = useState<string | null>(null);

  // creating a dummy form fields
  const fName = "Daisy";
  const lName = "Rocks";
  const email = "daisy@rocks.net";
  const regTime = "Mon";
  const webinarRef = "WEB-101";
  const webinarNote = "The first of its kind webinar, join WEB-101 now";
  
  // creating a dummy FormData object
  const myFormData = new FormData();
  myFormData.append("day1", fName);
  myFormData.append("day2", lName);
  myFormData.append("day3", email);
  myFormData.append("day4", regTime);
  myFormData.append("day5", webinarRef);
  myFormData.append("day6", webinarNote);


  //   This line of code defines an asynchronous function named onSubmit
  //   that will be called when a form is submitted. The function receives
  //   an event object as a parameter, which contains information
  //   about the form submission.
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    // populates the FormData object with the data from the form element that 
    // triggered the onSubmit event. event.currentTarget refers to the form element itself.
    event.preventDefault();
    setMessage("Started");
    setError(null); // Clear previous errors when a new request starts
    try {
      const formData = new FormData(event.currentTarget);
      console.log("Making an API call!");
      const response = await fetch("http://localhost:3000/api/api-poc-1",
        {
          method: "POST",
          body: formData, 
        }
      );
      if (!response.ok) {
        // Handle Error in Form, display it to Users
        throw new Error("Invalid Form Data. Please Submit Again.");
      }
      // Handle Response if necessary
      const data = await response.json();
    } catch (error) {
      // Capture the error message to display to the user
      //setError(error.message)
      console.error(error);
    }
    finally {
        setIsLoading(false)
    }
  }

  return (
    <div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {/* This is commonly used to display error messages in a component. 
      If there's an error, the component will render a red div with 
      the error message; otherwise, it won't show anything. */}

      <form onSubmit={onSubmit} className="flex-col">
        <input type="text" name="fName" placeholder="First Name" />
        <input type="text" name="lName" placeholder="Last Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="regTime" placeholder="2024-08-17 10:24:08.287524" />
        <input type="text" name="webinarRef" placeholder="WEB-0001" />
        <input type="text" name="webinarNote" placeholder="Note on webinar WEB-0001..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


