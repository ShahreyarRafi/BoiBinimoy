"use client";

import BannerSlider from "../components/Home/BannerNew/BannerNew";
import Footer from "@/components/Shared/Footer";
import TestExchange from "@/components/Exchange/Exchange";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Header from "@/components/Home/Header/Header";
import Buy from "@/components/Home/Buy/Buy";
import Exchange from "@/components/Home/Trending/Trending";
import Stats from "@/components/Home/Stats/Stats";

const HomePage = () => {
  return (
    <div className="bg-teal-50">
      <div className="parallax">
        <BannerSlider />
      </div>
      <div className="mt-[100vh]">
        <Navbar />
        <Header />
        <Stats />
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
