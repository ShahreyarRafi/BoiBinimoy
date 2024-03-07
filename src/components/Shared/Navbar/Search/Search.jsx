"use client";
import { IoSearchSharp } from "react-icons/io5";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setShowSuggestions();
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
          <div className="absolute bg-50 border border-teal-800 rounded-lg w-full mt-1">
            <div className="flex items-center gap-3 bg-teal-100/30  hover:bg-teal-100/60 py-2 px-5 rounded-lg border-b transition-all duration-300 ease-in-out">
              <div>
                <Image
                  width={40}
                  height={40}
                  alt=""
                  src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Jibone_Sofolotar_Jonno_Moner_Shokti-_Sabit_Rayhan-40864-298229.jpg"
                />
              </div>
              <div className="w-full">
                <h1 className="font-semibold text-teal-800">Moner Sokti</h1>
                <p className="text-xs text-gray-400">Sabit Raihan</p>
              </div>

              <div className="flex items-center font-light gap-2 min-w-fit">
                <p className="text-sm text-green-600">Insok</p>
                <p className="text-sm text-red-600">(20% off)</p>
                <h3 className="font-semibold text-teal-800">503$</h3>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="max-w-3xl mx-auto flex items-center gap-3 hover:bg-gray-300 py-2 px-3 rounded-sm border-b">
        <div>
          <Image
            width={30}
            height={30}
            alt=""
            src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Jibone_Sofolotar_Jonno_Moner_Shokti-_Sabit_Rayhan-40864-298229.jpg"
          />
        </div>
        <div className="w-full">
          <h1 className="font-semibold">Moner Sokti</h1>
          <p className="text-xs text-gray-400">Sabit Raihan</p>
        </div>

        <div className="flex items-center font-light gap-2 min-w-fit">
          <p className="text-sm text-green-600">Insok</p>
          <p className="text-sm text-red-600">(20% off)</p>
          <h3 className="font-semibold">503$</h3>
        </div>
      </div> */}
    </>
  );
};

export default Search;
