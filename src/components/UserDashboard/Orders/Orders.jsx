"use client";

import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Orders = () => {
  return (
    <div className="container duration-300">
      <div className="w-full rounded-2xl overflow-hidden lg:shadow-lg my-5 duration-300">
        <div className="bg-[#016961] duration-300 text-white ">
          <div className="grid grid-cols-8 items-center justify-between font-semibold border border-gray-100 px-10 py-5">
            <h5 className="text-center text-xs md:text-base">Product</h5>
            <h5 className="text-center text-xs md:text-base">title</h5>
            <h5 className="text-center text-xs md:text-base">Quantity</h5>
            <h5 className="text-center text-xs md:text-base">Unit Price</h5>
            <h5 className="text-center text-xs md:text-base">total Price</h5>
            <h5 className="text-center text-xs md:text-base">Client</h5>
            <h5 className="text-center text-xs md:text-base">Email</h5>
            <h5 className="text-center text-xs md:text-base">Status</h5>
          </div>
        </div>
        <div className="flex-1 sm:flex-none grid grid-cols-1 gap-5 lg:gap-0">
          <div className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100">
            <div className="grid grid-cols-8 items-center text-center font-semibold border border-gray-100 p-5">
              {/* <Image
                  src="#"
                  width={150}
                  height={200}
                  alt="book"
                  priority
                  style={{ width: "50%", height: "100%" }}
                  className="mx-auto"
                /> */}
              <h5>Product Name</h5>
              <h5>Quantity </h5>
              <h5>unit price BDT</h5>
              <h5>total price BDT</h5>
              <h5>Client name</h5>
              <h5>Client email</h5>
              <h5>
                <button>Pending</button>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
