import Image from "next/image";
import React from "react";
import ExchangeCard from "../../Shared/ExchangeCard";
import { FiArrowUpRight } from "react-icons/fi";





const TestExchange = () => {
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
    {
      id: 7,
      cover_image: "https://i.ibb.co/fNhJX8L/Untitled-design-8.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    },
    {
      id: 8,
      cover_image: "https://i.ibb.co/wyJk0Df/Untitled-design-11.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    },
    {
      id: 9,
      cover_image: "https://i.ibb.co/NVwBhZJ/Untitled-design-10.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    },
    {
      id: 10,
      cover_image: "https://i.ibb.co/HzPW8vW/Untitled-design-13.png",
      title: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      genre: "Classic",
      description:
        "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    }
  ];

 const transparentBanner = "https://i.ibb.co/GPmg3HB/Swap-Books-t.png"

  return (
    <div className="container mx-auto pt-5 rounded-lg px-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl text-[#016961] font-bold text-nowrap">
          Exchange Now
        </h2>
        <hr className="hr" />
        <div className="flex items-center justify-end gap-3 text-nowrap">
          {/* View All button */}
          <button className="button-color px-4 py-2 rounded-full text-sm md:text-base text-teal-50 flex items-center gap-1">
            View All <span className="text-xl"><FiArrowUpRight /></span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
        <div className="col-span-2 hidden lg:block pt-[20px]">
          <div className="rounded-lg object-cover w-full h-full">
            <Image
              className="rounded-lg object-cover md:w-full h-full border border-dashed border-[#016961]"
              src={transparentBanner}
              alt="alt"
              width={1200}
              height={3000}
            />
          </div>
        </div>

        <div className="col-span-full lg:col-span-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {exchangeBooks.map(item => (
              <ExchangeCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestExchange;
