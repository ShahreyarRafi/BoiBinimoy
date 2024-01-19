import Benefits from '@/Components/Banefits';
import FAQ from '@/Components/FAQs';
import Navbar from '@/components/shared/Navbar';
import Buy from '@/components/ui/Buy';
import Footer from '@/components/ui/Footer';
import Popular from '@/components/ui/Popular';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Popular></Popular>
      <Buy></Buy>
      <Benefits></Benefits>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
