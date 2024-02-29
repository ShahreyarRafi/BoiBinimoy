"use client";

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
        const response = await fetch(
          `https://boi-binimoy-server.vercel.app/api/v1/writers/${param?.writerId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
      const response = await fetch(
        `https://boi-binimoy-server.vercel.app/api/v1/writer/${writer?.writer_name}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
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

useEffect(() => {
  if (user) {
    console.log("writer:", param?.writerId);
  }
}, [user, param?.writerId]);

if (loading) {
  return <div className='bg-50-50'><PageLoading /></div>;
}


return (
  <div className="min-h-screen container mx-auto px-3">
    <div className="flex items-start gap-3 my-10">
      {/* wirter profile start */}
      <div className="w-1/3 h-full bg-50-50 p-5 border border-[#016961] rounded-lg">
        <div className="flex justify-center">
          <Image
            src={writer?.profile}
            width={200}
            height={200}
            alt="Writer"
            style={{
              width: "200px",
              height: "200px",
            }}
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-center text-teal-800 space-y-1 mt-3">
          <h2 className="text-4xl font-bold">{writer?.writer_name}</h2>
          <h2 className="text-xs">4.5k Followers | 30 Books</h2>
        </div>
        <button className="bg-teal-700 rounded-md text-white text-lg px-5 py-2 w-full my-3">
          Follow
        </button>
        <div>
          <p className="text-teal-800 indent-8 text-justify">{writer?.bio}</p>
        </div>
      </div>
      {/* wirter profile end */}

      {/* Books start */}
      <div className="w-full">
        <h1 className="text-3xl text-teal-800 font-semibold">
          All books from this writer..
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {books?.map((book) => (
            <BookCard key={book?._id} item={book}></BookCard>
          ))}
        </div>
      </div>
      {/* books end */}
    </div>
  </div>
);
};

export default WriterDetails;
