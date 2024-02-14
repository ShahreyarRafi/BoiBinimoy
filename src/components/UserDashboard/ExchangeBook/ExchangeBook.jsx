"use client"
import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import useExchangeBooks from '@/Hooks/api/useExchangeBooks';
import Image from 'next/image';
import React from 'react';
import Swal from 'sweetalert2';

const ExchangeBook = () => {
    const [exchangeBooks, refetch, isLoading] = useExchangeBooks()
    console.log(exchangeBooks);
    const axiosSecure = useAxiosSecure();


    // delete operation 
    const handleDeleteExchangeBook = (id, title) => {
        Swal.fire({
            title: `Delete Book`,
            text: `Are you sure you want to delete the book "${title}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/exchange-books/${id}`)
                    .then(response => {
                        console.log(response.data);
                        if (response.data) {
                            Swal.fire(
                                'Deleted!',
                                `Your book "${title}" has been deleted.`,
                                'success'
                            );
                            refetch();
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting Book:', error);
                        Swal.fire(
                            'Error!',
                            'An error occurred while deleting the book.',
                            'error'
                        );
                    });
            }
        });
    };






    return (
        <div>
            <h1> ExchangeBook {exchangeBooks.length} </h1>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-6 '>
                {
                    exchangeBooks?.map(book => <div key={book._id}>

                        <div
                            className="flex flex-col rounded-lg px-2 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                            <Image

                                className="h-60 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={book?.cover_image}
                                priority width={100} height={100}
                                alt="exchange-book" />
                            <div className="flex flex-col justify-start p-6">
                                <h5
                                    className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                    {book?.title}
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    {book?.writer}
                                </p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                    <div className=' flex items-center gap-6'>

 
                                        <button onClick={()=> handleDeleteExchangeBook(book._id, book.title)}className='btn' > Delete </button>
                                        <button className='btn'> Update </button>
                                    </div>
                                </p>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default ExchangeBook;