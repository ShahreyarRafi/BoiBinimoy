"use client";

import React from "react";

export default function TopSellingBooksCard({ item }) {

  const { totalQuantity, bookDetails } = item;
  const { title, cover_image } = bookDetails;

  return (
    <div className="flex justify-between items-center gap-4 mb-5 border p-3 rounded-lg">
      <img className="w-12" src={cover_image} alt="" />
      <h2>{title}</h2>
      <p>{totalQuantity}</p>
    </div>
  );
}
