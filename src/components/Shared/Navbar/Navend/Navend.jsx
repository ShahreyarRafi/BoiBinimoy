"use client";

import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import PageLoading from "../../loadingPageBook/PageLoading";
import useOneUser from "@/Hooks/Users/useOneUser";
import useGetMyCarts from "@/Hooks/Carts/useGetMyCarts";

const profilePlaceholder = "/userPicPlaceholder.png";

const Navend = () => {
  const { user, logOut } = useContext(AuthContext);
  // Current user data from database
  const { currentUser } = useOneUser();
  const [cart, setCart] = useState(null);
  // const [books, setBooks] = useState(null);
  // const [loading, setLoading] = useState(true);
  // let totalPrice = 0;
  // let cartId = null;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://boi-binimoy-server.vercel.app/api/v1/my-carts/${user?.email}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const result = await response.json();
  //       setCart(result);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [user?.email, totalPrice]);

  // cart?.books?.map(
  //   (book) => (totalPrice = parseFloat(totalPrice) + parseFloat(book.price))
  // );

  const { myCarts , price, quantity, isPending, refetch } = useGetMyCarts();


  return (
    <div className="flex items-center gap-2">
      <div className="text-2xl">
        <MdFavoriteBorder />
      </div>

      {/* Drawer cart */}
      <div className="drawer drawer-end">
        <input
          id="cart-drawer"
          type="checkbox"
          className="drawer-toggle overflow-hidden"
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="cart-drawer" className="drawer-button">
            <MdOutlineShoppingCart />
          </label>
        </div>
        <div className="drawer-side overflow-hidden z-[2]">
          <label
            htmlFor="cart-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-1/3 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {myCarts?.map((cart) => (
              <li key={cart?.cart._id}>
                <div className="flex items-center justify-between rounded-lg p-2">
                  <div className="flex gap-5 items-center">
                    <Image
                      src={cart?.book?.cover_image}
                      width={70}
                      height={100}
                      alt="book"
                      priority
                      style={{ width: "70px", height: "100px" }}
                      className="rounded-md"
                    />
                    <div>
                      <h2 className="font-bold text-lg">{cart?.book?.title}</h2>
                      <h2 className="text-orange-700 font-bold text-lg">
                        {cart?.book?.price} BDT
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(cart?.book?._id)}
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
                <Link
                  href="/cart"
                  className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1"
                >
                  View cart
                </Link>
                <button className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white flex items-center gap-1">
                  Checkout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    src={currentUser.image}
                    alt="user"
                    priority
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 hover:bg-base-300 rounded-lg text-black"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  {" "}
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
