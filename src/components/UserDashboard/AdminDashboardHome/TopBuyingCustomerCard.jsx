"use client";

import React from "react";

export default function TopBuyingCustomerCard({ item }) {
  const { email, image, name, gender, totalPurchases } = item;

  return (
    <div>
      <img className="w-12 h-12 rounded-full" src={image} alt="" />
      <h4>{name}</h4>
      <p>{email}</p>
      <p>$ {totalPurchases}</p>
    </div>
  );
}
