'use client'

import Image from "next/image";


const MyOrder = ({cart}) => {
   console.log("image url: ",cart?.book?.image);
    return (
     
             <div className="grid grid-cols-9 items-center justify-between text-center font-semibold border border-gray-100 p-5">
              <Image
                  src={cart?.book?.cover_image}
                  width={150}
                  height={200}
                  alt="book"
                  priority
                  style={{ width: "50%", height: "100%" }}
                  className="mx-auto col-span-1"
                />
		     
              <h5 className=" col-span-2">{cart?.book?.title}</h5>
              <h5 className=" col-span-1">{cart?.cart?.quantity}</h5>
              <h5 className=" col-span-1">{cart?.book?.price} BDT</h5>
              <h5 className=" col-span-1">{cart?.cart?.price} BDT</h5>
              <h5 className=" col-span-2">{cart?.book?.owner_email}</h5>
              <h5 className=" col-span-1">
                <button>Pending</button>
              </h5>
            </div>
      
    );
};

export default MyOrder;