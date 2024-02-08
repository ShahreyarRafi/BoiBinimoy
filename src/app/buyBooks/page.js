"use client"

import AllBooksBanner from "@/components/BuyAllBooks/AllBooksBanner/AllBooksBanner";
import BuyAllBooks from "@/components/BuyAllBooks/BuyAllBooks";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <AllBooksBanner />
      <BuyAllBooks />
      <Footer />
    </div>
  );
};

export default page;
