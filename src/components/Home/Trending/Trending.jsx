"use client";

import React, { useEffect, useState } from "react";
import BookCard from "../../Shared/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";
import "./Spinner.css";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

export default function Trending() {
    const [swiperInitialized, setSwiperInitialized] = useState(false);
    const [swiper, setSwiper] = useState(null);

    const trendingNow = [
        {
            id: 1,
            cover_image: "https://i.ibb.co/fNhJX8L/Untitled-design-8.png",
            title: "The Great Gatsby",
            writer: "F. Scott Fitzgerald",
            genre: "Classic",
            description:
                "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
        },
        {
            id: 2,
            cover_image: "https://i.ibb.co/wyJk0Df/Untitled-design-11.png",
            title: "The Great Gatsby",
            writer: "F. Scott Fitzgerald",
            genre: "Classic",
            description:
                "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
        },
        {
            id: 3,
            cover_image: "https://i.ibb.co/NVwBhZJ/Untitled-design-10.png",
            title: "The Great Gatsby",
            writer: "F. Scott Fitzgerald",
            genre: "Classic",
            description:
                "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
        },
        {
            id: 4,
            cover_image: "https://i.ibb.co/d52WsrH/Untitled-design-9.png",
            title: "The Great Gatsby",
            writer: "F. Scott Fitzgerald",
            genre: "Classic",
            description:
                "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
        },
        {
            id: 5,
            cover_image: "https://i.ibb.co/HzPW8vW/Untitled-design-13.png",
            title: "The Great Gatsby",
            writer: "F. Scott Fitzgerald",
            genre: "Classic",
            description:
                "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
        },
        {
            id: 6,
            cover_image: "https://i.ibb.co/vdcSqxv/Untitled-design-12.png",
            title: "The Great Gatsby",
            writer: "F. Scott Fitzgerald",
            genre: "Classic",
            description:
                "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
        },
        {
            id: 7,
            cover_image: "https://i.ibb.co/fNhJX8L/Untitled-design-8.png",
            title: "The Great Gatsby",
            writer: "F. Scott Fitzgerald",
            genre: "Classic",
            description:
                "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
        },
        {
            id: 8,
            cover_image: "https://i.ibb.co/wyJk0Df/Untitled-design-11.png",
            title: "The Great Gatsby",
            writer: "F. Scott Fitzgerald",
            genre: "Classic",
            description:
                "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
        },
        {
            id: 9,
            cover_image: "https://i.ibb.co/NVwBhZJ/Untitled-design-10.png",
            title: "The Great Gatsby",
            writer: "F. Scott Fitzgerald",
            genre: "Classic",
            description:
                "A tale of wealth, love, and the American Dream set in the Roaring Twenties.",
        },
    ];

    const handleNextButtonClick = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePrevButtonClick = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const handleSwiperInit = (swiperInstance) => {
        setSwiper(swiperInstance);
        setSwiperInitialized(true);
    };
    ;


    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [swiper]);


    return (
        <div className="container mt-12 md:mt-16 mx-auto px-5">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl md:text-3xl text-[#016961] font-bold text-nowrap">Trending</h2>
                <hr className="hr " />
                <div className="flex items-center justify-end gap-3 text-nowrap">
                    {/* View All button */}
                    <button className="button-color px-4 py-2 rounded-full text-sm md:text-base text-teal-50 flex items-center gap-1">
                        View All
                    </button>
                    {/* Previous Button */}
                    <button className="button-color p-1.5 md:p-2 rounded-full text-teal-50 flex items-center gap-1" onClick={handlePrevButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12 15.75 4.5" />
                        </svg>
                    </button>
                    {/* Next Button */}
                    <button className="button-color p-1.5 md:p-2 rounded-full text-teal-50 flex items-center gap-1" onClick={handleNextButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <Swiper
                spaceBetween={13}
                onSwiper={handleSwiperInit}
                controller={{ control: swiper => (window.swiper = swiper) }}
                slidesPerView={2}
                breakpoints={{
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1200: { slidesPerView: 6 },
                }}
            >
                {swiperInitialized ? (
                    trendingNow.map(item => (
                        <SwiperSlide key={item.id}>
                            <BookCard item={item} />
                        </SwiperSlide>
                    ))
                ) : (
                    <div className="w-full flex justify-center items-center">
                        <div className="book">
                            <div className="book__pg-shadow"></div>
                            <div className="book__pg"></div>
                            <div className="book__pg book__pg--2"></div>
                            <div className="book__pg book__pg--3"></div>
                            <div className="book__pg book__pg--4"></div>
                            <div className="book__pg book__pg--5"></div>
                        </div>
                    </div>
                )}
            </Swiper>
        </div>
    );
}
