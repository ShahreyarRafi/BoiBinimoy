"use client";
import PageLoading from "../../Shared/loadingPageBook/PageLoading";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '@/Hooks/Axios/useAxiosPublic';
import ExchangeAllCards from "../../Shared/ExchnageBook/ExchangeAllCards";


const ExchangeAllBooks = () => {

    const axiosPublic = useAxiosPublic();

    const { data: books = [], isLoading } = useQuery({
      queryKey: ['books'],
      queryFn: async () => {
        const res = await axiosPublic.get(`/api/v1/exchange-books`);
        return res.data;
      },
    });

    if (isLoading) {
        return (
          <PageLoading />
          )
      }

    return (
        <div className="min-h-screen container mx-auto px-3">
            <div className="py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
                    {books?.map((book) => (
                        <ExchangeAllCards key={book?._id} item={book}></ExchangeAllCards>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExchangeAllBooks;