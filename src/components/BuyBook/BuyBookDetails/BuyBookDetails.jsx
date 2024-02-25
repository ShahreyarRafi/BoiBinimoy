"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import Related from "../../Shared/Related/Related";
import PageLoading from "../../Shared/loadingPageBook/PageLoading";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import ReviewCard from "@/components/Shared/ReviewCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useOneUser from "@/Hooks/Users/useOneUser";
import useReviews from "@/Hooks/Reviews/useReviews";
import useGetOneBuyBook from "@/Hooks/buyBooks/useGetOneBuyBook";

const BuyBookDetails = () => {
  const param = useParams();
  const book_id = param.buyId
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { currentUser } = useOneUser();
  const { reviews, isPending, refetch }  = useReviews(book_id)
  const { getOneBuyBook : book, isLoading: bookLoading, refetch: bookRefetch } = useGetOneBuyBook(book_id)

  console.log(book_id);

  if (bookLoading || isPending) {
    return (
      <PageLoading />
    )
  }

  console.log(book);


  // Handle comment form
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;

    const user_name = currentUser?.name;
    const user_email = currentUser?.email;
    const user_image = currentUser?.image;
    const rating = 5;
    const book_id = book?._id;

    const newComment = {
      user_name,
      user_email,
      user_image,
      rating,
      comment,
      book_id
    }

    axiosSecure
      .post("/api/v1/reviews", newComment)
      .then((response) => {
        refetch()
        console.log("Response:", response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Comment Added.",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // Handle add to cart
  const handleCart = () => {

    const user_name = currentUser?.name;
    const user_email = currentUser?.email;
    const book_id = book?._id;
    const price = book?.price;
    const quantity  = 1;

    const addCart = {
      user_name,
      user_email,
      book_id,
      price,
      quantity
    }

    axiosSecure
      .post("/api/v1/carts", addCart)
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Add book in the cart.",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  return (
    <div className="w-full bg-teal-50">
      {/* Banner */}
      <div className="relative bg-[#016961]">
        {/* bottom curve */}
        <div className="absolute inset-x-0 bottom-0 ">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-teal-50"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>

        {/* Information section */}
        <div className="text-center px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
              Detail of &quot;{book?.title}&quot;
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-2">
        {/* book img and information section */}
        <div className="relative flex justify-center p-5 bg-[#016961] rounded-lg w-full mt-60">
          {/* Book Image */}
          <div className="flex-shrink-0 w-2/5">
            <Image
              src={book?.cover_image}
              width={1000}
              height={1500}
              alt=""
              className="absolute bottom-5 ring-0 w-2/5 border-none rounded-md shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Book Information */}
          <div className="px-10 text-white">
            <h2 className="text-4xl">{book?.title}</h2>
            <p className="text-xs">
              by <span className="font-bold text-sm">{book?.writer}</span>
            </p>
            <p className="text-3xl pt-3 pb-5">
              {book?.price} <span className="text-xs font-bold">$</span>
            </p>

            <div className="flex flex-wrap gap-3 pb-1">
              <p className="text-xs border rounded-md px-2 py-1 font-bold">
                Category: Fiction
              </p>
              <p className="text-xs border rounded-md px-2 py-1 font-bold">
                Language: {book?.language}
              </p>
              <p className="text-xs border rounded-md px-2 py-1 font-bold">
                {book?.pages} page
              </p>
              <p className="text-xs border rounded-md px-2 py-1 font-bold">
                Published Year: {book?.published_year}
              </p>
              <p className="text-xs border rounded-md px-2 py-1 font-bold">
                Publisher: {book?.publisher}
              </p>
              <p className="text-xs border rounded-md px-2 py-1 font-bold">
                Edition: {book?.edition}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-1">
              {/* Rating */}
              <div className="flex items-center text-white text-xl mr-2">
                <span className="mr-1">&#9733;</span>
                <span className="mr-1">&#9733;</span>
                <span className="mr-1">&#9733;</span>
                <span className="mr-1">&#9733;</span>
                <span className="mr-1">&#9733;</span>
              </div>
              {/* Vote */}
              <span className="text-sm">(4.5/5)</span>
            </div>
            {/* Book Description */}
            <p className="text-xs text-justify">
              <span className="text-sm font-bold">Description: </span>
              {book?.description} lor sit amet consectetur adipisicing elit.
              Impedit ducimus dolores exercitationem distinctio rerum
              praesentium facere hic reiciendis totam eveniet tempore, vitae,
              natus maiores aliquam nulla architecto, perferendis repudiandae
              praesentium facere hic reiciendis totam eveniet tempore, vitae,
              natus maiores aliquam nulla architecto, perferendis repudiandae
              praesentium facere hic reiciendis totam eveniet tempore, vitae,
              natus maiores aliquam nulla architecto, perferendis repudiandae
              praesentium facere hic reiciendis totam eveniet tempore, vitae,
              natus maiores aliquam nulla architecto, perferendis repudiandae
              praesentium facere hic reiciendis totam eveniet tempore, vitae,
              natus maiores aliquam nulla architecto, perferendis repudiandae
              praesentium facere hic reiciendis totam eveniet tempore, vitae,
              natus maiores aliquam nulla architecto, perferendis repudiandae
              praesentium facere hic reiciendis totam. {book?.description}
            </p>

            {/* User action */}
            <div className="flex items-center gap-3">
              <button className="mt-6 text-center cursor-pointer bg-white text-[#016961] font-semibold p-2 text-sm rounded-full ">
                Buy Now
              </button>
              <button onClick={handleCart} className="mt-6 text-center cursor-pointer bg-white text-[#016961] font-semibold p-2 text-lg rounded-full ">
                <FaCartPlus />
              </button>
              <button className="mt-6 text-center cursor-pointer bg-white text-[#016961] font-semibold p-2 text-lg rounded-full ">
                <FaHeartCirclePlus />
              </button>
            </div>
          </div>
        </div>

        {/* Related section */}
        <Related />

        {/* review section */}
        <div className="w-full p-8 border-2 rounded-lg">
          <div className="max-w-5xl mx-auto">
            {/* send review */}
            <form onSubmit={handleSubmit} className="flex items-center gap-3 pb-5">
              <input
                type="text"
                name="comment"
                id="comment"
                placeholder="comment"
                className="w-full h-8 px-2 bg-transparent border-b focus:outline-none focus:border-black"
              />
              <button type="submit" className="text-2xl text-[#016961]">
                <IoIosSend />
              </button>
            </form>

            {/* all review */}
            <div className="p-2 space-y-4">
              {reviews && reviews?.map(commenter => <ReviewCard key={commenter?.user_email} review={commenter}></ReviewCard>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBookDetails;
