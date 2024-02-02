"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const [fetchData, setFetchData] = useState(true);
  const param = useParams();

  useEffect(() => {
    if (fetchData) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://boi-binimoy-server.vercel.app/api/v1/buyBooks/${param.buyId}`
          );
          setBook(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
    }

    return () => {};
  }, [fetchData, param.buyId]);

  console.log(book);

  const exchangeBooks = [
    {
      id: 1,
      cover_image: "https://i.ibb.co/fNhJX8L/Untitled-design-8.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    },
    {
      id: 2,
      cover_image: "https://i.ibb.co/wyJk0Df/Untitled-design-11.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    },
    {
      id: 3,
      cover_image: "https://i.ibb.co/NVwBhZJ/Untitled-design-10.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    },
    {
      id: 4,
      cover_image: "https://i.ibb.co/d52WsrH/Untitled-design-9.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    },
    {
      id: 5,
      cover_image: "https://i.ibb.co/HzPW8vW/Untitled-design-13.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    },
    {
      id: 6,
      cover_image: "https://i.ibb.co/vdcSqxv/Untitled-design-12.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    },
  ];

  return (
    <div className="w-full bg-teal-50">
      {/* Bannar */}
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
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* book img section */}
          <div className="w-full">
            <Image
              src={book?.cover_image}
              alt="book"
              width={500}
              height={500}
              priority
              className="object-cover w-full rounded-lg"
            />
          </div>

          {/* book information section */}
          <div className="p-8 space-y-2 border-2 rounded-lg">
            <h2 className="text-4xl">{book?.title}</h2>
            <p className="text-xs">
              by <span className="font-bold">{book?.writer}</span>
            </p>
            <p className="text-3xl pt-3 pb-5">
              {book?.price} <span className="text-xs font-bold">$</span>
            </p>

            <div className="flex flex-wrap gap-3 pb-1">
              <p className="text-xs border rounded-sm px-2 py-1 font-bold">
                Category: Fiction
              </p>
              <p className="text-xs border rounded-sm px-2 py-1 font-bold">
                Language: {book?.language}
              </p>
              <p className="text-xs border rounded-sm px-2 py-1 font-bold">
                {book?.pages} page
              </p>
              <p className="text-xs border rounded-sm px-2 py-1 font-bold">
                Published Year: {book?.published_year}
              </p>
              <p className="text-xs border rounded-sm px-2 py-1 font-bold">
                Publisher: {book?.publisher}
              </p>
              <p className="text-xs border rounded-sm px-2 py-1 font-bold">
                Edition: {book?.edition}
              </p>
            </div>

            <p className="text-xs">
              <span className="text-sm font-bold text-justify">
                Description:{" "}
              </span>
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
              praesentium facere hic reiciendis totam eveniet tempore, vitae,
              natus maiores aliquam nulla architecto, perferendis repudiandae
              corrupti?
            </p>

            <div className="flex justify-center sm:justify-end gap-3 pt-10">
              <button className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1">
                Buy Now
              </button>
              <button className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Relatad section */}
        <div className="w-full border-2 rounded-lg overflow-auto p-5 my-5">
          <h2 className="text-3xl font-light pb-3">Relatad</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {exchangeBooks?.map((exchangeBook) => (
              <div
                key={exchangeBook.id}
                class="relative rounded-lg hover:drop-shadow-xl  transition-shadow"
              >
                <Image
                  src={exchangeBook.cover_image}
                  width={500}
                  height={500}
                  alt=""
                  className="object-cover rounded-lg"
                />

                <div className="absolute top-0 right-0">
                  <span class="text-xs font-light mr-2 px-2.5 py-0.5 rounded bg-green-200 text-green-800 ml-3">
                    Exchange
                  </span>
                </div>

                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/45 to-transparent rounded-b-lg">
                  <div class="px-5 py-5">
                    {/* Book Title & Auther Name */}
                    <div className="">
                      {/* Book Title */}
                      <h3 class="text-white font-semibold text-sm md:text-base">
                        {exchangeBook.title}
                      </h3>
                      {/* Auther Name */}
                      <p className="text-white text-xs font-extralight hidden md:flex">
                        by {exchangeBook.writer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* review section */}
        <div className="w-full  p-8 border-2 rounded-lg">
          <div className="max-w-5xl mx-auto">
            {/* send review */}
            <form className="flex items-center gap-3 pb-5">
              <input
                type="text"
                name="Comment"
                placeholder="Comment"
                id=""
                className="w-full h-8 px-2 bg-transparent border-b focus:outline-none focus:border-black"
              />
              <button type="submit" className="text-2xl text-[#016961]">
                <IoIosSend />
              </button>
            </form>

            {/* all review */}
            <div className="p-2 space-y-4">
              {/* review 1 */}
              <div className="flex items-center gap-3 px-3 py-1 shadow-sm rounded-lg">
                {/* user image */}
                <div className="">
                  <Image
                    className="object-cover w-12 h-12 mb-2 rounded-full shadow"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    width={500}
                    height={500}
                    alt="Person"
                  />
                </div>
                {/* user name, review */}
                <div>
                  <h5 className="text-md font-bold">Mr. jhon</h5>
                  <p className="text-xs">
                    Dolor sit amet, consectetur adipisicing elit.r adipisicing
                    elitr adipisicing elit
                  </p>
                </div>
                <hr />
              </div>

              {/* review 2 */}
              <div className="flex items-center gap-3 px-3 py-1 shadow-sm rounded-lg">
                {/* user image */}
                <div className="">
                  <Image
                    className="object-cover w-12 h-12 mb-2 rounded-full shadow"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    width={500}
                    height={500}
                    alt="Person"
                  />
                </div>
                {/* user name, review */}
                <div>
                  <h5 className="text-md font-bold">Mr. jhon</h5>
                  <p className="text-xs">
                    Dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

{
  /* 
            <h2 className="text-md border-b border-gray-300">
              <span className="font-bold text-[#f64d4e] ">Book Title:</span>{" "}
              {book?.title}
            </h2>
            <p className="text-gray-600 border-b border-gray-300">
              <span className="font-bold">Book Writer:</span> {book?.writer}
            </p>
            <p className="text-gray-600 border-b border-gray-300">
              <span className="font-bold">Book Language:</span> {book?.language}
            </p>
            <p className="text-gray-600 border-b border-gray-300">
              <span className="font-bold">Book Pages:</span> {book?.pages}
            </p>
            <p className="text-gray-600 border-b border-gray-300">
              <span className="font-bold">Published Year:</span>{" "}
              {book?.published_year}
            </p>
            <p className="text-gray-600 border-b border-gray-300">
              <span className="font-bold">Book Publisher:</span>{" "}
              {book?.publisher}
            </p>
            <p className="text-gray-600 border-b border-gray-300">
              <span className="font-bold">Book Price:</span> {book?.price}
            </p>
            <p className="text-gray-600 border-b border-gray-300">
              <span className="font-bold">Book Edition:</span> {book?.edition}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Description:</span>{" "}
              {book?.description}
            </p> */
}
