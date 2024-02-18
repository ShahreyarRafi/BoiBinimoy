"use client";

import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import PageLoading from "../../loadingPageBook/PageLoading";
import useOneUser from "@/Hooks/Users/useOneUser";
import Cart from "../cart";

const profilePlaceholder = "/userPicPlaceholder.png";

const Navend = () => {
  const { user, logOut } = useContext(AuthContext);
  // Current user data from database
  const { currentUser } = useOneUser();
  const [cart, setCart] = useState(null);
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  let totalPrice = 0;
  let cartId = null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://boi-binimoy-server.vercel.app/api/v1/my-carts/${user?.email}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setCart(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.email, totalPrice]);

  cart?.books?.map(book => totalPrice = parseFloat(totalPrice) + parseFloat(book.price))

  return (
    <div className="flex items-center gap-2">
      <MdFavoriteBorder />



<Cart></Cart>

      <div className="navbar-end">
        {user ? <div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
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
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li><Link href="/dashboard" className="px-4 py-2 hover:bg-base-300 rounded-lg text-black">
                Dashboard
              </Link></li>
              <li> <button
                onClick={logOut}
                className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
              >
                Logout
              </button></li>
            </ul>
          </div>
        </div> : <Link href="/joinUs" className="text-lg">
          <LuUser2 />
        </Link>
        }
      </div >
    </div >
  );
};

export default Navend;
