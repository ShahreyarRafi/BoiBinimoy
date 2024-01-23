"use client"

import BannerSlider from "@/Components/Home/BannerSlider/bannerSlider";
import Benefits from "@/Components/Home/BenifitsSection/BanefitsSection";
import Buy from "@/Components/Home/Buy/Buy";
import Exchange from "@/Components/Home/Exchange/Exchange";
import FAQ from "@/Components/Home/FAQs/FAQs";
import Navbar from "@/components/Shared/Navbar";



const HomePage = () => {
  return (
    <div className='bg-[#fffefe]'>
     
      {/* <Banner/> */}
      <BannerSlider />
      <Exchange />
      {/* <Popular /> */}
      <Buy />
      <Benefits />
      <FAQ />
    </div>
  );
};

export default HomePage;

