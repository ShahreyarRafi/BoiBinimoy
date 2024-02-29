"use client";

import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PublisherCardSkeleton from "../Skeleton/PublisherCardSkeleton";
import { IoSearch } from "react-icons/io5";
import PublisherCard from "../Home/Publisher/PublisherCard";
import Link from "next/link";
import Image from "next/image";

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
      <div className="flex justify-center items-center my-6">
        <input
          type="text"
          placeholder="Search by Publisher"
          value={searchQuery}
          onChange={handleSearchChange}
          className="py-3 px-6 border w-[350px] max-w-[500px] rounded-full shadow-md focus:outline-none bg-teal-50"
        />
        <IoSearch className="-ml-10 text-2xl text-teal-800" />
      </div>

      <div className="mb-20 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {isLoading ? (
          Array.from(Array(20).keys()).map((index) => (
            <PublisherCardSkeleton key={index} />
          ))
        ) : filteredPublishers.length > 0 ? (
          filteredPublishers.map((item) => (
            // <PublisherCard key={item._id} item={item} />
            <div key={item._id}>
              <Link href={`/writers/${item?._id}`}>
                <div className="flex items-center border-4 border-teal-200 py-1 px-2 mx-auto shadow-xl rounded-full hover:bg-teal-200 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="w-1/3">
                    <Image
                      src={item?.logo}
                      width={100}
                      height={100}
                      priority
                      className="size-16 object-cover rounded-full"
                      alt="writer profile"
                    />
                  </div>
                  <div className="w-2/3 text-teal-800 space-y-1">
                    <h2 className="text-xl font-bold truncate">
                      {item?.publisher}
                    </h2>
                    <h2 className="text-xs">4.5k Followers</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
