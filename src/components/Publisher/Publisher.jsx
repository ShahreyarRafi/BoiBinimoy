"use client";

import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PublisherCardSkeleton from "../Skeleton/PublisherCardSkeleton";
import { IoSearch } from "react-icons/io5";
import PublisherCard from "../Home/Publisher/PublisherCard";

export default function Categories() {

  const axiosPublish = useAxiosPublic();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: allPublishers = [], isLoading } = useQuery({
    queryKey: ["publishers"],
    queryFn: async () => {
      const res = await axiosPublish.get(`/api/v1/publishers`);
      return res.data;
    },
  });

  const filteredPublishers = allPublishers.filter((publisher) =>
    publisher.publisher.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-6">
        <input
          type="text"
          placeholder="Search by Publisher"
          value={searchQuery}
          onChange={handleSearchChange}
          className="py-3 px-6 border w-[350px] max-w-[400px] rounded-full shadow-md"
        />
        <IoSearch className="-ml-10 text-2xl" />
      </div>
      <div className="my-20 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5">
        {isLoading ? (
          Array.from(Array(20).keys()).map((index) => (
            <PublisherCardSkeleton key={index} />
          ))
        ) : filteredPublishers.length > 0 ? (
          filteredPublishers.map((item) => (
            <PublisherCard key={item._id} item={item} />
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
