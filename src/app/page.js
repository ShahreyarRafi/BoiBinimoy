// "use client"

import Benefits from '@/Components/Banefits';
import FAQ from '@/Components/FAQs';
import Navbar from "@/Components/shared/Navbar";
import Buy from "@/Components/ui/Buy";
import Exchange from "@/Components/ui/Exchange";
import Footer from "@/Components/ui/Footer";
import Popular from "@/Components/ui/Popular";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Exchange />
      <Popular></Popular>
      <Buy></Buy>
      <Benefits></Benefits>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;

