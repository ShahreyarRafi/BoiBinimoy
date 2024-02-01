"use client";

import Image from "next/image";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";

const AllBooks = ({ book }) => {
  return (
    <>
      {/* <div className="bg-[#fcfcf6] px-4 py-1 rounded-lg shadow-lg">
        <Image
          src={book?.cover_image}
          alt="book"
          height={1500}
          width={1000}
          className="w-full h-[250px] mt-4 rounded-md shadow-md hover:scale-110 hover:shadow-xl transform-gpu duration-500"
        />
        <div className="space-y-1 mt-5 pb-1 ">
          <h2 className="text-lg font-bold text-[##2d3558] text-center">
            {book?.title}
          </h2>
          <p className="text-sm text-[#626980] text-center">{book?.writer}</p>
          <Link
            href={`/buyBooks/${book?._id}`}
            className="button-color btn btn-sm text-white"
          >
            Details
          </Link>
        </div>
      </div> */}

      <div class="relative rounded-lg hover:drop-shadow-xl  transition-shadow">
        <Image
          src={book?.cover_image}
          width={500}
          height={500}
          alt=""
          className="object-cover rounded-lg"
        />

        <div className="absolute top-0 right-0">
          <span class="text-xs font-light mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
            seal
          </span>
        </div>

        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/65 to-transparent rounded-b-lg">
          <div class="px-5 py-5">
            {/* action button */}
            <div className="flex">
              <span className="rounded-full border-2 border-black">
                <MdFavoriteBorder />
              </span>
              <span className="rounded-full border-2 border-black">
                <MdFavoriteBorder />
              </span>
              <span className="rounded-full border-2 border-black">
                <MdFavoriteBorder />
              </span>
            </div>
            {/* Book Title & Auther Name */}
            <div className="">
              {/* Book Title */}
              <h3 class="text-white font-semibold text-sm md:text-base">
                {book?.title}
              </h3>
              {/* Auther Name */}
              <p className="text-white text-xs font-extralight hidden md:flex">
                by {book?.writer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
