"use client"

import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import axios from 'axios';
import Swal from 'sweetalert2'

const Cart = () => {

    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState(null);
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);
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

    return (
        <div className='max-w-5xl mx-auto py-10'>
            <div className='grid grid-cols-2 gap-5'>
                {
                    cart?.books?.map(book => <div key={book?._id}>
                        <div className='flex gap-5 border-2 border-gray-600 rounded-lg p-5'>
                            <Image
                                src={book?.cover_image}
                                width={500}
                                height={500}
                                alt="book"
                                priority
                                style={{ width: "150px", height: "200px" }}
                            />
                            <div>
                                <h2>Book Name: {book?.title}</h2>
                                <h2>Book Writer: {book?.writer}</h2>
                                <h2>Book category: {book?.category}</h2>
                                <h2>Book Price: {book?.price} BDT</h2>
                                <button onClick={() => handleDelete(book?._id)} className="mt-5 button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1">Remove</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className='mt-5 flex justify-between items-end'>
                <div>
                    <h2 className='text-3xl font-semibold'>Total quantity: {cart?.books?.length}</h2>
                    <h2 className='text-3xl font-semibold mt-3'>Total price: {totalPrice} BDT</h2>
                </div>
                <div>
                    <button className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;