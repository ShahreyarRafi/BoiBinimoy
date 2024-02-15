import Banner from "../components/Home/Banner/Banner";
import Footer from "@/components/Shared/Footer/Footer";
import Exchange from "@/components/Home/Exchange/Exchange";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Header from "@/components/Home/Header/Header";
import BuyNow from "@/components/Home/BuyNow/BuyNow";
import Trending from "@/components/Home/Trending/Trending";
import Stats from "@/components/Home/Stats/Stats";
import Category from "@/components/Home/Category/Category";
const HomePage = () => {
  return (
    <div className="bg-teal-50">
      <div className="">
        <div className="parallax hidden md:block">
          <Banner />
        </div>
        <div className="md:mt-[100vh]">
          <Navbar />
          <Header />
          <Category />
          <Stats />
          <Exchange />
          <Trending />
          <BuyNow />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
