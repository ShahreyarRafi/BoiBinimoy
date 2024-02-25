"use client";

import Image from "next/image";
import useGetMyCarts from "@/Hooks/Carts/useGetMyCarts";
import PageLoading from "../Shared/loadingPageBook/PageLoading";
import useAuth from "@/Hooks/auth/useAuth";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import CartsDetails from "./CartsDetails";

const Cart = () => {

  const { myCarts , price, quantity, isPending, refetch } = useGetMyCarts();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();


  if (isPending) {
    return <PageLoading />;
  }


  const handleCheckout = async () => {
    const email = await user?.email;
  
    const res = await axiosSecure.post("/api/v1/order", {email: email});
    console.log(res.data);
    if (res?.data?.url) {
      const url = await res.data.url;
      window.open(url, '_blank');
      // router.push(url);
    }
  
  };

  return (
    <div className="container duration-300">
      <div className="w-full rounded-2xl overflow-hidden lg:shadow-lg my-5 duration-300">
        <div className="bg-[#016961] duration-300 text-white ">
          <div className="grid grid-cols-6 items-center justify-between font-semibold border border-gray-100 px-10 py-5">
            <h5 className="text-center text-xs md:text-base">Product</h5>
            <h5 className="text-center text-xs md:text-base">Product Name</h5>
            <h5 className="text-center text-xs md:text-base">Unit Price</h5>
            <h5 className="text-center text-xs md:text-base">Quantity</h5>
            <h5 className="text-center text-xs md:text-base">Total</h5>
            <h5 className="text-center text-xs md:text-base">Remove</h5>
          </div>
        </div>
        <div className="flex-1 sm:flex-none grid grid-cols-1 gap-5 lg:gap-0">
          {myCarts?.map((cart) => (
          <CartsDetails key={cart.cart._id} cart = {cart} refetch = {refetch}></CartsDetails>
          ))}
          <div className=" flex  items-center justify-center gap-4 mb-3">
            <p >Total price: {price}</p>
            <button
              onClick={handleCheckout}
              className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
