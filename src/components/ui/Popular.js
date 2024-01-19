"use client"
import Image from "next/image";
import Card from "../shared/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IoIosArrowDown } from "react-icons/io";

const Popular = () => {

    return (
        <div className='max-w-7xl mx-auto mt-16 px-0 md:px-10 lg:px-0'>
            {/* Section Heading */}
            <div className='flex justify-between items-center gap-10 mb-5'>
                <h1 className='text-3xl font-semibold'>Tranding Now</h1>
                <hr className='hidden md:block border-[1px] border-gray-200 md:w-[250px] lg:w-[850px]'></hr>
                <button className='bg-[#f65d4e] text-white py-2 px-4 rounded-full'>View all &gt;</button>
            </div>
            {/* Card */}
            <div className='flex'>
                <div className='w-full lg:w-2/3'>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide><Card source={'https://i.ibb.co/F3sHBfn/Untitled-design-4.png'} title={'Goodboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></Card></SwiperSlide>
                        <SwiperSlide><Card source={'https://i.ibb.co/qnpgW7g/Untitled-design-1.png'} title={'Badboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></Card></SwiperSlide>
                        <SwiperSlide><Card source={'https://i.ibb.co/58N10pW/Untitled-design-2.png'} title={'Richboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></Card></SwiperSlide>
                        <SwiperSlide><Card source={'https://i.ibb.co/cxzwdnY/Untitled-design-3.png'} title={'Poorboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></Card></SwiperSlide>
                    </Swiper>
                </div>

                {/* Big card */}
                <div className="hidden lg:flex w-1/3 relative">
                    <Image src="https://i.ibb.co/VNQfKsZ/banner-book.jpg" alt="card" priority width={500} height={500} className='rounded-xl z-0'
                        style={{
                            width: 'cover',
                            height: 'cover',
                        }} />
                    <div className='absolute z-10 bg-black bg-opacity-30 w-full h-full rounded-lg pt-5 pl-5 text-white'>
                        <h3 className='text-lg font-semibold'>Buy One , Get One 30% off</h3>
                        <h2 className='text-4xl my-2 font-bold'>30% Off</h2>
                        <h3 className='text-lg'>This offer is valid at Boi Binimoy</h3>
                        <h3 className='text-lg'>From February 1, 2024</h3>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Popular;