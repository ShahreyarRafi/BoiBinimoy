"use client"

import { useEffect, useState } from 'react';
import './BannerStyles.css';
import Image from 'next/image';
<<<<<<< HEAD:src/components/Home/BannerSlider/bannerSlider.jsx
=======

>>>>>>> 72588844576a04bcadb474bd6aa500434504c234:src/components/Home/BannerNew/BannerNew.jsx

const data = [
    {
        "cover_image": "https://i.ibb.co/n1zgRWn/book-cover-6-6.png",
        "author": "Boi Binimoy",
        "title": "BUY NOW",
        "topic": "30% Flat Off",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/wry18Qy/book1.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/L6y20Z5/book-cover-7-2.png",
        "author": "Boi Binimoy",
        "title": "BUY NOW",
        "topic": "30% Flat Off",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/gg6zpVY/book2.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/VtjcbTC/book-cover-7-3.png",
        "author": "Boi Binimoy",
        "title": "BUY NOW",
        "topic": "30% Flat Off",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/X5w89Kh/book3.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/pf9JZWy/book-cover-7-4.png",
        "author": "Boi Binimoy",
        "title": "BUY NOW",
        "topic": "30% Flat Off",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/6sHJqkj/book4.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/Tm26pfr/book-cover-7-8.png",
        "author": "Boi Binimoy",
        "title": "BUY NOW",
        "topic": "30% Flat Off",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/frT6m8q/book5.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    },
    {
        "cover_image": "https://i.ibb.co/82HNKpB/book-cover-6-1.png",
        "author": "Boi Binimoy",
        "title": "BUY NOW",
        "topic": "30% Flat Off",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "buttons": [
            { "label": "SEE MORE", "link": "/see-more-link" },
            { "label": "Buy Now", "link": "/Buy Now-link" }
        ],
        "thumbnail_img": "https://i.ibb.co/HT901q9/book6.png",
        "thumbnail_title": "Name Slider",
        "thumbnail_description": "Description"
    }
]



export default function BannerNew () {
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
                            <Image src={item.cover_image} height={800} width={2000} alt="alt" />
                            <div className="content">
                                <div className="author">{item.author}</div>
                                <div className="title">{item.title}</div>
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
                                <Image src={item.thumbnail_img} height={1500} width={1000} alt="alt" />
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
