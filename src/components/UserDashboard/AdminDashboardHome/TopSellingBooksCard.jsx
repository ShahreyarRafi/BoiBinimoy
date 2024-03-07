"use client";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function TopSellingBooksCard({ item }) {
  const { _id, totalQuantity } = item;

  const {
    data: topSellingBook = [],
    isPending: topSellingBookPending,
    refetch: topSellingBookRefetch,
  } = useQuery({
    queryKey: ["topSellingBook"],
    queryFn: async () => {
      const res = await useAxiosPublic.get(`/api/v1/buy-books/${item._id}`);
      return res.data;
    },
  });
  console.log("topSellingBook", topSellingBook.topSellingBooks);
  return (
    <div>
      <h3>{_id}</h3>
      <img src={topSellingBook.cover_image} alt="" />
      <p>{totalQuantity}</p>
      <div>
        {topSellingBook.topSellingBooks.map(item=> <>{item.title}</>)}
      </div>
    </div>
  );
}
