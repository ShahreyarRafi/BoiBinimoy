"use client";
import React from "react";

export default function CategoryCard({ category }) {
  return (
    <div className="">
      <div className="p-6 border rounded-full w-36 h-36 mx-auto ">
        <img className="mx-auto mt-6 -z-20" src={category.category_image} />
      </div>
      <h3 className="text-teal-800 font-semibold text-center mt-3">
        {category.category_name}
      </h3>
    </div>
  );
}
