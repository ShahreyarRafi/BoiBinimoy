"use client"

import Image from 'next/image';

export default function ExchangeCard({ item }) {
    return (

        <div>
            <Image src={item.image} alt="book" width={500} height={500} className="w-full mt-4 rounded-md shadow-md hover:scale-110 hover:shadow-xl transform-gpu duration-500" />
            <div className="space-y-1 mt-5">
                <h2 className="text-lg font-bold text-[##2d3558] text-center">{item.title}</h2>
                <p className="text-sm text-[#626980] text-center">{item.author}</p>
                {/* <button className="bg-[#F65D4E] px-4 py-2 rounded-full text-white text-sm">Exchange Now</button> */}
            </div>
        </div>

    );
}