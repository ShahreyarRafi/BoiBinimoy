"use client"

import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import axios from 'axios';
import Swal from 'sweetalert2'
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Cart = () => {

    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState(null);
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(1)
    let totalPrice = 0;
    let cartId = null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://boi-binimoy-server.vercel.app/api/v1/my-carts/${user?.email}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setCart(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user?.email, totalPrice]);

    cart?.books?.map(book => totalPrice = parseFloat(totalPrice) + parseFloat(book.price))

    const handleDelete = (bookId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                cart?.carts?.map(cart => { if (cart?.book_id === bookId) { cartId = cart?._id } });
                if (cartId) {
                    axios.delete(`https://boi-binimoy-server.vercel.app/api/v1/delete-cart/${cartId}`)
                        .then(response => {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            cart?.carts?.map(cart => {
                                if (cart?.book_id === bookId) { totalPrice = parseFloat(totalPrice) - parseFloat(cart?.price) }
                            })
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }

            }
        });
    };

    const increaseCounter = () => {
        setCounter(counter + 1)
    }
    const decreaseCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="container duration-300">
            <div className="w-full rounded-2xl overflow-hidden lg:shadow-lg my-5 duration-300">
                <div className="bg-[#016961] duration-300 text-white ">
                    <div className="grid grid-cols-6 items-center justify-between font-semibold border border-gray-100 px-10 py-5">
                        <h5 className="text-center text-xs md:text-base">Product</h5>
                        <h5 className="text-center text-xs md:text-base">Product Name</h5>
                        <h5 className="text-center text-xs md:text-base">Unit Price</h5>
                        <h5 className="text-center text-xs md:text-base">Quantity</h5>
                        <h5 className="text-center text-xs md:text-base">Total</h5>
                        <h5 className="text-center text-xs md:text-base">Close</h5>
                    </div>
                </div>
                <div className="flex-1 sm:flex-none grid grid-cols-1 gap-5 lg:gap-0">
                    {cart?.books?.map((book) => (
                        <div
                            key={book?._id}
                            className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100"
                        >
                            <div className="grid grid-cols-6 items-center text-center font-semibold border border-gray-100 p-5">
                                <Image
                                    src={book?.cover_image}
                                    width={150}
                                    height={200}
                                    alt="book"
                                    priority
                                    style={{ width: "50%", height: "100%" }}
                                    className='mx-auto'
                                />
                                <h5 >{book?.title}</h5>
                                <h5>{book?.price} BDT</h5>
                                <h5>
                                    <div className='flex items-center gap-2'>
                                        <button onClick={decreaseCounter} className="bg-base-300 p-3"><FaMinus className='mx-auto'></FaMinus></button>
                                        <h3>{counter}</h3>
                                        <button onClick={increaseCounter} className="bg-base-300 p-3"><FaPlus className='mx-auto'></FaPlus></button>
                                    </div>
                                </h5>
                                <h5>Total BDT</h5>
                                <div>
                                    <button onClick={() => handleDelete(book?._id)} className="button-color rounded-full text-white p-3"><RxCross2 className='mx-auto'></RxCross2></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;