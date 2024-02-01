"use client"

import Image from 'next/image';
import Link from 'next/link';

const AllBooks = ({ book }) => {

    return (
        <>
            <div className='bg-[#fcfcf6] px-4 py-1 rounded-lg shadow-lg flex flex-col justify-between'>
                <Image src={book?.cover_image} alt="book" height={1500} width={1000} className="w-full h-[250px] mt-4 rounded-md shadow-md hover:scale-110 hover:shadow-xl transform-gpu duration-500" />
                <div className="space-y-1 mt-5 pb-1">
                    <div>
                        <h2 className="text-lg font-bold text-[##2d3558] text-center">{book?.title}</h2>
                        <p className="text-sm text-[#626980] text-center">{book?.writer}</p>
                    </div>
                    <Link href={`/buyBooks/${book?._id}`} className='w-full bg-[#fcba75] btn btn-sm text-white'>Details</Link>
                </div>
            </div>
        </>
    );
};

export default AllBooks;