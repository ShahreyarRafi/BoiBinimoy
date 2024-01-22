"use client"
import { useEffect, useState } from 'react';
import './style.css';
import Image from 'next/image';
import image1 from './image/img1.jpg'
import image2 from './image/img2.jpg'
import image3 from './image/img3.jpg'
import image4 from './image/img4.jpg'


const BannerSlider = () => {
    const [componentMounted, setComponentMounted] = useState(false);

    useEffect(() => {
        setComponentMounted(true);
    }, []);

    useEffect(() => {
        if (componentMounted) {
            initializeSlider();
        }
    }, [componentMounted]);

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
        let timeAutoNext = 10000;

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
        <div>
            <div class="carousel">
                <div class="list">
                    <div class="item">
                        <Image src={image1} alt="alt" width={1000} height={500} />
                        <div class="content">
                            <div class="author">LUNDEV</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">ANIMAL</div>
                            <div class="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <Image src={image2} alt="alt" width={1000} height={500} />
                        <div class="content">
                            <div class="author">LUNDEV</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">ANIMAL</div>
                            <div class="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <Image src={image3} alt="alt" width={1000} height={500} />
                        <div class="content">
                            <div class="author">LUNDEV</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">ANIMAL</div>
                            <div class="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <Image src={image4} alt="alt" width={1000} height={500} />
                        <div class="content">
                            <div class="author">LUNDEV</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">ANIMAL</div>
                            <div class="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="thumbnail">
                    <div class="item">
                        <Image src={image1} alt="alt" width={1000} height={500} />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <Image src={image2} alt="alt" width={1000} height={500} />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <Image src={image3} alt="alt" width={1000} height={500} />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <Image src={image4} alt="alt" width={1000} height={500} />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                </div>

                <div class="arrows">
                    <button id="prev" className='flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12 15.75 4.5" />
                        </svg>
                    </button>
                    <button id="next" className='flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                <div class="time"></div>
            </div>
        </div>
    );
};

export default BannerSlider;