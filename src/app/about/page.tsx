import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import AboutSection from "@/components/AboutSection";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const About = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-svh max-w-7xl mx-auto pt-5 px-6">
        <AboutSection />
      </div>
      <Footer />
    </>
  );
};

export default About;
