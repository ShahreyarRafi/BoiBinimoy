"use client";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IoSearch } from "react-icons/io5";
import WriterCard from "../Home/Writer/WriterCard";
import WriterCardSkeleton from "../Skeleton/WriterCardSkeleton";

export default function WritersComponent() {
  const axiosPublish = useAxiosPublic();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: allWrriters = [], isLoading } = useQuery({
    queryKey: ["writers"],
    queryFn: async () => {
      const res = await axiosPublish.get(`/api/v1/writers`);
      return res.data;
    },
  });

  const filteredWriters = allWrriters.filter((writer) =>
    writer.writer_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-6">
        <input
          type="text"
          placeholder="Search by Writer"
          value={searchQuery}
          onChange={handleSearchChange}
          className="py-3 px-6 border w-[350px] max-w-[400px] rounded-full shadow-md"
        />
        <IoSearch className="-ml-10 text-2xl" />
      </div>
      <div className="my-20 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5">
        {isLoading ? (
          Array.from(Array(20).keys()).map((index) => (
            <WriterCardSkeleton key={index} />
          ))
        ) : filteredWriters.length > 0 ? (
          filteredWriters.map((item) => (
            <WriterCard key={item._id} item={item} />
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}