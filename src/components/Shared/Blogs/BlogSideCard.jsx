import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogSideCard = ({ item }) => {
  return (
    <div className="rounded-md w-full flex flex-col md:flex-row mb-8 gap-5">
      <img
        src={item?.cover_image}
        width={500}
        height={500}
        priority
        alt="side"
        className="w-[210px] h-[120px] object-cover rounded-lg"
      />
      <div className="pt-2">
        <p className="text-[#016961] text-sm">{item?.category}</p>

        <Link href={`/blogs/${item?._id}`}>
          <span className="text-black font-semibold text-xl mb-2">
            {item?.title}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogSideCard;
