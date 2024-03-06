"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import BlogSideCard from "../Shared/Blogs/BlogSideCard";
// import BlogLatestCard from "../Shared/Blogs/BlogLatestCard";
import Link from "next/link";
import PageLoading from "../Shared/loadingPageBook/PageLoading";
import React, { useState } from "react";
import { IoHeartCircleOutline } from "react-icons/io5";
import { PiChatCircleDuotone } from "react-icons/pi";
import { MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Blog = () => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [bookmarks, setBookmarks] = useState({});
  const axiosPublic = useAxiosPublic();
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const handleLike = (blogId) => {
    // Simulating a backend request to toggle like status
    setLikes((prevLikes) => {
      const updatedLikes = { ...prevLikes };
      updatedLikes[blogId] = !prevLikes[blogId];

      // send a request to the backend here to update like status

      return updatedLikes;
    });
  };

  const handleComment = (blogId, comment) => {
    // Send a request to the backend to handle the comment functionality
    // Update the comments state accordingly
  };

  const handleBookmark = (blogId) => {
    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = { ...prevBookmarks };
      updatedBookmarks[blogId] = !prevBookmarks[blogId];
      // send a request to the backend here to update bookmark status
      return updatedBookmarks;
    });
  };

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/blogs`);
      return res.data;
    },
  });

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

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

  return (
    <div className="max-w-7xl mx-auto mt-8 mb-10 lg:mb-36 px-3">
      <div className="flex flex-col lg:flex-row items-center gap-3 mb-8">
        {/* Search input */}
        <div className="flex items-center gap-3 w-full p-2 mb-4 border border-teal-800 bg-teal-50/40 shadow-md rounded-md">
          <FiSearch className="text-xl text-teal-800" />
          <input
            type="text"
            placeholder="Search blogs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        {/* Category filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full lg:w-fit p-2 mb-4 border border-teal-800 bg-teal-50/40 shadow-md rounded-md focus:outline-none"
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

      <div className="flex flex-col lg:flex-row gap-3">
        <div className="w-full lg:w-2/3">
          {/* Blogs display */}
          {blogs
            .filter((blog) =>
              blog.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter(
              (blog) => !selectedCategory || blog.category === selectedCategory
            )
            .slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)
            .map((blog) => (
              <div key={blog?._id} className="mb-10 cursor-pointer">
                <div key={blog?._id} className="mb-10">
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

                  <div
                    onClick={() =>
                      setExpandedBlogs((prev) => ({
                        ...prev,
                        [blog?._id]: !prev[blog?._id],
                      }))
                    }
                    className="mt-2 text-xs sm:text-sm md:text-base text-justify"
                  >
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

                  {/* Display reading time */}
                  <p className="text-xs text-gray-500 mt-1">
                    Reading Time: {calculateReadingTime(blog.body)} min
                  </p>
                </div>

                {/* Like, Comment, Bookmark buttons */}
                <div className="flex items-center mt-2 space-x-3">
                  <button
                    onClick={() => handleLike(blog._id)}
                    className="flex items-center space-x-1 cursor-pointer text-gray-500"
                  >
                    {likes[blog._id] ? (
                      <FaHeart className="h-4 w-4 text-[#016961]" />
                    ) : (
                      <CiHeart className="h-4 w-4" />
                    )}
                    {likes[blog._id] && (
                      <span className="text-[#016961] ml-1">Liked</span>
                    )}
                  </button>

                  <button
                    onClick={() => handleComment(blog._id)}
                    className="flex items-center space-x-1 cursor-pointer text-gray-500"
                  >
                    <PiChatCircleDuotone className="h-4 w-4" />
                    <span>Comment</span>
                  </button>

                  <button
                    onClick={() => handleBookmark(blog._id)}
                    className="flex items-center space-x-1 cursor-pointer text-gray-500"
                  >
                    {bookmarks[blog._id] ? (
                      <MdBookmarkRemove className="h-4 w-4 text-[#016961]" />
                    ) : (
                      <MdBookmarkAdd className="h-4 w-4" />
                    )}
                    {bookmarks[blog._id] && (
                      <span className="text-[#016961] ml-1">Bookmarked</span>
                    )}
                  </button>
                </div>
              </div>
            ))}

          {/* Pagination controls */}
          <div className="flex justify-center mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`mx-2 px-3 py-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-[#016961] text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Recently Added blog */}
        <div className="w-full lg:w-1/3">
          <h1 className="text-3xl font-semibold text-[#016961] pb-5">
            Recently Added
          </h1>
          {blogs?.slice(-5).map((blog) => (
            // <BlogSideCard key={blog?._id} item={blog}></BlogSideCard>
            <div key={blog?._id}>
              <div className="rounded-md w-full flex flex-col md:flex-row mb-5 lg:mb-3 gap-2 lg:gap-5">
                <div className="w-full lg:w-[210px] h-[120px]">
                  <Image
                    src={blog?.cover_image}
                    width={500}
                    height={500}
                    priority
                    alt="side"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="pt-2 w-full lg:w-2/3">
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
              <hr className="my-2" />

              <p className=" mt-2 text-xs sm:text-sm md:text-base text-justify">
                {blog?.body?.slice(0, 500) + "..."}
                <Link href={`/blogs/${blog?._id}`} className="text-blue-400">
                  Read more
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
