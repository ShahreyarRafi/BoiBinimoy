"use client";
import Header from "@/components/Home/Header/Header";
import PublisherComponent from "@/components/Publisher/Publisher";
import PublisherBanner from "@/components/Publisher/PublisherBanner";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

export default function PublisherPage() {
  return (
    <div>
      <Navbar />
      <PublisherBanner />
      <PublisherComponent />
      <Footer />
    </div>
  );
}
