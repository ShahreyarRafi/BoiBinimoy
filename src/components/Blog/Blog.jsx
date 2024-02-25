"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import BlogSideCard from "../Shared/Blogs/BlogSideCard";
// import BlogLatestCard from "../Shared/Blogs/BlogLatestCard";
import Link from "next/link";

const Blog = () => {
  const axiosPublic = useAxiosPublic();

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/blogs`);
      return res.data;
    },
  });

  const sides = [blogs[5], blogs[1], blogs[6]];
  return (
    <div className="max-w-6xl mx-auto mt-8 mb-36">
      <div className="flex flex-col lg:flex-row gap-3">
        {/* All blog */}
        <div className="w-full">
          {blogs?.map((blog) => (
            <div key={blog?._id} className="mb-10 px-5 lg:px-0">
              <Image
                src={blog?.cover_image}
                priority
                width={500}
                height={500}
                alt="Main blog"
                className="w-full h-[300px] object-cover"
              />
              <span className="text-[#016961] text-sm hidden md:block mt-4">
                Technology
              </span>
              <Link href={`/blogs/${blog?._id}`}>
                <h1 className="text-black text-4xl font-bold mt-2 mb-2 leading-tight">
                  {blog?.title}
                </h1>
              </Link>

              <p className="text-gray-700 mt-2">
                {blog?.body[0].slice(0, 100) + "..."}
                <Link href={`/blogs/${blog?._id}`} className="text-blue-400">
                  Read more
                </Link>
              </p>
            </div>
          ))}
        </div>

        {/* Populer blog */}
        <div className="w-full px-4">
          <h1 className="text-3xl font-semibold text-[#016961] pb-5">
            Populer
          </h1>
          {sides?.map((blog) => (
            <BlogSideCard key={blog?._id} item={blog}></BlogSideCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
