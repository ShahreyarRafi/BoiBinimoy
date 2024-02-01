import Blog from "@/components/Blog/Blog";
import BlogBanner from "@/components/Blog/BlogBanner/BlogBanner";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

export default function BlogPage() {
  return (
    <div className="bg-orange-50">
      <Navbar />
      <BlogBanner />
      <Blog />
      <Footer />
    </div>
  );
}
