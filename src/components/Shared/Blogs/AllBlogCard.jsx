import React from 'react';
import Image from "next/image";
import Link from "next/link";

const AllBlogCard = ({ item }) => {
    return (
        <div className="rounded w-full">
            <Image
                src={item?.cover_image}
                className="rounded h-[200px]"
                width={500}
                height={500}
                alt="latest"
            />
            <div className="p-4 pl-0">
                <h2 className="font-bold text-xl text-gray-800">
                    {item?.title.slice(0, 40) + '...'}
                </h2>
                <p className="text-gray-700 mt-2">
                    {item?.body[0].slice(0, 100) + '...'}
                    <Link href={`/blogs/${item?._id}`} className="text-blue-400"> Read more</Link>
                </p>
            </div>
        </div>
    );
};

export default AllBlogCard;