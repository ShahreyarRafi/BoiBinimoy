"use client";

import BannerSlider from "../components/Home/BannerSlider/BannerSlider"
import Footer from "@/components/Shared/Footer";
import TestExchange from "@/components/Exchange/Exchange";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Header from "@/components/Home/Header/Header";
import Category from "@/components/Home/Category/Category";
import Buy from "@/components/Home/Buy/Buy";
import Exchange from "@/components/Home/Exchange/Exchange";


const HomePage = () => {
  return (
    <div className="bg-orange-50">
      <div className="parallax">
        <BannerSlider />
      </div>
      <div className="mt-[100vh]">
        <Navbar />
        <Header />
        {/* <Category /> */}
        <TestExchange />
        <Exchange />
        <Buy />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
