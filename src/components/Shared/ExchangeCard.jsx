"use client"

import Image from 'next/image';

export default function ExchangeCard({ item }) {
    return (

        <div className='bg-[#fcfcf6] px-4 py-1 rounded-lg shadow-lg'>
            <Image src={item.cover_image} alt="book" height={1500} width={1000} className="w-full mt-4 rounded-md shadow-md hover:scale-110 hover:shadow-xl transform-gpu duration-500" />
            <div className="space-y-1 mt-5 pb-1 ">
                <h2 className="text-lg font-bold text-[##2d3558] text-center">{item.title}</h2>
                <p className="text-sm text-[#626980] text-center">{item.author}</p>
                {/* <button className="bg-[#e26064] px-4 py-2 rounded-full text-white text-sm">Exchange Now</button> */}
            </div>
        </div>

    );
}