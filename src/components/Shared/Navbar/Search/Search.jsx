"use client";
import { IoSearchSharp } from "react-icons/io5";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import useSearchBooks from "@/Hooks/buyBooks/useSearchBooks";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { searchBooks, isPending, refetch } = useSearchBooks(searchValue);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
    refetch();
    setShowSuggestions(true);
  };


 
  return (
    <>
      <div className="relative">
        <form className="flex justify-center rounded w-full">
          <span className="w-full">
            <span className={inter.className}>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-8 bg-teal-50 rounded-l-md focus:outline-none text-black font-light px-3"
                onChange={handleInputChange}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
              />
            </span>
          </span>
          <button
            type="submit"
            className="bg-gray-400 px-1 sm:px-3 rounded-r-md"
          >
            <IoSearchSharp />
          </button>
        </form>

        {showSuggestions && (
          <div className="absolute bg-50 border border-teal-800 rounded-lg w-full mt-1 max-h-96 overflow-x-scroll">
            {searchBooks?.map((book) => (
              <div key={book?._id}>
                <Link href={`/buyBooks/${book?._id}`}>

                    <div className="flex items-center gap-3 bg-teal-100/30  hover:bg-teal-100/60 py-2 px-5 rounded-lg border-b">
                      <div>
                        <Image
                          width={40}
                          height={40}
                          alt=""
                          src={book?.cover_image}
                        />
                      </div>
                      <div className="w-full">
                        <h1 className="font-semibold text-teal-800">
                          {book?.title}
                        </h1>
                        <p className="text-xs text-gray-400">{book?.writer}</p>
                      </div>
                      <div className="flex items-center font-light gap-2 min-w-fit">
                        <p className="text-sm text-green-600">In stok</p>
                        <p className="text-sm text-red-600">
                          ({book?.stock_limit})
                        </p>
                        <h3 className="font-semibold text-teal-800">
                          &#2547;{book?.price}
                        </h3>
                      </div>
                    </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
