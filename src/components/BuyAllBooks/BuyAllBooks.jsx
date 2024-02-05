"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AllBooksCard from "../Shared/AllBooksCard";
import BookCard from "../Shared/ExchangeCard";

const BuyAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [fetchData, setFetchData] = useState(true);

  useEffect(() => {
    if (fetchData) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://boi-binimoy-server.vercel.app/api/v1/buyBooks"
          );
          setBooks(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
    }

    return () => { };
  }, [fetchData]);

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
