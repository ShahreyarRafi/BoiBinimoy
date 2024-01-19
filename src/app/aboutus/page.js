"use client";

import { Lato } from "next/font/google";
import ContactUs from "@/Components/AboutUs/ContactUs";
import AboutBanner from "@/Components/AboutUs/AboutBanner";
import FoundersQuotes from "@/Components/FoundersQuotes";
import OurStory from "@/Components/OurStory";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/ui/Footer";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const about = () => {
  return (
    <div className={lato.className}>
      <div>
        <Navbar></Navbar>
        <AboutBanner />
        <OurStory />
        <FoundersQuotes />
        <ContactUs />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default about;
