"use client"

import Image from 'next/image'
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import BookCard from "../../../Shared/BookCard";
import { IoIosArrowDown } from "react-icons/io";

const WriterDetails = () => {

    const param = useParams();
    const [writer, setWriter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://boi-binimoy-server.vercel.app/api/v1/writers/${param?.writerId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setWriter(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [param?.writerId]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://boi-binimoy-server.vercel.app/api/v1/writer/${writer?.writer_name}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setBooks(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [writer?.writer_name]);

    console.log(books);

    return (
        <div className="min-h-screen container mx-auto px-3">
            <div className='flex gap-10 item-center bg-50-50 p-10 my-10 border-2 border-[#016961] rounded-lg'>
                <div className='text-center'>
                    <Image
                        src={writer?.profile}
                        width={200}
                        height={200}
                        alt="Writer"
                        style={{
                            width: '200px',
                            height: '200px',
                        }}
                        className='rounded-full object-cover'
                    />
                    <h2 className='text-xl font-semibold my-3'>4.5k Followers</h2>
                    <button className='bg-blue-700 text-white text-lg px-5 py-2 '>Follow</button>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>{writer?.writer_name}</h2>
                    <p>{writer?.bio}</p>
                </div>
            </div>

            <div className='flex justify-between items-center'>

                <div className=''>
                    <input type="text" name="" id="" placeholder='Search ...' className='p-2 rounded-lg border 2 border-black' />
                </div>

                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="p-2 rounded-lg border 2 border-black">Sort By <IoIosArrowDown className='inline' /></div>
                    <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>price</li>
                        <li>Name</li>
                    </ul>
                </div>
            </div>

            {/* Books */}
            <div className="min-h-screen container mx-auto px-3">
                <div className="py-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
                        {books?.map((book) => (
                            <BookCard key={book?._id} item={book}></BookCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriterDetails;