"use client";

import Image from 'next/image'
import Link from 'next/link'

export default function PublisherCard({ item }) {

  return (
    <Link href={`/publisher/${item?._id}`} className="space-y-3">
      <Image
        src={item?.logo}
        width={200}
        height={200}
        priority
        className="w-24 h-24 border-4 border-teal-300 p-1 rounded-full mx-auto"
        alt="writer profile"
      />
      <h3 className="text-center font-semibold">{item.publisher}</h3>
    </Link>
  );
}
