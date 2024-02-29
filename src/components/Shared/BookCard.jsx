"use client";

import { AuthContext } from "@/providers/AuthProvider";
import "./Card.css";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaCartPlus, FaExchangeAlt, FaRegHeart } from "react-icons/fa";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useWishListBook from "@/Hooks/wishList/useWishListBook";
import Swal from "sweetalert2";

// bg-[#f2fdf9]
// text-[#2f8880]


export default function ExchangeCard({ item, }) {

  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext)
  const userEmail = user?.email

  const { _id, title, cover_image, price, writer } = item || {}
  // console.log(title, cover_image, item);
  const [wishListBook, refetch] = useWishListBook()

  const filteredData = wishListBook.filter(book => book.book_id === _id);

  console.log(filteredData);


  const handleAddToWishlist = () => {
    const wishlistData = {
      userEmail,
      book_id: _id,
      title,
      cover: cover_image,
      writer,
      price,
    };

    console.log(wishlistData);
    // add operation
    axiosSecure.post('/api/v1/wishlist', wishlistData)
      .then(response => {
        console.log('Wishlist item added:', response.data);
        refetch()
      })
      .catch(error => {
        console.error('Error adding to wishlist:', error);
      })
  };



  // delete operation 
  const handleBookDelete = () => {
    console.log(filteredData[0]._id);
    axiosSecure.delete(`/api/v1/wishlist/remove/${filteredData[0]._id}`)
      .then(response => {
        console.log('Wishlist item removed:', response.data);
        refetch();
      })
      .catch(error => {
        console.error('Error removing item from wishlist:', error);
      });
  };





  return (

    <div className="l-container md:p-1">
      <div className="b-game-card ">
        <div
          className="b-game-card__cover book-cover-effect"
          style={{ backgroundImage: `url(${item?.cover_image})` }}
        >
          <div className="grid grid-cols-1 items-end justify-end gap-2 card__action z-50">
            {/* 
                <button className=" text-white text-center text-xl border border-gray-600 border-opacity-30 backdrop-blur-md p-3 bg-black/30 rounded-full">
                  <FaRegHeart />
                </button> */}


            {filteredData.length > 0 ? (
              // Render "Remove" button when filteredData.length > 0
              <button onClick={handleBookDelete} className="text-white text-center text-xl border border-gray-600 border-opacity-30 backdropdata.-blur-md p-3 bg-black/30 rounded-full">
                Remove
              </button>

            ) : filteredData.length === 0 ? (
              <div >
                <button onClick={handleAddToWishlist} className="text-white text-center text-xl border border-gray-600 border-opacity-30 backdrop-blur-md p-3 bg-black/30 rounded-full">
                  Adding
                </button>
              </div>
            ) : (
              <button onClick={handleAddToWishlist} className="text-white text-center text-xl border border-gray-600 border-opacity-30 backdrop-blur-md p-3 bg-black/30 rounded-full">
                Add
              </button>
            )}

          </div>
          <span className="price-tag">
            <span className="text-lg">{item?.price}</span>
          </span>
        </div>
      </div>

      <div className="px-1">
        <div className="space-y-1 mt-2.5 pb-1">
          <Link href={`/buyBooks/${item?._id}`}>
            <h2 className="text-lg font-bold text-[#016961] line-clamp-1">
              {item?.title}
            </h2>
          </Link>
          <p className="text-[13px] text-[#626980] italic line-clamp-1">
            {" "}
            <span>-</span> {item?.writer}
          </p>
        </div>

        <div className="flex items-center truncate mt-1 text-[#62807b] text-sm">
          <div className="flex gap-[1px] -mt-[2px] mr-1.5">
            {Array.from(
              { length: Math.min(Math.floor(3.5), 5) },
              (_, index) => (
                <span key={index} className="text-yellow-400">
                  <BsStarFill />
                </span>
              )
            )}
            {3.5 % 1 !== 0 && (
              <span className="text-yellow-400">
                <BsStarHalf />{" "}
              </span>
            )}
            {Array.from(
              { length: Math.max(5 - Math.ceil(3.5), 0) },
              (_, index) => (
                <span key={index} className="text-gray-400">
                  <BsStar />
                </span>
              )
            )}
          </div>
          <p>
            {Math.min(3.5, 5)} {Math.min(3.5, 5) > 1 ? "Ratings" : "Rating"}
          </p>
        </div>

        <hr className="hr-card" />
        <div className="mt-2.5">
          <p className="text-sm text-[#62807b] line-clamp-3">
            {item?.description}
          </p>
        </div>
      </div>
    </div>

  );
}
