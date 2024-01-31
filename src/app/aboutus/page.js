import AboutBanner from "@/components/AboutUs/AboutBanner/AboutBanner";
import OurStory from "@/components/AboutUs/OurStories/OurStory";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const AboutUsPage = () => {
  return (
    <div className="bg-orange-50">
      <Navbar />
      <AboutBanner />
      <OurStory />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
