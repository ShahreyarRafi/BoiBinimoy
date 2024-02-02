import Image from 'next/image';

const BuyCard = ({ source, title, author, rating, price }) => {
    return (
        <div className="flex flex-col border-x-[1px] border-gray-200 px-2">
            <div className='card'>
                <Image src={source} alt="card" priority width={500} height={500} style={{
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
                <h2 className="text-xl text-[#016961] font-semibold">{title}</h2>
                <div className="rating rating-sm my-3">
                    <input className="mask mask-star-2 bg-teal-500" readOnly />
                    <input className="mask mask-star-2 bg-teal-500" readOnly />
                    <input className="mask mask-star-2 bg-teal-500" readOnly />
                    <input className="mask mask-star-2 bg-teal-500" readOnly />
                    <input className="mask mask-star-2 bg-teal-500" readOnly checked />
                    <p className='pl-3'>{rating}</p>
                </div>
                <p className='text-gray-500'>{author}</p>
                <p className='text-lg font-semibold text-[#f65d4e] mt-3'>${price}</p>
            </div>
        </div>
    );
};

export default BuyCard;