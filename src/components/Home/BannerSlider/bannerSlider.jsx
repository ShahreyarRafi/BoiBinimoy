"use client"
import { useEffect, useState } from 'react';
import './BannerStyles.css';
import Image from 'next/image';
import book1 from './image/book1.png'
import book2 from './image/book2.png'
import book3 from './image/book3.png'
import book4 from './image/book4.png'
import book5 from './image/book5.png'
import book6 from './image/book6.png'

import image1 from './image/img1.jpg'
import image2 from './image/img2.jpg'
import image3 from './image/img3.jpg'
import image4 from './image/img4.jpg'
import image6 from './image/img6.jpg'


const BannerSlider = () => {
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

            if (type === 'next') {
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            } else {
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
        <div className='carousel-container '>
            <div className="carousel">
                <div className="list">
                    <div className="item">
                        <Image src={image1} alt="alt" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={image2} alt="alt" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={image3} alt="alt" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={image4} alt="alt" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={image4} alt="alt" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={image6} alt="alt" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="thumbnail">
                        <div className="item">
                            <Image src={book1} alt="alt" />
                            <div className="content">
                                <div className="title">
                                    Name Slider
                                </div>
                                <div className="description">
                                    Description
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={book2} alt="alt" />
                            <div className="content">
                                <div className="title">
                                    Name Slider
                                </div>
                                <div className="description">
                                    Description
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={book3} alt="alt" />
                            <div className="content">
                                <div className="title">
                                    Name Slider
                                </div>
                                <div className="description">
                                    Description
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={book4} alt="alt" />
                            <div className="content">
                                <div className="title">
                                    Name Slider
                                </div>
                                <div className="description">
                                    Description
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={book5} alt="alt" />
                            <div className="content">
                                <div className="title">
                                    Name Slider
                                </div>
                                <div className="description">
                                    Description
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image src={book6} alt="alt" />
                            <div className="content">
                                <div className="title">
                                    Name Slider
                                </div>
                                <div className="description">
                                    Description
                                </div>
                            </div>
                        </div>
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

export default BannerSlider;