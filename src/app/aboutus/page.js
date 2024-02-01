import Navbar from "@/components/Shared/Navbar/Navbar";
import AboutBanner from "@/components/AboutUs/AboutBanner/AboutBanner";
import OurStory from "@/components/AboutUs/OurStories/OurStory";
import Footer from "@/components/Shared/Footer";
import Teams from "@/components/AboutUs/Teams/Teams";

const page= () => {
  return (
    <div className="bg-orange-50">
      <Navbar />
      <AboutBanner />
      <OurStory />
      <Teams />
      <Footer />
    </div>
  );
};

export default page;
