"use client";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import PublisherCard from "../Home/Publisher/PublisherCard";
import PublisherCardSkeleton from "../Skeleton/PublisherCardSkeleton";

export default function Categories() {
  const axiosPublish = useAxiosPublic();
  
  const { data: publishers = [], isLoading } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublish.get(`/api/v1/publishers`);
      return res.data;
    },
  });
  return (
    <div className="container mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5">
      {isLoading
        ? Array.from(Array(8).keys()).map((index) => (
            <PublisherCardSkeleton key={index} />
          ))
        : publishers.map((item) => (
            <PublisherCard key={item._id} item={item} />
          ))}
    </div>
  );
}
