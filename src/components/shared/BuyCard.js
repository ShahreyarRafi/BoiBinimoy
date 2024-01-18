import Image from 'next/image';

const BuyCard = () => {
    return (
        <div className="flex flex-col border-x-[1px] border-gray-200 px-2">
            <div className='card'>
                <Image src="https://i.ibb.co/VNQfKsZ/banner-book.jpg" alt="card" priority width={500} height={500} style={{
                    width: 'auto',
                    height: '350px',
                }} className='rounded-lg cardImage' />
                <div className="flex flex-col">
                    <div className='info'>
                        {/* Action Button */}
                        <div>
                            <button className="bg-base-200 rounded-l-full border-2 border-r-0 border-gray-500 p-2">Add to cart</button>
                            <button className=" bg-base-200 rounded-r-full border-2 border-gray-500 p-2">Add to wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <h2 className="text-xl font-semibold">Goodbuy</h2>
                <div className="rating rating-sm my-3">
                    <input className="mask mask-star-2 bg-orange-500" readOnly />
                    <input className="mask mask-star-2 bg-orange-500" readOnly />
                    <input className="mask mask-star-2 bg-orange-500" readOnly />
                    <input className="mask mask-star-2 bg-orange-500" readOnly />
                    <input className="mask mask-star-2 bg-orange-500" readOnly checked />
                </div>
                <p className='text-gray-500'>Karla Newman</p>
                <p className='text-lg font-semibold text-[#f65d4e] mt-3'>$95.91</p>
            </div>
        </div>
    );
};

export default BuyCard;