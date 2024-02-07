"use client";

import React, { useEffect, useState } from "react";
import BookCard from "../Shared/BookCard";

const BuyAllBooks = () => {

  const axios = require('axios').default;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://boi-binimoy-server.vercel.app/api/v1/buy-books')
      .then(function (response) {
        // handle success
        console.log(response);
        setBooks(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

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
