"use client"

import React from 'react';
import { useForm } from "react-hook-form"


const AddBook = () => {

    const axios = require('axios').default;

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const book = data;
        axios.post('https://boi-binimoy-server.vercel.app/api/v1/buyBooks', book)
            .then(response => {
                // Handle the success response
                console.log('Response:', response.data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    }



    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <input {...register("title")} placeholder='Book Title' className='pl-2 border-black border-[1px]' />
                <input {...register("writer")} placeholder='Book Writer' className='pl-2 border-black border-[1px]' />
                <input {...register("language")} placeholder='Language' className='pl-2 border-black border-[1px]' />
                <input {...register("pages")} placeholder='Pages' className='pl-2 border-black border-[1px]' />
                <input {...register("price")} placeholder='Price' className='pl-2 border-black border-[1px]' />
                <input {...register("year")} placeholder='Published Year' className='pl-2 border-black border-[1px]' type='month' />
                <input {...register("__v")} placeholder='Book Version' className='pl-2 border-black border-[1px]' />
                <input type="submit" className='bg-[#f65d4e] py-2 rounded-lg text-white' />
            </form>
        </div>
    );
};

export default AddBook;