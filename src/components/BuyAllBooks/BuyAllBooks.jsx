"use client";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import BookCard from "../Shared/BookCard";

const BuyAllBooks = () => {
  const axiosPublic = useAxiosPublic();

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/buy-books`);
      return res.data;
    },
  });

  return (
    <div className="min-h-screen container mx-auto px-3">
      <div className="py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
          {books?.map((book) => (
            <BookCard key={book?._id} item={book}></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyAllBooks;
