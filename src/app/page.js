"use client"

import Benefits from '@/Components/Home/BenifitsSection/BanefitsSection';
import FAQ from '@/Components/Home/FAQs/FAQs';
import Buy from "@/Components/Home/Buy/Buy";
import Exchange from "@/Components/Home/Exchange/Exchange";
;
import Navbar from '@/Components/Shared/Navbar';

import BannerSlider from '@/Components/Home/BannerSlider/BannerSlider';


const HomePage = () => {
  return (
    <div className='bg-[#fffefe]'>
      
      {/* <Banner/> */}
      <BannerSlider></BannerSlider>
      <Navbar />
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
