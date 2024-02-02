"use client";

import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";

const Navend = () => {
  const { user, logOut } = useContext(AuthContext);
  const [active, setActive] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <MdFavoriteBorder />
      <MdOutlineShoppingCart />
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="cursor-pointer">
              <div className="">
                <div className="w-10 rounded-full">
                  {/* <Image className="w-9 rounded-full " src={user?.photoURL} alt="User" /> */}

                  <Image
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
                  />
                </div>
              </div>
            </label>

            {active && (
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52"
              >
                <Link href="dashboard">
                  <button className="px-4 py-2 hover:bg-base-300 rounded-lg">
                    {" "}
                    Dashboard{" "}
                  </button>
                </Link>
                <div
                  onClick={logOut}
                  className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className={({ isActive }) =>
              isActive ? "btn btn-neutral btn-sm " : ""
            }
          >
            <LuUser2 />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navend;
