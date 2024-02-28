"use client";

import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IoSearch } from "react-icons/io5";
import WriterCard from "../Home/Writer/WriterCard";
import WriterCardSkeleton from "../Skeleton/WriterCardSkeleton";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@material-tailwind/react";

export default function WritersComponent() {
  const axiosPublish = useAxiosPublic();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: allWriters = [], isLoading } = useQuery({
    queryKey: ["writers"],
    queryFn: async () => {
      const res = await axiosPublish.get(`/api/v1/writers`);
      return res.data;
    },
  });

  const filteredWriters = allWriters.filter((writer) =>
    writer.writer_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center my-6">
        <input
          type="text"
          placeholder="Search by Writer"
          value={searchQuery}
          onChange={handleSearchChange}
          className="py-3 px-6 border w-[350px] max-w-[500px] rounded-full shadow-md focus:outline-none bg-teal-50"
        />
        <IoSearch className="-ml-10 text-2xl text-teal-800" />
      </div>

      <div className="mb-20 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {isLoading ? (
          Array.from(Array(20).keys()).map((index) => (
            <WriterCardSkeleton key={index} />
          ))
        ) : filteredWriters.length > 0 ? (
          filteredWriters.map((item) => (
            // <WriterCard key={item._id} item={item} />
            <div key={item._id}>
              <Link href={`/writers/${item?._id}`}>
                <div className="flex items-center border-4 border-teal-200 py-1 px-2 mx-auto shadow-xl rounded-full hover:bg-teal-200 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="w-1/3">
                    <Image
                      src={item?.profile}
                      width={100}
                      height={100}
                      priority
                      className="size-16 object-cover rounded-full"
                      alt="writer profile"
                    />
                  </div>
                  <div className="w-2/3 text-teal-800 space-y-1">
                    <h2 className="text-xl font-bold truncate">
                      {item?.writer_name}
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
