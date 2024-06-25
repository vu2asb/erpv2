import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/ContactUsSection";


const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-svh max-w-7xl mx-auto pt-5 px-6">
        <ContactUsSection />
      </div>
      <Footer />
    </>
  )
}

export default ContactUs
