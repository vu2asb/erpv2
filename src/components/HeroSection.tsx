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
      <p className="text-lg text-center tracking-wide text-neutral-400">Are you a small to medium sized software product or services enterprise with a broken delivery engine in urgent need for improvement and are ready for transformation?</p> 
    </div>
  );
};

export default HeroSection;
