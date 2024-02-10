import React from 'react';
import Image from "next/image";

const BlogSideCard = ({ item }) => {
    return (
        <div className="rounded-md w-full flex flex-col md:flex-row mb-10">
            <Image
                src={item?.cover_image}
                width={500}
                height={500}
                priority
                alt="side"
                className='w-[210px] h-[120px] rounded-lg'
            />
            <div className="px-4 pt-2">
                <span className="text-[#016961] text-sm hidden md:block">
                    {item?.category}
                </span>
                <div className="md:mt-0 text-black font-semibold text-xl mb-2">
                    {item?.title}
                </div>
                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-black">
                    {item?.body}
                </p>
            </div>
        </div>
    );
};

export default BlogSideCard;