// import { Poppins } from "next/font/google";
// import { cn } from "@/lib/utils";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["600"]
// });

const HeroSection = () => {
  return (
    <div className="flex flex-col item-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Are your software delivery challenges
        <br></br>
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Keeping you awake?
        </span>
        <br />
      </h1>
      <br />
      <h1 className="text-base mt-8 text-center tracking-wide text-neutral-400">
        If you are a small or medium-sized software product or services
        organization grappling with significant delivery challenges, you
        have the urgency, unwavering commitment, and resources to conquer these
        obstacles to propel your business towards growth and success, then our
        consulting services are tailored precisely for you. <br /> <br />We specialize in
        assisting organizations like yours in navigating and overcoming complex
        delivery hurdles, enabling you to grow and thrive. 
        <br /><br />If you're
        ready to seize this opportunity for transformation and progress, we are
        here to support you every step of the way. 
        <br /><br />Let's work together to unlock
        your organization's full potential.
      </h1>
    </div>
  );
};

export default HeroSection;
