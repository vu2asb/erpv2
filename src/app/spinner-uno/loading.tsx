"use client";

import SpinnerUno from "@/components/ui/spinnerUno";


const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-primary">
      <SpinnerUno />
    </div>
  );
};

export default Loading;