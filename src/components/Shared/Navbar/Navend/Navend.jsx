"use client";

import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";

const Navend = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [active, setActive] = useState(false);

  console.log(user.email);

  return (
    <div className="flex items-center gap-2">
      <MdFavoriteBorder />
      <MdOutlineShoppingCart />

      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="cursor-pointer">
              <div>
                <div className="w-10 rounded-full">

                  {/* <Image
                    src={user.photoURL}
                    alt="user"
                    onClick={() => setActive(!active)}
                    priority
                    width={100}
                    height={100}
                    style={{
                      width: "36px",
                      height: "36px",
                    }}
                    className="h-9 w-9 rounded-full"
                  /> */}
                </div>
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52"
            >
              <Link href="/dashboard" className="px-4 py-2 hover:bg-base-300 rounded-lg">
                Dashboard
              </Link>
              <button
                onClick={logOut}
                className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
              >
                Logout 
              </button>
            </div>
          </div>) : (
          <Link
            href="/login"
            className="btn  btn-sm"
          >
            <LuUser2 />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navend;
