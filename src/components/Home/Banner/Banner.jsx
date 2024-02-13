"use client"

import { useEffect, useState } from 'react';
import './BannerStyles.css';
import Image from 'next/image';

const data = [
    {
        "cover_image": "https://i.ibb.co/QHkZVtd/Copy-of-Black-Modern-Black-Friday-Sale-Facebook-Cover-2-1.png",
        "author": "Boi Binimoy",
        "title": "BLACK FRIDAY",
        "topic": "UP TO 70% OFF",
        "description": "📚 Uncover Incredible Black Friday Savings on Your Next Favorite Reads! 🎉 Dive into Our Library of Deals and Discover Books That Will Transport You to New Worlds. Don't Miss Out – Grab Your Favorites Now at Unbeatable Prices! #BlackFridayBookBonanza",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/X5w89Kh/book3.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/DK9CQLm/Bold-Minimalist-Black-Friday-Sale-Facebook-Cover-1.png",
        "author": "Boi Binimoy",
        "title": "BLACK FRIDAY",
        "topic": "UP TO 70% OFF",
        "description": "📚 Uncover Incredible Black Friday Savings on Your Next Favorite Reads! 🎉 Dive into Our Library of Deals and Discover Books That Will Transport You to New Worlds. Don't Miss Out – Grab Your Favorites Now at Unbeatable Prices! #BlackFridayBookBonanza",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/6sHJqkj/book4.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/PCv3C8S/Dark-Simple-Modern-Black-Friday-Sale-Facebook-Cover-8-1.png",
        "author": "Boi Binimoy",
        "title": "BLACK FRIDAY",
        "topic": "UP TO 70% OFF",
        "description": "📚 Uncover Incredible Black Friday Savings on Your Next Favorite Reads! 🎉 Dive into Our Library of Deals and Discover Books That Will Transport You to New Worlds. Don't Miss Out – Grab Your Favorites Now at Unbeatable Prices! #BlackFridayBookBonanza",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/HT901q9/book6.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/4j42bC7/Dark-Simple-Modern-Black-Friday-Sale-Facebook-Cover-3-1.png",
        "author": "Boi Binimoy",
        "title": "BLACK FRIDAY",
        "topic": "UP TO 70% OFF",
        "description": "📚 Uncover Incredible Black Friday Savings on Your Next Favorite Reads! 🎉 Dive into Our Library of Deals and Discover Books That Will Transport You to New Worlds. Don't Miss Out – Grab Your Favorites Now at Unbeatable Prices! #BlackFridayBookBonanza",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/frT6m8q/book5.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/7Wk3ysW/Black-and-White-Minimalist-Black-Friday-Banner-1-1.png",
        "author": "Boi Binimoy",
        "title": "BLACK FRIDAY",
        "topic": "UP TO 70% OFF",
        "description": "📚 Uncover Incredible Black Friday Savings on Your Next Favorite Reads! 🎉 Dive into Our Library of Deals and Discover Books That Will Transport You to New Worlds. Don't Miss Out – Grab Your Favorites Now at Unbeatable Prices! #BlackFridayBookBonanza",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/gg6zpVY/book2.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/brpBJxB/Dark-Modern-Bold-Black-Friday-Sale-Facebook-Cover-2-1.png",
        "author": "Boi Binimoy",
        "title": "BLACK FRIDAY",
        "topic": "UP TO 70% OFF",
        "description": "📚 Uncover Incredible Black Friday Savings on Your Next Favorite Reads! 🎉 Dive into Our Library of Deals and Discover Books That Will Transport You to New Worlds. Don't Miss Out – Grab Your Favorites Now at Unbeatable Prices! #BlackFridayBookBonanza",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/wry18Qy/book1.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
]



export default function BannerNew() {
    const [componentsMounted, setComponentMounted] = useState(false);

    useEffect(() => {
        setComponentMounted(true);
    }, []);

    useEffect(() => {
        if (componentsMounted) {
            initializeSlider();
        }
    }, [componentsMounted]);

    function initializeSlider() {
        let nextDom = document.getElementById('next');
        let prevDom = document.getElementById('prev');

        let carouselDom = document.querySelector('.carousel');
        let SliderDom = carouselDom.querySelector('.carousel .list');
        let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        let timeDom = document.querySelector('.carousel .time');

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

        let timeRunning = 3000;
        let timeAutoNext = 15000;

        nextDom.onclick = function () {
            showSlider('next');
        };

        prevDom.onclick = function () {
            showSlider('prev');
        };

        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        function showSlider(type) {
            let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
            let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

            if (type === 'next' && thumbnailItemsDom.length > 0) {
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            } else if (thumbnailItemsDom.length > 0) {
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        }
    }


    return (
        <div className='carousel-container banner-slider '>
            <div className="carousel">
                <div className="list">
                    {data.map((item, index) => (
                        <div className="item" key={index}>
                            <Image src={item.cover_image} height={4100} width={2310} alt="alt" />
                            <div className="content">
                                <div className="author">{item.author}</div>
                                <div className="title font-outline">{item.title}</div>
                                <div className="topic">{item.topic}</div>
                                <div className="des">{item.description}</div>
                                <div className="buttons">
                                    {item.buttons.map((button, buttonIndex) => (
                                        <button key={buttonIndex} href={button.link}>{button.label}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="thumbnail">
                        {data.map((item, index) => (
                            <div className="item" key={index}>
                                <Image src={item?.thumbnail_img} height={1500} width={1000} alt="alt" />
                                <div className="content">
                                    <div className="title">{item.thumbnail_title}</div>
                                    <div className="description">{item.thumbnail_description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="arrows">
                    <button id="prev" className='flex items-center justify-center shadow-md '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12 15.75 4.5" />
                        </svg>
                    </button>
                    <button id="next" className='flex items-center justify-center shadow-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                <div className="time"></div>
            </div>
        </div>
    );
};
