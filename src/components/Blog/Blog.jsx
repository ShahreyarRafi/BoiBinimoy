"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import BlogSideCard from "../Shared/Blogs/BlogSideCard";
// import BlogLatestCard from "../Shared/Blogs/BlogLatestCard";
import Link from "next/link";
import PageLoading from "../Shared/loadingPageBook/PageLoading";

const Blog = () => {
  const axiosPublic = useAxiosPublic();

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/blogs`);
      return res.data;
    },
  });

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
    <div className="max-w-6xl mx-auto mt-8 mb-36">
      <div className="flex gap-5">
        {/* All blog */}
        <div className="w-full">
          {blogs?.map((blog) => (
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
              <Link href={`/blogs/${blog?._id}`}>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my- leading-tight">
                  {blog?.title}
                </h1>
              </Link>

              {/* <hr className="my-2" /> */}

              <p className=" mt-2 text-xs sm:text-sm md:text-base text-justify">
                {blog?.body?.slice(0, 500) + "..."}
                <Link href={`/blogs/${blog?._id}`} className="text-blue-400">
                  Read more
                </Link>
              </p>
            </div>
          ))}
        </div>

        {/* Populer blog */}
        {/* <div className="w-full px-4">
          <h1 className="text-3xl font-semibold text-[#016961] pb-5">
            Populer
          </h1>
          {sides?.map((blog) => (
            <BlogSideCard key={blog?._id} item={blog}></BlogSideCard>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
