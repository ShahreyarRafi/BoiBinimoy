import Contact from "@/components/ContactUs/Contact/Contact";
import ContactBanner from "@/components/ContactUs/ContactBanner/ContactBanner";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-teal-50">
      <Navbar />
      <ContactBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
