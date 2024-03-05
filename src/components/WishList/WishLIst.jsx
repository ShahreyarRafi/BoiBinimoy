"use client"

import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import useOneUser from '@/Hooks/Users/useOneUser';
import useWishListBook from '@/Hooks/wishList/useWishListBook';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const WishLIst = () => {

    const [wishListBook, refetch, isLoading] = useWishListBook()
    const axiosSecure = useAxiosSecure();
    const { currentUser } = useOneUser();
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



    const handleCart = (book) => {
        const user_name = currentUser?.name;
        const user_email = currentUser?.email;
        const book_id = book._id;
        const price = book.unit_price;
        const quantity = 1;

        const addCart = {
            user_name,
            user_email,
            owner_email: book?.owner_email,
            book_id,
            price,
            quantity,
            isDeliverd: false
        }

        console.log(" add cart data", addCart);
        axiosSecure.post("/api/v1/carts", addCart)
            .then(response => {
                console.log('Wishlist item added:', response.data);
                refetch()
            })
            .catch(error => {
                console.error('Error adding to wishlist:', error);
            })
    }



    if (isLoading) {
        return (
            <div className="text-center items-center justify-center flex flex-col min-h-screen">
                <span className="loading loading-ball loading-lg"></span>
            </div>
        );
    }

    // Render message if specific books are not found
    if (wishListBook.length === 0) {
        return (
            <div>
                <h1 className="text-center flex flex-col justify-center font-semibold md:text-3xl lg:text-4xl min-h-screen"> Books Not Found....</h1>
            </div>
        );
    }


    return (
        <div className='lg:py-6 py-3 lg:px-6  px-3 w-full lg:w-11/12 mx-auto rounded-xl bg-gray-100 '>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6  ">

                {
                    wishListBook.map(book => <div key={book._id}>
                        <div className=" w-full lg:w-full h-[300px] lg:flex">

                            <div className=" flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">

                                <Image
                                    src={book?.cover_image}
                                    priority width={150} height={100}
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
                                        <h1>
                                            {book?.quantity}
                                        </h1>

                                        <h1> Writer : {book?.writer} </h1>

                                    </div>

                                    <p className="text-gray-900 font-bold text-xl mb-2">  Price : ${book?.unit_price} </p>

                                    <div className=' w-full mx-auto px-4 flex lg:gap-6  gap-2 lg:pt-10 pt-4 md:pt-6 '>
                                        <button
                                            type="button"
                                            class="inline-block rounded bg-info lg:px-6 px-2 pb-1 pt-1 lg:pt-2.5 lg:pb-2  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
                                            Details
                                        </button>

                                        {/* remove button */}
                                        <button
                                            onClick={() => handleBookDelete(book._id, book.title)}
                                            type="button"
                                            class="inline-block rounded bg-[#DC4C64]  lg:px-6 px-2 pb-1 pt-1 lg:pt-2.5 lg:pb-2  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
                                            Remove
                                        </button>

                                        {/* buy now button */}

                                        <button
                                            onClick={() => handleCart(book)}
                                            type="button"
                                            class="inline-block rounded bg-success  lg:px-6 px-2 pb-1 pt-1 lg:pt-2.5 lg:pb-2  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                                            Add to cart
                                        </button>


                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {/* user image */}

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
