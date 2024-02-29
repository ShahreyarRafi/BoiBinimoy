"use client";

import Image from "next/image";

const Order = ({order}) => {

  const {cart, book } = order;

  

  return (
    <div className="grid grid-cols-10 items-center text-center font-semibold border border-gray-100 p-5">
      <Image
            src={book?.cover_image}
            width={150}
            height={200}
            alt="book"
            priority
            style={{ width: "50%", height: "100%" }}
            className="mx-auto col-span-1"
          />
      <h5 className=" col-span-2">{book?.title}</h5>
      <h5 className=" col-span-1"> {cart?.quantity} </h5>
      <h5 className=" col-span-1"> {book?.price} BDT</h5>
      <h5 className=" col-span-1"> {cart?.price} BDT</h5>
      <h5 className=" col-span-1"> {cart?.user_name}</h5>
      <h5 className=" col-span-2"> {cart?.user_email}</h5>
      <h5 className=" col-span-1">
        <button>Pending</button>
      </h5>
    </div>
  );
};

export default Order;
