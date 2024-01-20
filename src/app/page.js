"use client"

import Benefits from '@/components/ui/Home/Banefits';
import FAQ from '@/components/ui/Home/FAQs';
import Buy from "@/components/ui/Home/Buy";
import Exchange from "@/components/ui/Home/Exchange";
import Footer from "@/components/ui/Home/Footer";
import Popular from "@/components/ui/Home/Popular";
import Navbar from '@/Components/shared/Navbar';
import Banner from '@/components/ui/Home/Banner';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Exchange />
      <Popular />
      <Buy></Buy>
      <Benefits />
      <FAQ></FAQ>
      <Footer />
    </div>
  );
};

export default HomePage;

