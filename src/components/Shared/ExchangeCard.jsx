"use client";

import './Card.css'
import { FaCartPlus, FaExchangeAlt } from "react-icons/fa";


export default function ExchangeCard({ item }) {
  console.log(item);
  return (
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
        <h2 className="text-lg font-bold text-[#016961] text-center">
          {item.title}
        </h2>
        <p className="text-sm text-[#626980] text-center">{item.writer}</p>
      </div>

    </div>




  );
}
