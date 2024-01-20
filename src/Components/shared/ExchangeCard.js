"use client"

import Image from 'next/image';

export default function ExchangeCard({ item }) {
    return (

        <div className="p-4 border border-[#f65c4e48] shadow-sm rounded-md">
            <Image src={item.image} alt="book" width={500} height={500} className="w-full" />
            <div className="space-y-1 mt-3">
                <h2 className="text-md font-bold text-[#f64d4e]">{item.title}</h2>
                <p className="text-gray-600">{item.author}</p>
                {/* <button className="bg-[#F65D4E] px-4 py-2 rounded-full text-white text-sm">Exchange Now</button> */}
            </div>
        </div>

    );
}