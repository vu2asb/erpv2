"use client";

import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-svh max-w-7xl mx-auto pt-5 px-6">
      <div className="border border-slate-500 sm: flex flex-col w-full min-h-fit md:flex-row">
        {/* Left side div*/}
        <div className="border border-black w-[100%] relative bg-cover bg-center">
          <Image
            src="/assets/living_room.png"
            alt="Picture for the Webinar registeration form"
            width={100}
            height={100}
            layout="responsive"
            objectFit="contain" // or 'cover' depending on your needs
          />
          {/* <h1 className="absolute top-10 left-10 text-white text-xl font-bold">
            Webinar Registeration Form
          </h1> */}
          <div className="flex flex-col absolute top-[10px] left-[10px] text-slate-800 text-xl">
            <div className="text-2xl sm:text-3xl font-bold md:text-[16px]/[2]">Level-up your game </div>
            <div className="text-[18px] sm:text-1.5xl md:text-[12px]/[1.5] lg:text-[14px]/[1.5]">
              <div>Learn valuable insights and gain a competitive edge</div>
              <div>Don't miss out - register "Now!"</div>
            </div>
          </div>
        </div>

        {/* Right side div */}
        <div className="border border-black w-[100%] m-0 p-10">
          The right side div
        </div>
      </div>
    </div>
  );
};

export default page;
