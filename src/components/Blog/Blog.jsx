"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import BlogSideCard from "../Shared/Blogs/BlogSideCard";
import BlogLatestCard from "../Shared/Blogs/BlogLatestCard";
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

  const main = blogs[0];
  const sides = [blogs[1], blogs[2], blogs[3], blogs[4]];
  const latests = [blogs[5], blogs[6], blogs[7]];

  return (
    <div className="max-w-6xl mx-auto mt-8 mb-36">
      <main className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* main blog */}
          <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
            <Image
              src={main?.cover_image}
              priority
              width={500}
              height={500}
              alt="Main blog"
              className="w-full h-[300px]"
            />
            <span className="text-[#016961] text-sm hidden md:block mt-4">
              Technology
            </span>
            <h1 className="text-black text-4xl font-bold mt-2 mb-2 leading-tight">
              {main?.title}
            </h1>
            <p className="text-black mb-4">{main?.body}</p>
            <Link
              href={`/blogs/${main?._id}`}
              className="inline-block px-6 py-3 mt-2 rounded-md bg-[#016961] hover:bg-[#1e4743] text-white"
            >
              Read more
            </Link>
          </div>

          {/* side blog */}
          <div className="w-full md:w-4/7 px-4">
            {sides?.map((blog) => (
              <BlogSideCard key={blog?._id} item={blog}></BlogSideCard>
            ))}
          </div>
        </div>

        {/* Latest blog */}
        <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 className="font-bold text-xl md:text-3xl">Latest blog</h2>
          <Link
            href="/allBlog"
            className="bg-[#016961] hover:bg-orange-400 text-xs md:text-sm text-white px-3 py-1 rounded cursor-pointer"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5">
          {latests?.map((blog) => (
            <BlogLatestCard key={blog?._id} item={blog}></BlogLatestCard>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
