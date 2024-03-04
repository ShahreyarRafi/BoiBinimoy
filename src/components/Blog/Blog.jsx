"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import BlogSideCard from "../Shared/Blogs/BlogSideCard";
// import BlogLatestCard from "../Shared/Blogs/BlogLatestCard";
import Link from "next/link";
import PageLoading from "../Shared/loadingPageBook/PageLoading";
import React, { useState } from "react";

const Blog = () => {
  const axiosPublic = useAxiosPublic();
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/blogs`);
      return res.data;
    },
  });

  console.log(blogs);

  if (isLoading) {
    return <PageLoading />;
  }

  if (blogs.length === 0) {
    return (
      <div>
        <h1 className="text-center justify-center font-semibold md:text-3xl lg:text-4xl">
          Blogs Not Found.
        </h1>
      </div>
    );
  }

  // const sides = [blogs[5], blogs[1], blogs[6], blogs[3]];
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-36 px-3">
      <div>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search blogs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        {/* Category filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        >
          <option value="">All Categories</option>
          {/* Add options dynamically based on available categories */}
          {Array.from(new Set(blogs.map((blog) => blog.category))).map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      <div className="flex gap-3">
        <div className="w-2/3">
          {/* Blogs display */}
          {blogs
            .filter((blog) =>
              blog.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter(
              (blog) => !selectedCategory || blog.category === selectedCategory
            )
            .map((blog) => (
              <div
                key={blog?._id}
                className="mb-10 px-5 cursor-pointer"
                onClick={() =>
                  setExpandedBlogs((prev) => ({
                    ...prev,
                    [blog?._id]: !prev[blog?._id],
                  }))
                }
              >
                <div key={blog?._id} className="mb-10 px-5">
                  <Image
                    src={blog?.cover_image}
                    priority
                    width={500}
                    height={500}
                    alt="Main blog"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <p className="text-[#016961] text-sm font-bold mt-4">
                    {blog?.category}
                  </p>

                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my- leading-tight">
                    {blog?.title}
                  </h1>

                  <div className="mt-2 text-xs sm:text-sm md:text-base text-justify">
                    {expandedBlogs[blog?._id] ? (
                      blog?.body?.split("\n").map((paragraph, index) => (
                        <p key={index}>
                          {paragraph} <br />
                        </p>
                      ))
                    ) : (
                      <>
                        {blog?.body
                          ?.slice(0, 300)
                          .split("\n")
                          .map((paragraph, index) => (
                            <p key={index}>
                              {paragraph} <br />
                            </p>
                          ))}
                        {blog?.body?.length > 300 && " ..."}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Recently Added blog */}
        <div className="w-1/3">
          <h1 className="text-3xl font-semibold text-[#016961] pb-5">
            Recently Added
          </h1>
          {blogs?.slice(-5).map((blog) => (
            // <BlogSideCard key={blog?._id} item={blog}></BlogSideCard>
            <div key={blog?._id}>
              <div className="rounded-md w-full flex flex-col md:flex-row mb-3 gap-5">
                <div className=" w-[210px] h-[120px]">
                  <Image
                    src={blog?.cover_image}
                    width={500}
                    height={500}
                    priority
                    alt="side"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="pt-2 w-2/3">
                  <Link title={blog?.title} href={`/blogs/${blog?._id}`}>
                    <span className="text-gray-600 hover:text-gray-800 text-justify font-semibold mb-2">
                      {blog?.title.length < 65
                        ? blog?.title
                        : `${blog?.title.slice(0, 65) + ".."}`}
                    </span>
                  </Link>
                  <p className="w-fit px-2 py-1 bg-[#016961]/90 rounded-md text-white text-xs font-semibold mt-2">
                    {blog?.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
