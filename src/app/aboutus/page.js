"use client"

import Navbar from "@/components/Shared/Navbar/Navbar";
import OurStory from "@/components/AboutUs/OurStories/OurStory";
import Footer from "@/components/Shared/Footer/Footer";
import Teams from "@/components/AboutUs/Teams/Teams";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";


const page = () => {

  return (
    <div className="bg-teal-50">
      <Navbar />
      <SectionTitle heading={"About Us"}></SectionTitle>
      <OurStory />
      <Teams />
      <Footer />
    </div>
  );
};

export default page;
