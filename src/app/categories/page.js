import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

export default function CategoriesPage() {
  return (
    <div>
      <Navbar />
      <Categories />
      <Footer />
    </div>
  );
}
