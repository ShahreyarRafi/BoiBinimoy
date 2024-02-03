"use client"

import React, { useState, useEffect, useCallback } from 'react';
import './Banner.css';
import images from './Image';
import Image from 'next/image';

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isFadingIn, setIsFadingIn] = useState(false);

    const getNextIndex = useCallback(
        (currentIndex) => (currentIndex + 1) % images.length,
        []
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => getNextIndex(prevIndex));
                setIsFadingOut(false);
                setIsFadingIn(true);
            }, 500);
        }, 7000);

        return () => clearInterval(intervalId);
    }, [getNextIndex]);

    useEffect(() => {
        if (isFadingIn) {
            const fadeTimeout = setTimeout(() => {
                setIsFadingIn(false);
            }, 1000);

            return () => clearTimeout(fadeTimeout);
        }
    }, [isFadingIn]);

    const scrollOffset = 300;

    const handleExploreClick = () => {
        const windowHeight = window.innerHeight;
        const targetPosition = windowHeight / 2 + scrollOffset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    return (
        <div className="overflow-hidden flex justify-center items-center ">
            <div className="carousel w-full object-cover h-[650px]">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item relative w-full flex justify-center items-center flex-1 overflow-hidden ${index === currentImageIndex ? 'visible' : 'hidden'}`}>
                        <div className={`image-wrapper w-full h-full ${isFadingOut && index === currentImageIndex ? 'fade-out' : ''} ${isFadingIn && index === currentImageIndex ? 'fade-in' : ''}`}>
                            <Image
                                src={image}
                                className={`w-full h-full object-cover opacity-60 ${index === currentImageIndex ? 'zoom-in' : ''}`}
                                alt={`Image ${index}`}
                            />
                        </div>
                        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="xl:text-7xl md:text-5xl text-3xl tracking-tigh font-primary text-white text-center md:leading-[1.2] drop-shadow-lg shadow-black mb-8">
                                    Share the <span className="text-[#3f8757]">Magic</span> of Reading
                                </h2>
                                <a href='#more' className='px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-white bg-[#f65d4e] bg-opacity-25 backdrop-blur-sm outline outline-2 outline-[#f65d4e] rounded-full hover:bg-[#f65d4e] hover:outline-0 hover:text-white'
                                    style={{ transition: 'background-color 400ms, color 400ms, outline 0s' }}>
                                    <div>
                                        <div className='md:text-lg'>Explore Now</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
