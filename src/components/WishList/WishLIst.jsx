"use client"

import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import useWishListBook from '@/Hooks/wishList/useWishListBook';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const WishLIst = () => {


    const [wishListBook, refetch, isLoading] = useWishListBook()
    const axiosSecure = useAxiosSecure();
    console.log("wish list data ", wishListBook);


    const handleBookDelete = (id, title) => {
        console.log("Delete Book function called.");
        Swal.fire({
            title: `Delete Book`,
            text: `Are you sure you want to delete the book "${title}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            console.log("Confirmation result:", result);
            if (result.isConfirmed) {
                console.log("User confirmed deletion.");
                axiosSecure
                    .delete(`/api/v1/wishlist/remove/${id}`)
                    .then((response) => {
                        console.log("Delete request successful. Response:", response.data);
                        if (response) {
                            console.log("success");
                            Swal.fire(
                                "Deleted!",
                                `Your book "${title}" has been deleted.`,
                                "success"
                            );
                            refetch();
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting Book:", error);
                        Swal.fire(
                            "Error!",
                            "An error occurred while deleting the book.",
                            "error"
                        );
                    });
            }
        });
    };




    if (isLoading) {
        return (
            <div className="text-center items-center justify-center flex">
                <span className="loading loading-ball loading-lg"></span>
            </div>
        );
    }

    // Render message if specific books are not found
    if (wishListBook.length === 0) {
        return (
            <div>
                <h1 className="text-center justify-center font-semibold md:text-3xl lg:text-4xl"> Books Not Found....</h1>
            </div>
        );
    }


    return (
        <div>
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6 ">

                {
                    wishListBook.map(book => <div key={book._id}>
                        <div className="w-full lg:max-w-full lg:flex">

                            <div className=" flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">

                                <Image
                                    src={book?.cover}
                                    priority width={250} height={50}
                                    alt="Profile"
                                    className=" w-full  "
                                />


                            </div>

                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <p className="text-sm text-gray-600 flex items-center">
                                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
                                        Members only
                                    </p>
                                    {/* book title */}
                                    <div className="text-gray-900 font-bold text-xl mb-2 leading-10 ">
                                        <h1>
                                            {book?.title}
                                        </h1>

                                        <h1> Writer : {book?.writer} </h1>

                                    </div>

                                    <p className="text-gray-900 font-bold text-xl mb-2">  Price : ${book?.price} </p>

                                    <div className=' w-full mx-auto px-4 flex lg:gap-6  gap-2 lg:pt-20 pt-6 md:pt-10 '>
                                        <button
                                            type="button"
                                            className="inline-block rounded bg-info lg:px-6 px-2 pb-1 pt-1 lg:pt-2.5 lg:pb-2  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
                                            Details
                                        </button>

                                        {/* remove button */}
                                        <button
                                            onClick={() => handleBookDelete(book._id, book.title)}
                                            type="button"
                                            className="inline-block rounded bg-[#DC4C64]  lg:px-6 px-2 pb-1 pt-1 lg:pt-2.5 lg:pb-2  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
                                            Remove
                                        </button>

                                        {/* buy now button */}
                                        <Link href={`/buyBooks/${book?._id}`}>
                                            <button
                                                type="button"
                                                className="inline-block rounded bg-success  lg:px-6 px-2 pb-1 pt-1 lg:pt-2.5 lg:pb-2  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                                                Buy Now
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* user image */}
                                    <Image className="w-10 h-10 rounded-full mr-4" src="/ben.png" alt="Avatar of Writer" />
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">John Smith</p>
                                        <p className="text-gray-600">Aug 18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }




            </div>
        </div>

    );
};

export default WishLIst;
