

import Banner from "../components/Home/Banner/Banner";
import Footer from "@/components/Shared/Footer/Footer";
import Exchange from "@/components/Home/Exchange/Exchange";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Header from "@/components/Home/Header/Header";
import BuyNow from "@/components/Home/BuyNow/BuyNow";

import Stats from "@/components/Home/Stats/Stats";
import Category from "@/components/Home/Category/Category";
import Publisher from "@/components/Home/Publisher/Publisher";
import Writer from "@/components/Home/Writer/Writer";
import ForYou from "@/components/Home/ForYou/ForYou";
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
          <Writer />
          <ForYou />
          <Publisher />
          <BuyNow />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
