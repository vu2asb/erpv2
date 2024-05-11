import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Services from "@/components/Services"


const About = () => {
    return (
      <>
        <NavBar />
        <div className="min-h-svh max-w-7xl mx-auto pt-5 px-6">
         <Services />
        </div>
        <Footer />
      </>
    );
  };
  
  export default About;
