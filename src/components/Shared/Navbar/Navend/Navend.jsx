"use client";

import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';

const Navend = () => {

  const { user, logOut } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    axios.get(`https://boi-binimoy-server.vercel.app/api/v1/users/${user?.email}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setCurrentUser(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })
      .finally(function () {
        // always executed
      });
  }, [user?.email])

  // console.log(currentUser);

  return (
    <div className="flex items-center gap-2">
      <MdFavoriteBorder />
      <MdOutlineShoppingCart />
      <div className="navbar-end">
        {user ? <div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={currentUser?.image}
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
        </div> : <Link href="/login" className="text-lg">
          <LuUser2 />
        </Link>
        }
      </div >
    </div >
  );
};

export default Navend;
