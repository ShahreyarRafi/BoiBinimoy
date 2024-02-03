

import AllBooksBanner from "@/components/BuyAllBooks/AllBooksBanner/AllBooksBanner";
import AllBooks from "@/components/BuyAllBooks/BuyAllBooks";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-teal-50">
      <Navbar />
      <AllBooksBanner />
      <AllBooks />
      <Footer />
    </div>
  );
};

export default page;
