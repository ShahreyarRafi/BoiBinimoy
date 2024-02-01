import Image from "next/image";
import React from "react";

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
    },
    // {
    //   id: 11,
    //   cover_image: "https://i.ibb.co/fNhJX8L/Untitled-design-8.png",
    //   title: "The Great Gatsby",
    //   writer: "F. Scott Fitzgerald",
    //   genre: "Classic",
    //   description:
    //     "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    // },
    // {
    //   id: 12,
    //   cover_image: "https://i.ibb.co/d52WsrH/Untitled-design-9.png",
    //   title: "The Great Gatsby",
    //   writer: "F. Scott Fitzgerald",
    //   genre: "Classic",
    //   description:
    //     "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
    // },
  ];

  return (
    <div className="container mx-auto my-20 px-5 py-10 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-3">
        <div className="col-span-2">
          <div class="rounded-lg bg-orange-300 w-full h-full"></div>
        </div>

        <div className="col-span-6">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
                <span class="text-xs font-light mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
                  seal
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
      </div>
    </div>
  );
};

export default TestExchange;
