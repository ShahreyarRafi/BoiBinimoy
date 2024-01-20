"use client"

import BuyCard from "../../shared/BuyCard";
import './Buy.css'
import { IoIosArrowForward } from "react-icons/io";

const Buy = ({ title, author, rating, price }) => {
    return (
        <div className='max-w-7xl mx-auto mt-16 px-0 md:px-10 lg:px-0'>
            {/* Section Heading */}
            <div className='flex justify-between items-center gap-10 mb-5'>
                <h1 className='text-3xl font-semibold'>Buy Now</h1>
                <hr className='hidden md:block border-[1px] border-gray-200 md:w-[300px] lg:w-[850px]'></hr>
                <button className='bg-[#f65d4e] text-white py-2 px-4 rounded-full'>View all <IoIosArrowForward className="inline"></IoIosArrowForward></button>
            </div>
            {/* Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <BuyCard source={'https://i.ibb.co/bFj8wxn/Untitled-design-7.png'} title={'Goodboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></BuyCard>
                <BuyCard source={'https://i.ibb.co/GHHKS1C/Untitled-design-5.png'} title={'Goodboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></BuyCard>
                <BuyCard source={'https://i.ibb.co/f9HSt0Y/Untitled-design-6.png'} title={'Goodboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></BuyCard>
                <BuyCard source={'https://i.ibb.co/mSVwnsJ/Untitled-design.png'} title={'Goodboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></BuyCard>
            </div>
        </div >
    );
};

export default Buy;