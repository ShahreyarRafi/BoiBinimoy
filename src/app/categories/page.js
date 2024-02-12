import Categories from "@/components/Categories/Categories";
import ContactBanner from "@/components/ContactUs/ContactBanner/ContactBanner";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

export default function CategoryPage() {
  return (
    <div className="bg-teal-50">
      <Navbar />
      <ContactBanner />
      <Categories />
      <Footer />
    </div>
  );
}
