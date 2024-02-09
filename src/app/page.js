import BannerSlider from "../components/Home/BannerNew/BannerNew";
import Footer from "@/components/Shared/Footer";
import Exchange from "@/components/Home/Exchange/Exchange";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Header from "@/components/Home/Header/Header";
import Buy from "@/components/Home/Buy/Buy";
import Trending from "@/components/Home/Trending/Trending";
import Stats from "@/components/Home/Stats/Stats";
import Category from "@/components/Home/Category/Category";

const HomePage = () => {
  return (
    <div className="bg-teal-50">
      <div className="parallax hidden md:block">
        <BannerSlider />
      </div>
      <div className="md:mt-[100vh]">
        <Navbar />
        <Header />
        <Category />
        <Stats />
        <Exchange />
        <Trending />
        <Buy />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
