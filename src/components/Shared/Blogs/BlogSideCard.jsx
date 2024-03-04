import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogSideCard = ({ item }) => {
  return (
    <div className="rounded-md w-full flex flex-col md:flex-row mb-8 gap-5">
      <div className=" w-[210px] h-[120px]">
        <Image
          src={item?.cover_image}
          width={500}
          height={500}
          priority
          alt="side"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="pt-2 w-2/3">
        <Link href={`/blogs/${item?._id}`}>
          <span className="text-gray-600 hover:text-gray-800 font-semibold text-xl mb-2">
            {item?.title}
          </span>
        </Link>
        <p className="w-fit px-2 py-1 bg-[#016961]/90 rounded-md text-white text-sm mt-2">{item?.category}</p>
      </div>
    </div>
  );
};

export default BlogSideCard;
