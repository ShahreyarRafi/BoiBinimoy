"use client";

import Image from "next/image";
import '../Styles/card.css'
import { FaCartPlus, FaExchangeAlt } from "react-icons/fa";


export default function ExchangeCard({ item }) {
  console.log(item);
  return (
    // <div className="bg-[#fcfcf6] px-4 py-1 rounded-lg shadow-lg">
    //   <Image
    //     src={item.cover_image}
    //     alt="book"
    //     height={1500}
    //     width={1000}
    //     className="w-full mt-4 rounded-md shadow-md hover:scale-110 hover:shadow-xl transform-gpu duration-500"
    //   />
    //   <div className="space-y-1 mt-5 pb-1 ">
    //     <h2 className="text-lg font-bold text-[##2d3558] text-center">
    //       {item.title}
    //     </h2>
    //     <p className="text-sm text-[#626980] text-center">{item.author}</p>
    //     {/* <button className="bg-[#e26064] px-4 py-2 rounded-full text-white text-sm">Exchange Now</button> */}
    //   </div>
    // </div>

    <div className="l-container">
      <div className="b-game-card">
        <div className="b-game-card__cover" style={{ backgroundImage: `url(${item.cover_image})` }}>
          <div className="grid grid-cols-1 items-end justify-end gap-2 card__action">
            <button className=" text-white text-center text-xl border border-gray-600 border-opacity-30 backdrop-blur-md p-3 bg-black/30 rounded-full"><FaExchangeAlt /></button>
            <button className=" text-white text-center text-xl border border-gray-600 border-opacity-30 backdrop-blur-md p-3 bg-black/30 rounded-full"><FaCartPlus /></button>
          </div>
        </div>
      </div>
      <div className="space-y-1 mt-2.5 pb-1 ">
        <h2 className="text-lg font-bold text-[##2d3558] text-center">
          {item.title}
        </h2>
        <p className="text-sm text-[#626980] text-center">{item.writer}</p>
      </div>

    </div>




  );
}
