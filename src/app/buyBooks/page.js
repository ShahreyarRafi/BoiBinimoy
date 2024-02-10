"use client"

import AllBooksBanner from "@/components/BuyBook/AllBooksBanner/AllBooksBanner";
import BuyAllBooks from "@/components/BuyBook/BuyAllBooks/BuyAllBooks";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-teal-50">
      <Navbar />
      <AllBooksBanner />
      <BuyAllBooks />
      <Footer />
    </div>
  );
};

export default page;
