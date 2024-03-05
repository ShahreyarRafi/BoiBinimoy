"use client"

import Image from "next/image";

const ReviewCard = ({ review }) => {
    return (
        <div className="flex items-center gap-3 px-3 py-1 shadow-sm rounded-lg">
            {/* user image */}
            <div>
                <Image 
                    className="object-cover w-12 h-12 mb-2 rounded-full shadow"
                    src={review?.user_image}
                    priority
                    width={500}
                    height={500}
                    alt="Person"
                />
            </div>
            {/* user name, review */}
            <div>
                <h5 className="text-md font-bold">{review?.user_name}</h5>
                <p className="text-xs">{review?.comment}</p>
            </div>
            <hr />
        </div>
    );
};

export default ReviewCard;