'use client'

import useGetOneBuyBook from "@/Hooks/buyBooks/useGetOneBuyBook";
import Image from "next/image";


const MyOrder = ({cart}) => {
   const { book } = useGetOneBuyBook(cart?.book_id)
    return (
     
             <div className="grid grid-cols-8 items-center justify-between text-center font-semibold border border-gray-100 p-5">
              <Image
                  src={book?.image}
                  width={150}
                  height={200}
                  alt="book"
                  priority
                  style={{ width: "50%", height: "100%" }}
                  className="mx-auto"
                />
		     
              <h5>{book?.title}</h5>
              <h5>{cart?.quantity}</h5>
              <h5>{book?.price} BDT</h5>
              <h5>{cart?.price} BDT</h5>
              <h5>{book?.owner_email}</h5>
              <h5>
                <button>Pending</button>
              </h5>
            </div>
      
    );
};

export default MyOrder;