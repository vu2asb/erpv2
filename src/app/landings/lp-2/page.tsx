import TimerLP from "@/components/timer-lp";

const LandingPage2 = () => {
  return (
    <main className="container mx-auto h-screen flex justify-center items-center">
      <div className="px-4 w-full flex flex-col justify-center items-center">
        <section className="m-20 p-20">
          <h1 className="text-2xl">The upper part of the landing page.</h1>
        </section>
        <section className="m-10 p-5 flex flex-row">
          <TimerLP launchDate="2024-09-15T17:00:00"/> 
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
