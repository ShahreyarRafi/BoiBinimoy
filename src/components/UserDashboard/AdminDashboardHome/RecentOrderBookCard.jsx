"use client";
import React from "react";

export default function RecentOrderBookCard({ item }) {
  const {
    _id,
    carts,
    clientEmail,
    orderDate,
    totalBooks,
    totalPrice,
    tranjectionId,
  } = item;
  return (
    <div key={_id} className="border p-4 rounded-lg grid grid-cols-3 gap-3">
      <div className="flex items-center gap-4">
        {carts.map((image) => (
          <img className="w-14" src={image.cover_image} />
        ))}
      </div>
      <p>{clientEmail}</p>
      <p>{orderDate}</p>
    </div>
  );
}
