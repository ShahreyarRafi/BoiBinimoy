import Categories from "@/components/Categories/Categories";
import CategoriesBanner from "@/components/Categories/CategoriesBanner";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

export default function CategoriesPage() {
  return (
    <div>
      <Navbar />
      <CategoriesBanner />
      <Categories />
      <Footer />
    </div>
  );
}
