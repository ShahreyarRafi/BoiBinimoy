import React from "react";

export default function PublisherCard({ item }) {
  return (
    <div className="space-y-3">
      <img src={item.logo} className="w-24 mx-auto" alt="" />
      <h3 className="text-center font-semibold">{item.publisher}</h3>
    </div>
  );
}
