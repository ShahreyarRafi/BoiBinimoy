"use client";

import { Lato } from "next/font/google";
import ContactUs from "@/Components/ui/AboutUs/ContactUs";
import AboutBanner from "@/Components/ui/AboutUs/AboutBanner";
import FoundersQuotes from "@/Components/ui/AboutUs/FoundersQuotes";
import OurStory from "@/Components/ui/AboutUs/OurStory";
import Footer from "@/Components/ui/Home/Footer";
import Navbar from "@/Components/ui/shared/Navbar";

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
        <Navbar />
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