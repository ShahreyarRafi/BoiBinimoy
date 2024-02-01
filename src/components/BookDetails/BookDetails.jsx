"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const BookDetails = () => {

    const [book, setBook] = useState([]);
    const [fetchData, setFetchData] = useState(true);
    const param = useParams();

    useEffect(() => {
        if (fetchData) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://boi-binimoy-server.vercel.app/api/v1/buyBooks/${param.buyId}`);
                    setBook(response.data);
                } catch (error) {
                    console.error('Error:', error);
                }
            };

            fetchData();
        }

        return () => { };
    }, [fetchData, param.buyId])

    console.log(book);

    return (
        <div className='w-full'>
            <div className="container mx-auto py-12 w-full">
                <h1 className='text-4xl text-center mb-10'>Book Details</h1>
                <div className='flex justify-center gap-20 mx-auto'>
                    <Image src={book?.cover_image} alt="book" width={500} height={500} priority className='h-[70svh] w-auto' />
                    <div className="space-y-1 mt-3 text-lg">
                        <h2 className="text-md border-b border-gray-300">
                            <span className="font-bold text-[#fcba75] ">Book Title:</span> {book?.title}
                        </h2>
                        <p className="text-gray-600 border-b border-gray-300">
                            <span className="font-bold">Book Writer:</span> {book?.writer}
                        </p>
                        <p className="text-gray-600 border-b border-gray-300">
                            <span className="font-bold">Book Language:</span> {book?.language}
                        </p>
                        <p className="text-gray-600 border-b border-gray-300">
                            <span className="font-bold">Book Pages:</span> {book?.pages}
                        </p>
                        <p className="text-gray-600 border-b border-gray-300">
                            <span className="font-bold">Published Year:</span> {book?.published_year}
                        </p>
                        <p className="text-gray-600 border-b border-gray-300">
                            <span className="font-bold">Book Publisher:</span> {book?.publisher}
                        </p>
                        <p className="text-gray-600 border-b border-gray-300">
                            <span className="font-bold">Book Price:</span> {book?.price}
                        </p>
                        <p className="text-gray-600 border-b border-gray-300">
                            <span className="font-bold">Book Edition:</span> {book?.edition}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-bold">Description:</span> {book?.description}
                        </p>
                        <div className='flex gap-3 pt-10'>
                            <button className="bg-[#fcba75] px-4 py-2 rounded-full text-base text-white flex items-center gap-1">
                                Buy Now
                            </button>
                            <button className="bg-[#fcba75] px-4 py-2 rounded-full text-base text-white flex items-center gap-1">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;