"use client";
import PublisherComponent from "@/components/Publisher/Publisher";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

export default function PublisherPage() {
  return (
    <div>
      <Navbar />
      <PublisherComponent />
      <Footer />
    </div>
  );
}
