"use client"
// import { useEffect } from 'react';
// import './style.css';
// import Image from 'next/image';
// import image1 from './image/img1.jpg'
// import image2 from './image/img2.jpg'
// import image3 from './image/img3.jpg'
// import image4 from './image/img4.jpg'


// const BannerSlider = () => {

//     useEffect(() => {
//         // Existing JavaScript code goes here
//         let nextDom = document.getElementById('next');
//         let prevDom = document.getElementById('prev');

//         let carouselDom = document.querySelector('.carousel');
//         let SliderDom = carouselDom.querySelector('.carousel .list');
//         let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
//         let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
//         let timeDom = document.querySelector('.carousel .time');

//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         let timeRunning = 5000;
//         let timeAutoNext = 10000;

//         nextDom.onclick = function () {
//             showSlider('next');
//         };

//         prevDom.onclick = function () {
//             showSlider('prev');
//         };

//         let runTimeOut;
//         let runNextAuto = setTimeout(() => {
//             nextDom.click();
//         }, timeAutoNext);

//         function showSlider(type) {
//             let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//             let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

//             if (type === 'next') {
//                 SliderDom.appendChild(SliderItemsDom[0]);
//                 thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//                 carouselDom.classList.add('next');
//             } else {
//                 SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//                 thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//                 carouselDom.classList.add('prev');
//             }

//             clearTimeout(runTimeOut);
//             runTimeOut = setTimeout(() => {
//                 carouselDom.classList.remove('next');
//                 carouselDom.classList.remove('prev');
//             }, timeRunning);

//             clearTimeout(runNextAuto);
//             runNextAuto = setTimeout(() => {
//                 nextDom.click();
//             }, timeAutoNext);
//         }
//     }, []);

//     return (
//         <div className='h-96'>
//             <div class="carousel">
//                 <div class="list">
//                     <div class="item">
//                         <Image src={image1} alt="alt" width={1000} height={500} />
//                         <div class="content">
//                             <div class="author">LUNDEV</div>
//                             <div class="title">DESIGN SLIDER</div>
//                             <div class="topic">ANIMAL</div>
//                             <div class="des">
//                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                             </div>
//                             <div class="buttons">
//                                 <button>SEE MORE</button>
//                                 <button>SUBSCRIBE</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="item">
//                         <Image src={image2} alt="alt" width={1000} height={500} />
//                         <div class="content">
//                             <div class="author">LUNDEV</div>
//                             <div class="title">DESIGN SLIDER</div>
//                             <div class="topic">ANIMAL</div>
//                             <div class="des">
//                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                             </div>
//                             <div class="buttons">
//                                 <button>SEE MORE</button>
//                                 <button>SUBSCRIBE</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="item">
//                         <Image src={image3} alt="alt" width={1000} height={500} />
//                         <div class="content">
//                             <div class="author">LUNDEV</div>
//                             <div class="title">DESIGN SLIDER</div>
//                             <div class="topic">ANIMAL</div>
//                             <div class="des">
//                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                             </div>
//                             <div class="buttons">
//                                 <button>SEE MORE</button>
//                                 <button>SUBSCRIBE</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="item">
//                         <Image src={image4} alt="alt" width={1000} height={500} />
//                         <div class="content">
//                             <div class="author">LUNDEV</div>
//                             <div class="title">DESIGN SLIDER</div>
//                             <div class="topic">ANIMAL</div>
//                             <div class="des">
//                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                             </div>
//                             <div class="buttons">
//                                 <button>SEE MORE</button>
//                                 <button>SUBSCRIBE</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="thumbnail">
//                     <div class="item">
//                         <Image src={image1} alt="alt" width={1000} height={500} />
//                         <div class="content">
//                             <div class="title">
//                                 Name Slider
//                             </div>
//                             <div class="description">
//                                 Description
//                             </div>
//                         </div>
//                     </div>
//                     <div class="item">
//                         <Image src={image2} alt="alt" width={1000} height={500} />
//                         <div class="content">
//                             <div class="title">
//                                 Name Slider
//                             </div>
//                             <div class="description">
//                                 Description
//                             </div>
//                         </div>
//                     </div>
//                     <div class="item">
//                         <Image src={image3} alt="alt" width={1000} height={500} />
//                         <div class="content">
//                             <div class="title">
//                                 Name Slider
//                             </div>
//                             <div class="description">
//                                 Description
//                             </div>
//                         </div>
//                     </div>
//                     <div class="item">
//                         <Image src={image4} alt="alt" width={1000} height={500} />
//                         <div class="content">
//                             <div class="title">
//                                 Name Slider
//                             </div>
//                             <div class="description">
//                                 Description
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="arrows">
//                     <button id="prev" className='flex items-center justify-center'>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12 15.75 4.5" />
//                         </svg>
//                     </button>
//                     <button id="next" className='flex items-center justify-center'>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div class="time"></div>
//             </div>
//         </div>
//     );
// };

// export default BannerSlider;



// Import necessary modules and components
import { useEffect } from 'react';
import './style.css';
import Image from 'next/image';

// Import your images
import image1 from './image/img1.jpg';
import image2 from './image/img2.jpg';
import image3 from './image/img3.jpg';
import image4 from './image/img4.jpg';

// Create a JSON array for slider content
const sliderContent = [
    {
        id: 1,
        image: image1,
        author: 'LUNDEV',
        title: 'DESIGN SLIDER',
        topic: 'ANIMAL',
        description: 'Lorem ipsum dolor...',
    },
    {
        id: 2,
        image: image2,
        author: 'LUNDEV',
        title: 'DESIGN SLIDER',
        topic: 'ANIMAL',
        description: 'Lorem ipsum dolor...',
    },
    {
        id: 3,
        image: image3,
        author: 'LUNDEV',
        title: 'DESIGN SLIDER',
        topic: 'ANIMAL',
        description: 'Lorem ipsum dolor...',
    },
    {
        id: 4,
        image: image4,
        author: 'LUNDEV',
        title: 'DESIGN SLIDER',
        topic: 'ANIMAL',
        description: 'Lorem ipsum dolor...',
    },
    // Add more items as needed
];

// Your BannerSlider component
const BannerSlider = () => {
    useEffect(() => {
        // Existing JavaScript code goes here
        let nextDom = document.getElementById('next');
        let prevDom = document.getElementById('prev');

        let carouselDom = document.querySelector('.carousel');
        let SliderDom = carouselDom.querySelector('.carousel .list');
        let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        let timeDom = document.querySelector('.carousel .time');

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        let timeRunning = 5000;
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

        return () => {
            // Cleanup code if needed
        };
    }, []);

    // Function to render individual slider item
    const renderSliderItem = (item) => (
        <div key={item.id} className="item">
            <Image src={item.image} alt="alt" width={1000} height={500} />
            <div className="content">
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <div className="buttons">
                    <button>SEE MORE</button>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );

    // Function to render individual thumbnail item
    const renderThumbnailItem = (item) => (
        <div key={item.id} className="item">
            <Image src={item.image} alt="alt" width={1000} height={500} />
            <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
            </div>
        </div>
    );


    return (
        <div className="h-96">
            <div className="carousel">
                <div className="list">
                    {sliderContent.map(renderSliderItem)}
                </div>
                <div className="thumbnail">
                    {sliderContent.map(renderThumbnailItem)}
                </div>
                <div className="arrows">
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
                <div className="time"></div>
            </div>
        </div>
    );
};

export default BannerSlider;
