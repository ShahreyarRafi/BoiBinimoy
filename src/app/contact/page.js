import Contact from "@/components/Contact/Contact";
import ContactBanner from "@/components/Contact/ContactBanner/ContactBanner";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const contact = () => {
  return (
    <div className="bg-orange-50">
      <Navbar />
      <ContactBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default contact;
