"use client"; // This directive indicates that the code is running in a client-side context (e.g., in the browser).

import { useEffect, useState } from "react"; // Import React hooks for managing side effects and component state.
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"; // Import necessary components from the alert-dialog library or module.

// Define a functional component named MyDialog that accepts props.
const MyDialog = (props: any) => {
  // Declare a state variable 'isOpen' initialized to true, indicating that the modal is open by default.
  // 'setIsOpen' is the function used to update the state.
  const [isOpen, setIsOpen] = useState(true);

  // The useEffect hook runs after the component mounts. Here, it's empty and doesn't do anything by default.
  // However, a commented-out setTimeout example is provided for delaying the modal opening if needed.
  useEffect(() => {
    // If you want to delay the opening, you can use a timeout
    // setTimeout(() => setIsOpen(true), 1000); // opens the modal after 1 second
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts.

  // The return statement defines the JSX structure of the component.
  return (
    <div>
      {/* The AlertDialog component is used to create the modal dialog.
          The 'open' prop controls whether the dialog is open, using the 'isOpen' state.
          The 'onOpenChange' prop is set to 'setIsOpen', which allows the dialog to update the 'isOpen' state when it opens or closes. */}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        {/* AlertDialogContent defines the main content area of the modal. */}
        <AlertDialogContent>
          {/* AlertDialogHeader is used for the header section of the modal, containing the title. */}
          <AlertDialogHeader>
            <AlertDialogTitle>
              {props.title} {/* Display the title passed in through props */}
            </AlertDialogTitle>

            {/* AlertDialogDescription provides additional details or warnings within the modal. */}
            <AlertDialogDescription>
              {props.description}{" "}
              {/* Display the description passed in through props */}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="text-sky-700 text-[12px]">
            {props.e_code.toUpperCase()}
            {/* Display the error code passed in through props */}
          </div>
          {/* AlertDialogFooter contains the action buttons at the bottom of the modal. */}
          <AlertDialogFooter>
            {/* AlertDialogCancel button allows the user to cancel the action, closing the modal by setting 'isOpen' to false. */}
            {/* <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Cancel
            </AlertDialogCancel> */}
            {/* AlertDialogAction button allows the user to proceed with the action. */}

            <AlertDialogAction>
              <div>
                {props.btn_text}
                {/* Button text passed through props */}
              </div>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

// Export the MyDialog component as the default export from this module.
export default MyDialog;

// Detailed Explanation:
// useState(true):

// This React hook initializes a state variable, isOpen, to true. This means that when the component first renders, the modal will be open by default.
// setIsOpen is a function used to update the isOpen state.
// useEffect(() => { ... }, []):

// useEffect is used for running side effects in function components. In this case, the effect is empty but is provided with an optional setTimeout function to demonstrate how you could delay the modal opening if needed.
// The empty array [] as the second argument ensures that the effect runs only once when the component mounts.
// AlertDialog Component:

// This component creates a modal dialog.
// The open prop controls whether the modal is open or closed based on the isOpen state.
// The onOpenChange prop is linked to setIsOpen, allowing the modal to automatically update the isOpen state when it is opened or closed.
// AlertDialogContent, AlertDialogHeader, AlertDialogFooter:

// These components are used to structure the modal's content:
// AlertDialogContent: The container for the main content of the modal.
// AlertDialogHeader: Contains the modal's title and description.
// AlertDialogFooter: Contains the action buttons, like "Cancel" and "Continue".
// Action Buttons:

// AlertDialogCancel: A button that allows the user to close the modal by setting isOpen to false.
// AlertDialogAction: A button that represents the action the user might take, such as continuing with a destructive operation.
// This structure allows the modal to be controlled directly via state, ensuring it opens automatically when the page loads and providing flexibility in how it behaves based on user interactions.
