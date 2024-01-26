import AboutBanner from "@/components/AboutUs/AboutBanner/AboutBanner";
import ContactUs from "@/components/AboutUs/ContactUs/ContactUs";
import FoundersQuotes from "@/components/AboutUs/FoundersQuotes/FoundersQuotes";
import OurStory from "@/components/AboutUs/OurStories/OurStory";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const AboutUsPage = () => {
  return (
    <div className="bg-orange-50">
      <Navbar />
      <AboutBanner />
      <OurStory />
      <FoundersQuotes />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
