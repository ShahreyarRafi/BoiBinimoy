"use client";

import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import useOneUser from "@/Hooks/Users/useOneUser";
import useGetMyCarts from "@/Hooks/Carts/useGetMyCarts";
import { AiOutlineHeart } from "react-icons/ai";
import useWishListBook from "@/Hooks/wishList/useWishListBook";
import PageLoading from "../../loadingPageBook/PageLoading";
import Swal from "sweetalert2";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";

const Navend = () => {
  const axiosSecure = useAxiosSecure();
  const [wishListBook] = useWishListBook()
  const { user, logOut } = useContext(AuthContext);
  const { currentUser } = useOneUser();
  let { myCarts, price, isPending, refetch } = useGetMyCarts();
  const totalCart = myCarts?.length;

  if (myCarts?.length > 3) {
    myCarts = myCarts.slice(0, 3);
  }


  //  delte cart
  const handleDeleteCart = (id, title) => {
    console.log("id: ", id);

    Swal.fire({
      title: "Delete Book",
      text: `Are you sure you want to delete the book ${title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/api/v1/delete-cart/${id}`)
          .then((response) => {
            if (response.data) {
              Swal.fire(
                "Deleted!",
                `Your book "${title}" has been deleted.`,
                "success"
              );

              refetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting Book:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the book.",
              "error"
            );
          });
      }
    });
  };




  return (
    <div className="flex items-center gap-1">
      <Link href="/wishList">
        <div className="px-2">
          <span className="indicator-item badge badge-secondary"> {wishListBook.length} </span>
          <AiOutlineHeart className="mx-auto" />
        </div>
      </Link>

      {/* Drawer cart */}
      <div className="drawer drawer-end">
        <input
          id="cart-drawer"
          type="checkbox"
          className="drawer-toggle overflow-hidden"
        />
        <div className="drawer-content px-2">
          {/* Page content here */}
          {totalCart ?
            <span className="indicator-item badge badge-secondary">
              {totalCart}
            </span> :
            <span className="indicator-item badge badge-secondary">
              {0}
            </span>
          }
          <label htmlFor="cart-drawer" className="drawer-button">
            <MdOutlineShoppingCart className="mx-auto" />
          </label>
        </div>
        <div className="drawer-side overflow-hidden z-[2]">
          <label htmlFor="cart-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-1/3 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {myCarts && myCarts?.map((cart) => (
              <li key={cart?._id}>
                <div className="flex items-center justify-between rounded-lg p-2">
                  <div className="flex gap-5 items-center">
                    <Image
                      src={cart?.cover_image}
                      width={70}
                      height={100}
                      alt="book"
                      priority
                      style={{ width: "70px", height: "100px" }}
                      className="rounded-md"
                    />
                    <div>
                      <h2 className="font-bold text-lg">{cart?.title}</h2>
                      <h2 className="text-orange-700 font-bold text-lg">
                        {cart?.unit_price} BDT
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteCart(cart?._id, cart.title)}
                    className="mt-5 button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1"
                  >
                    <RxCross2></RxCross2>
                  </button>
                </div>
                <hr />
              </li>
            ))}
            <li className="mx-auto">
              <h3 className="text-xl font-bold">Total: {price}</h3>
            </li>
            <li>
              <hr />
            </li>
            <li className="mx-auto">
              <div className="flex gap-5 items-center">
                <Link href="/cart"
                  className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1"
                >
                  View carts
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={currentUser.image}
                    alt="user"
                    priority
                    width={300}
                    height={300}
                    className="avatar online"
                  />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link href="/dashboard" className="px-4 py-2 hover:bg-base-300 rounded-lg text-black">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link href="/joinUs" className="text-lg">
            <LuUser2 />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navend;