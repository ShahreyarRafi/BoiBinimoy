"use client";

import React from "react";

export default function TopSellingBooksCard({ item }) {
  console.log(item);

  const { totalQuantity, bookDetails } = item;
  const { title, cover_image } = bookDetails;

  return (
    <div>
      <img className="w-12" src={cover_image} alt="" />
      <h2>{title}</h2>
      <p>{totalQuantity}</p>
    </div>
  );
}
