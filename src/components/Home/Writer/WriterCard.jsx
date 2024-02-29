"use client";

import Image from 'next/image'
import Link from 'next/link'

export default function WriterCard({ item }) {

  return (
    <Link href={`/writers/${item?._id}`}>
      <div className=''>
        <Image
          src={item?.profile}
          width={100}
          height={100}
          priority
          className="w-24 h-24 border-4 border-teal-300 p-1 rounded-full mx-auto"
          alt="writer profile"
        />
        <h3 className="text-center font-semibold">{ item?.writer_name}</h3>
      </div>
    </Link>
  );
}
