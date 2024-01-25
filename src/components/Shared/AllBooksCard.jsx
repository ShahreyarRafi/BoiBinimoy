"use client"

import Image from 'next/image';
import Link from 'next/link';

const AllBooks = ({ book }) => {

    return (
        <div className="p-4 border border-[#f65c4e48] shadow-sm rounded-md">
            <Image src={book?.cover_image} alt="book" width={500} height={500} priority className='w-full h-[250px]' />
            <div className="space-y-1 mt-3">
                <h2 className="text-md font-bold text-[#f64d4e]">{book?.title}</h2>
                <p className="text-gray-600">{book?.writer}</p>
                <Link href={`/buyBooks/${book?._id}`} className='bg-[#f64d4e] btn btn-sm text-white'>Details</Link>
            </div>
        </div>
    );
};

export default AllBooks;