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

  // const main = blogs[0];
  // const sides = [blogs[1], blogs[2], blogs[3], blogs[4]];
  // const latests = [blogs[5], blogs[6], blogs[7]];
  const mains = [blogs[0], blogs[4], blogs[2], blogs[3]];
  const sides = [blogs[5], blogs[1], blogs[6]];

  return (
    <div className="max-w-6xl mx-auto mt-8 mb-36">
      <main className="mt-12">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-3"> */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* main blog */}
          {/* <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
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
          </div> */}

          <div className="w-full">
            {mains?.map((main) => (
              <div key={main?._id} className="mb-10 px-5 lg:px-0">
                <Image
                  src={main?.cover_image}
                  priority
                  width={500}
                  height={500}
                  alt="Main blog"
                  className="w-full h-[300px] object-cover"
                />
                <span className="text-[#016961] text-sm hidden md:block mt-4">
                  Technology
                </span>
                <h1 className="text-black text-4xl font-bold mt-2 mb-2 leading-tight">
                  {main?.title}
                </h1>
                <p className="text-gray-700 mt-2">
                  {main?.body[0].slice(0, 100) + "..."}
                  <Link href={`/blogs/${main?._id}`} className="text-blue-400">
                    Read more
                  </Link>
                </p>
                {/* <p className="text-black mb-4">{main?.body}</p>
                <Link
                  href={`/blogs/${main?._id}`}
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-[#016961] hover:bg-[#1e4743] text-white"
                >
                  Read more
                </Link> */}
              </div>
            ))}
          </div>

          {/* side blog */}
          <div className="w-full px-4">
            <h1 className="text-3xl font-semibold text-[#016961] pb-5">
              Populer
            </h1>
            {sides?.map((blog) => (
              <BlogSideCard key={blog?._id} item={blog}></BlogSideCard>
            ))}
          </div>
        </div>

        {/* Latest blog */}
        {/* <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 className="font-bold text-xl md:text-3xl">Latest blog</h2>
          <Link
            href="/allBlog"
            className="bg-[#016961] hover:bg-orange-400 text-xs md:text-sm text-white px-3 py-1 rounded cursor-pointer"
          >
            View all
          </Link>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5">
          {latests?.map((blog) => (
            <BlogLatestCard key={blog?._id} item={blog}></BlogLatestCard>
          ))}
        </div> */}

        {/* news later subscription */}
        {/* <div className="rounded flex md:shadow my-12 bg-[#016961] ">
          <Image
            src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            className="w-0 md:w-1/4 object-cover rounded-l"
            width={500}
            height={500}
            alt=""
          />
          <div className="pl-8 py-8 text-white">
            <h3 className="text-3xl  font-bold mt-4">
              Subscribe to newsletter
            </h3>
            <p className="text-xl ">
              We sent latest news and posts once in every week, fresh from the
              oven
            </p>
            <form className="mt-4">
              <input
                type="email"
                className="rounded-l px-4 py-2 focus:outline-none"
                placeholder="john@tech.com"
              />
              <button className="px-4 py-2 rounded-r bg-gray-400 hover:bg-gray-500 transition-colors text-white">
                Subscribe
              </button>
              <p className="text-white opacity-50 text-sm mt-1">
                No spam. We promise
              </p>
            </form>
          </div>
        </div> */}

        {/* popular blog */}
        {/* <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 className="font-bold text-xl md:text-3xl">Popular blogs</h2>
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
        </div> */}
      </main>
    </div>
  );
};

export default Blog;
