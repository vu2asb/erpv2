import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <div className="flex flex-col item-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Is your software delivery operation
        <br></br><span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
           Keeping you awake?
        </span>
        <br/>
      </h1>
      <br/>
      <h1 className="text-lg text-center tracking-wide text-neutral-400">Is your small or medium-sized software product or services enterprise seeking urgent improvements to its delivery engine? If you're committed, driven, and have a reasonable budget for transformation, I'm here to help.</h1> 
    </div>
  );
};

export default HeroSection;
