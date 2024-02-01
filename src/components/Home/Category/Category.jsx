import Image from "next/image";
import React from "react";
import icon from "@/assets/ScienceFiction.png";

const Category = () => {
  const categories = [
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
    {
      title: "Science Fiction",
      image: "image.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-5 rounded-lg w-full bg-orange-300 p-10">
      <h4 className="text-3xl text-white font-bold text-center mb-8">
        Find books by Category
      </h4>
      <div className="grid grid-cols-8 gap-3">
        {categories.map((categoty, key) => (
          <div
            key={key}
            className="text-center flex flex-col justify-center items-center space-y-1 py-2 cursor-pointer"
          >
            <Image
              src={icon}
              className="w-12"
              width={500}
              height={500}
              alt=""
            />
            <h6 className="text-white">Science Fiction</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
