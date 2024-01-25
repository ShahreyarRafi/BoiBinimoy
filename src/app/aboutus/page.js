import AboutBanner from "@/components/AboutUs/AboutBanner/AboutBanner";
import ContactUs from "@/components/AboutUs/ContactUs/ContactUs";
import FoundersQuotes from "@/components/AboutUs/FoundersQuotes/FoundersQuotes";
import OurStory from "@/components/AboutUs/OurStories/OurStory";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const AboutUsPage = () => {
  return (
    <div className={lato.className}>
      <div>
        <AboutBanner />
        <OurStory />
        <FoundersQuotes />
        <ContactUs />
      </div>
    </div>
  );
};

export default AboutUsPage;