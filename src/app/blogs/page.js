

import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

export default function BlogPage() {
  return (
    <div className="bg-teal-50">
      <Navbar />
      <SectionTitle heading={"Blog Page"}></SectionTitle>
      <Blog />
      <Footer />
    </div>
  );
}
