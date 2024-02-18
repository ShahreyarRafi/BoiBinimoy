"use client"

import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import React from "react";

export default function CategoryPage() {
  return (
    <div className="bg-teal-50">
      <Navbar />
      <SectionTitle heading={"All Categories"}></SectionTitle>
      <Categories />
      <Footer />
    </div>
  );
}
