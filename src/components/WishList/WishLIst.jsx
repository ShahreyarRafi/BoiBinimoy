"use client";

import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useWishListBook from "@/Hooks/wishList/useWishListBook";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import PageLoading from "../Shared/loadingPageBook/PageLoading";
import useOneUser from "@/Hooks/Users/useOneUser";
import useGetMyCarts from "@/Hooks/Carts/useGetMyCarts";

const WishLIst = () => {
    const [wishListBook, refetch, isLoading] = useWishListBook();
    const axiosSecure = useAxiosSecure();
    const { currentUser } = useOneUser();
    const {refetch : cartRefetch} = useGetMyCarts()

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
        const book_id = book.book_id; // Corrected
        const price = book.price; // Assuming 'price' is a property of 'book'
        const quantity = 1;
        
        const addCart = {
            user_name,
            user_email,
            owner_email: book.owner_email,
            book_id,
            unit_price: book.unit_price,
            total_price: book.total_price,
            quantity,
            isDeliverd: false,
            cover_image: book.cover_image,
            title: book.title,
            stock_limit: book.stock_limit
        };

        console.log(addCart);

        axiosSecure
            .post("/api/v1/carts", addCart)
            .then((response) => {
                console.log("data added database", response);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Add book to the cart.",
                    showConfirmButton: false,
                    timer: 1500,
                });
                cartRefetch();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };




    if (isLoading) {
        return (
            <div>
                <PageLoading />
            </div>
        );
    }

    // Render message if specific books are not found
    if (wishListBook.length === 0) {
        return (
            <div className="text-center my-20">
                <p className=" my-10">Your Wishlist is empty.</p>
                <Link
                    href={`/buyBooks`}
                    className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white"
                >
                    Add to wishlist
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-3 my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {wishListBook.map((book) => (
                    <div
                        key={book._id}
                        className="w-full bg-50 flex justify-between gap-3 border-2 rounded-xl border-teal-800"
                    >
                        <div className="w-full py-2 px-5 my-2">
                            <div className="text-teal-800">
                                <h1 className="text-2xl font-bold">
                                    {book?.title.length < 30
                                        ? book.title
                                        : `${book.title.slice(0, 30)}..`}
                                </h1>
                                <p className="text-xs font-bold">
                                    <span className="font-light">by</span> {book?.writer}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <h6 className="text-3xl font-bold text-teal-800">
                                    {book?.total_price}
                                    <span className="text-xs font-light">$</span>
                                </h6>
                                <div>
                                    {/* remove button */}
                                    <button onClick={() => handleBookDelete(book._id, book.title)} className="px-2 text-xl text-teal-800 border-r-2 border-teal-800">
                                        <RiDeleteBin6Line />
                                    </button>
                                    {/* buy now button */}
                                    {/* <Link href={`/buyBooks/${book?._id}`}>
                                        <button className="px-2 text-xl text-teal-800">
                                            <IoCartOutline />
                                        </button>
                                    </Link> */}


                                    <button onClick={() => handleCart(book)} className="px-2 text-xl text-teal-800">
                                        <IoCartOutline />
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className="w-28">
                            <Image
                                src={book?.cover_image}
                                priority
                                width={250}
                                height={50}
                                alt=""
                                className="w-28 h-32 rounded-r-xl object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishLIst;
