"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const AllBooks = ({ book}) => {



  return (
    <>
      <div className="bg-[#fcfcf6] rounded-lg shadow-lg hover:shadow-xl transform-gpu duration-500">
        <Image
          src={book?.cover_image}
          alt="book"
          height={1500}
          width={1000}
          className="w-full h-[240px] sm:[290px] object-cover rounded-md"
        />
        <div className="flex justify-between items-center py-3 px-2">
          <div>
            <h2 className="text-sm font-bold">{book?.title}</h2>
            <p className="text-xs ">{book?.writer}</p>
          </div>

          <div>
            <Link
              href={`/buyBooks/${book?._id}`}
              className="text-[#016961] text-xl"
            >
              <button>
                <FaChevronRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
