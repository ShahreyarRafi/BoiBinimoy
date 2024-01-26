import AboutBanner from "@/components/AboutUs/AboutBanner/AboutBanner";
import ContactUs from "@/components/AboutUs/ContactUs/ContactUs";
import FoundersQuotes from "@/components/AboutUs/FoundersQuotes/FoundersQuotes";
import OurStory from "@/components/AboutUs/OurStories/OurStory";

const AboutUsPage = () => {
  return (
    <div className="bg-orange-50">
      <div className={lato.className}>
        <AboutBanner />
        <OurStory />
        <FoundersQuotes />
        <ContactUs />
      </div>
    </div>
  );
};

export default AboutUsPage;
