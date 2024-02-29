"use client"

import Image from 'next/image'
import { useState, useEffect, useContext } from "react";
import { useParams } from "next/navigation";
import BookCard from "../../../Shared/BookCard";
import { AuthContext } from '@/providers/AuthProvider';
import PageLoading from '@/components/Shared/loadingPageBook/PageLoading';

const WriterDetails = () => {

    const { user } = useContext(AuthContext);
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

    useEffect(() => {
        if (user) {
            console.log("writer:", param?.writerId);
        }
    }, [user, param?.writerId]);

    if (loading ) {
        return <div className='bg-50-50'><PageLoading /></div>;
    }



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