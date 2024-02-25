"use client";

import Publisher from "../../components/Publisher/Publisher";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

export default function PublisherPage() {
  return (
    <div>
      <Navbar />
      <SectionTitle heading={"Publisher"}></SectionTitle>
      <Publisher></Publisher>
      <Footer />
    </div>
  );
}
