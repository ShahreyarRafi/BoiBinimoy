"use client";

import BannerSlider from "@/components/Home/BannerSlider/BannerSlider";
import Footer from "@/components/Shared/Footer";
import TestExchange from "@/components/Exchange/Exchange";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Header from "@/components/Home/Header/Header";
import Category from "@/components/Home/Category/Category";

const HomePage = () => {
  return (
    <div className="bg-orange-50">
      <div className="parallax">
        <BannerSlider />
      </div>
      <div className="mt-[70vh]">
        <Navbar />
        <Header />
        {/* <Category /> */}
        <TestExchange />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
