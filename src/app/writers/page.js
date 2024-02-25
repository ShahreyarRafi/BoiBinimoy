import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import WritersComponent from "@/components/Writers/Writers";
import WritersBanner from "@/components/Writers/WritersBanner";
import React from "react";

export default function WritersPage() {
  return (
    <div>
      <Navbar />
      <WritersBanner />
      <WritersComponent />
      <Footer />
    </div>
  );
}
