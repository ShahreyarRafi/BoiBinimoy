"use client"

import Benefits from '@/Components/ui/Home/Banefits';
import FAQ from '@/Components/ui/Home/FAQs';
import Buy from "@/Components/ui/Home/Buy";
import Exchange from "@/Components/ui/Home/Exchange";
import Footer from "@/Components/ui/Home/Footer";
import Popular from "@/Components/ui/Home/Popular";
import Navbar from '@/Components/ui/shared/Navbar';
import Banner from '@/Components/ui/Home/Banner';
import BannerSlider from '@/Components/ui/Home/BannerSlider/bannerSlider';


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

