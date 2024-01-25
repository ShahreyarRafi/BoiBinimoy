"use client"

import Benefits from '@/components/Home/BenifitsSection/BanefitsSection';
import FAQ from '@/components/Home/FAQs/FAQs';
import Buy from "@/components/Home/Buy/Buy";
import Exchange from "@/components/Home/Exchange/Exchange";
import Navbar from '@/components/Shared/Navbar';
import BannerSlider from '@/components/Home/BannerSlider/BannerSlider.jsx'
import TestNav from '@/components/Shared/TestNav';


const HomePage = () => {
  return (
    <div className='bg-[#fffefe]'>

      {/* <Banner/> */}
      <BannerSlider></BannerSlider>
      <TestNav></TestNav>
      {/* <Navbar /> */}
      <Exchange />
      {/* <Popular /> */}
      <Buy />
      <Benefits />
      <FAQ></FAQ>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
