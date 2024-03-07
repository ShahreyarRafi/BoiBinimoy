"use client";
import React from "react";

export default function RecentOrderBookCard({ item }) {
  const {
    carts,
    clientEmail,
    orderDate,
    totalBooks,
    totalPrice,
    tranjectionId,
  } = item;
  return (
    <div className="border p-4 rounded-lg grid grid-cols-3 gap-3">
      <div className="flex items-center gap-4">
        {carts.map((image, index) => (
          <img key={index} className="w-14" src={image.cover_image} alt={`Cover ${index}`} />
        ))}
      </div>

      <p>{clientEmail}</p>
      <p>{orderDate}</p>
    </div>
  );
}
