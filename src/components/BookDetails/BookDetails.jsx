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
    }, [fetchData])

    console.log(book);

    return (
        <div>
            <div className="container mx-auto py-12">
                <h1 className='text-4xl text-center mb-10'>Book Details</h1>
                <div className='grid grid-cols-2 gap-5'>
                    <Image src={book?.cover_image} alt="book" width={500} height={500} priority />
                    <div className="space-y-1 mt-3">
                        <h2 className="text-md font-bold text-[#f64d4e]">Book Title: {book?.title}</h2>
                        <p className="text-gray-600">Book Writer: {book?.writer}</p>
                        <p className="text-gray-600">Book Language: {book?.language}</p>
                        <p className="text-gray-600">Book Pages: {book?.pages}</p>
                        <p className="text-gray-600">Published Year: {book?.published_year}</p>
                        <p className="text-gray-600">Book Publisher: {book?.publisher}</p>
                        <p className="text-gray-600">Book Price: {book?.price}</p>
                        <p className="text-gray-600">Book Edition: {book?.edition}</p>
                        <p className="text-gray-600">Description: {book?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;