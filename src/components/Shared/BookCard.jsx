"use client"

import "./Card.css";
import Link from "next/link";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaCartPlus, FaExchangeAlt } from "react-icons/fa";

// bg-[#f2fdf9]
// text-[#2f8880]

export default function ExchangeCard({ item }) {

  // console.log(item);

  return (
    <div className="l-container md:p-1 ">
      <div className="b-game-card ">
        <div
          className="b-game-card__cover book-cover-effect"
          style={{ backgroundImage: `url(${item?.cover_image})` }}
        >
          <div className="grid grid-cols-1 items-end justify-end gap-2 card__action">
            <Link href={`/buyBooks/${item?._id}`}>
              <button className=" text-white text-center text-xl border border-gray-600 border-opacity-30 backdrop-blur-md p-3 bg-black/30 rounded-full">
                <FaExchangeAlt />
              </button>
            </Link>

            <button className=" text-white text-center text-xl border border-gray-600 border-opacity-30 backdrop-blur-md p-3 bg-black/30 rounded-full">
              <FaCartPlus />
            </button>
          </div>
          <span className="price-tag">
            <span className="text-lg">$29.99</span>
          </span>
        </div>
      </div>

      <div className="px-1">
        <div className="space-y-1 mt-2.5 pb-1">
          <h2 className="text-lg font-bold text-[#016961] line-clamp-1">
            {item?.title}
          </h2>
          <p className="text-[13px] text-[#626980] italic line-clamp-1"> <span>-</span> {item?.writer}</p>
        </div>

        <div className='flex items-center truncate mt-1 text-[#62807b] text-sm'>
          <div className='flex gap-[1px] -mt-[2px] mr-1.5'>
            {Array.from({ length: Math.min(Math.floor(3.5), 5) }, (_, index) => (
              <span key={index} className="text-yellow-400"><BsStarFill /></span>
            ))}
            {3.5 % 1 !== 0 && (
              <span className="text-yellow-400"><BsStarHalf /> </span>
            )}
            {Array.from({ length: Math.max(5 - Math.ceil(3.5), 0) }, (_, index) => (
              <span key={index} className="text-gray-400"><BsStar /></span>
            ))}
          </div>
          <p>{Math.min(3.5, 5)} {Math.min(3.5, 5) > 1 ? ("Ratings") : ("Rating")}</p>
        </div>

        <hr className="hr-card" />
        <div className="mt-2.5">
          <p className="text-sm text-[#62807b] line-clamp-3"> {item?.description}</p>
        </div>

      </div>
    </div>
  );
}
