"use client";
import { Lato } from "next/font/google";
import ContactUs from "@/Components/AboutUs/ContactUs";
import AboutBanner from "@/Components/AboutUs/AboutBanner";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const about = () => {
  return (
    <div className={lato.className}>
      <div className="max-w-7xl mx-auto">
        <AboutBanner/>
        <ContactUs/>
      </div>
    </div>
  );
};

export default about;