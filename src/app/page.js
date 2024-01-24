"use client";
import Benefits from "@/components/Home/BenifitsSection/BanefitsSection";
import FAQ from "@/components/Home/FAQs/FAQs";
import Buy from "@/components/Home/Buy/Buy";
import Exchange from "@/components/Home/Exchange/Exchange";
import Navbar from "@/components/Shared/Navbar";
import BannerSlider from "@/components/Home/BannerSlider/BannerSlider";
import Footer from "@/components/Shared/Footer";

const HomePage = () => {
  return (
    <div className="bg-orange-50">
      <BannerSlider />
      <Navbar />
      <Exchange />
      {/* <Popular /> */}
      <Buy />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
