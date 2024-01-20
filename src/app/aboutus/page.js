"use client";

import { Lato } from "next/font/google";
import ContactUs from "@/components/ui/AboutUs/ContactUs";
import AboutBanner from "@/components/ui/AboutUs/AboutBanner";
import FoundersQuotes from "@/components/ui/AboutUs/FoundersQuotes";
import OurStory from "@/components/ui/AboutUs/OurStory";
import Footer from "@/components/ui/Home/Footer";
import Navbar from "@/Components/shared/Navbar";

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