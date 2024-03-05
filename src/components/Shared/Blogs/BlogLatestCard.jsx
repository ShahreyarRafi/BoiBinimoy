import React from 'react';
import Image from "next/image";
import Link from "next/link";

const BlogLatestCard = ({ item }) => {
    return (
        <div className="rounded w-full">
            <img
                src={item?.cover_image}
                className="rounded"
                width={500}
                height={500}
                alt="latest"
            />
            <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800">
                    {item?.title}
                </h2>
                <p className="text-gray-700 mt-2">
                    {item?.body}
                    <Link href={`/blogs/${item?._id}`} className="text-blue-400"> Read more</Link>
                </p>
            </div>
        </div>
    );
};

export default BlogLatestCard;