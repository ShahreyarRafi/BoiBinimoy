"use client";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCardSkeleton from "../Skeleton/CategoryCardSkeleton";
import { IoSearch } from "react-icons/io5";
import CategoryCard from "../Home/Category/CategoryCard";

export default function Categories() {
  const axiosPublis = useAxiosPublic();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: allCategories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublis.get(`/api/v1/category`);
      return res.data;
    },
  });

  const filteredCategories = allCategories.filter((category) =>
    category.category_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-6">
        <input
          type="text"
          placeholder="Search by Category"
          value={searchQuery}
          onChange={handleSearchChange}
          className="py-3 px-6 border w-[350px] max-w-[400px] rounded-full shadow-md"
        />
        <IoSearch className="-ml-10 text-2xl" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 mt-10">
        {isLoading ? (
          Array.from(Array(8).keys()).map((index) => (
            <CategoryCardSkeleton key={index} />
          ))
        ) : filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
