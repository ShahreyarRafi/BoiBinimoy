// "use client"

// import BuyCard from "../../shared/BuyCard";
// import './Buy.css'
// import { IoIosArrowForward } from "react-icons/io";

// const Buy = ({ title, author, rating, price }) => {
//     return (
//         <div className='max-w-7xl mx-auto mt-16 px-0 md:px-10 lg:px-0'>
//             {/* Section Heading */}
//             <div className='flex justify-between items-center gap-10 mb-5'>
//                 <h1 className='text-3xl font-semibold'>Buy Now</h1>
//                 <hr className='hidden md:block border-[1px] border-gray-200 md:w-[300px] lg:w-[850px]'></hr>
//                 <button className='bg-[#f65d4e] text-white py-2 px-4 rounded-full'>View all <IoIosArrowForward className="inline"></IoIosArrowForward></button>
//             </div>
//             {/* Card */}
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
//                 <BuyCard source={'https://i.ibb.co/bFj8wxn/Untitled-design-7.png'} title={'Goodboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></BuyCard>
//                 <BuyCard source={'https://i.ibb.co/GHHKS1C/Untitled-design-5.png'} title={'Goodboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></BuyCard>
//                 <BuyCard source={'https://i.ibb.co/f9HSt0Y/Untitled-design-6.png'} title={'Goodboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></BuyCard>
//                 <BuyCard source={'https://i.ibb.co/mSVwnsJ/Untitled-design.png'} title={'Goodboy'} author={'Karla Newman'} rating={'5'} price={'95.91'}></BuyCard>
//             </div>
//         </div >
//     );
// };

// export default Buy;


"use client"

import ExchangeCard from "../shared/ExchangeCard";

export default function Buy() {

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
            "id": 1,
            "image": "https://i.ibb.co/wyJk0Df/Untitled-design-11.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 1,
            "image": "https://i.ibb.co/NVwBhZJ/Untitled-design-10.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 1,
            "image": "https://i.ibb.co/d52WsrH/Untitled-design-9.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 1,
            "image": "https://i.ibb.co/HzPW8vW/Untitled-design-13.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },
        {
            "id": 1,
            "image": "https://i.ibb.co/vdcSqxv/Untitled-design-12.png",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "description": "A tale of wealth, love, and the American Dream set in the Roaring Twenties."
        },


    ]



    return (
        <>
            <div className="container mx-auto py-12">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">Buy Now</h2>
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
