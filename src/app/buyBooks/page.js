"use client"

import BuyAllBooks from "@/components/BuyBook/BuyAllBooks/BuyAllBooks";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import React from "react";

const page = () => {
  return (
    <div className="bg-teal-50">
      <Navbar />
      <SectionTitle heading={"All Books"}></SectionTitle>
      <BuyAllBooks />
      <Footer />
    </div>
  );
};

export default page;
