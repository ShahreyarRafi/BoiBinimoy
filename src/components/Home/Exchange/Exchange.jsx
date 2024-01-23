"use client"

import ExchangeCard from "../../Shared/ExchangeCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { React } from 'react';
import { useSwiper } from "swiper/react";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Exchange() {

    const SwiperButtonPrev = ({ children }) => {
        const swiper = useSwiper();
        return <button onClick={() => swiper.slidePrev()}>{children}</button>;
    };

    const SwiperButtonNext = ({ children }) => {
        const swiper = useSwiper();
        return <button onClick={() => swiper.slideNext()}>{children}</button>;
    };

    const exchangeBooks = [
        {
            "id": 1,
            "image": "https://i.ibb.co/fNhJX8L/Untitled-design-8.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 2,
            "image": "https://i.ibb.co/wyJk0Df/Untitled-design-11.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 3,
            "image": "https://i.ibb.co/NVwBhZJ/Untitled-design-10.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 4,
            "image": "https://i.ibb.co/d52WsrH/Untitled-design-9.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 5,
            "image": "https://i.ibb.co/HzPW8vW/Untitled-design-13.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 6,
            "image": "https://i.ibb.co/vdcSqxv/Untitled-design-12.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        }
    ]



    return (
        <>
            <div className="container mx-auto py-12">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Exchange Now</h2>
                    <hr className="border-t border-gray-200 flex-1 mx-4" />
                    <div className="flex items-center justify-end gap-3">
                        <button className="bg-[#F65D4E] px-4 py-2 rounded-full text-base text-white flex items-center gap-1">
                            View All
                        </button>
                        <button className="bg-[#F65D4E] p-2 rounded-full text-white flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12 15.75 4.5" />
                            </svg>
                        </button>
                        <button className="bg-[#F65D4E] p-2 rounded-full text-white flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {exchangeBooks.map(item => <ExchangeCard key={item} item={item} />)}
                </div>
            </div>
        </>
    );
}
