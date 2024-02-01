import { FaRegHeart } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/aboutus">About</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link href="">Category</Link>
      </li>
    </>
  );

  return (
    <div className="max-w-[1880px] w-full mx-auto sticky bg-[#fcfcf6] mb-2 py-3 px-5 top-0 right-0 z-10  backdrop-filter backdrop-blur-sm shadow-md rounded-b-lg">
      <nav className="flex justify-between items-center">
        {/* nav start */}
        <div className="navbar-start">
          {/* sm screen */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* menus */}
            <div className="dropdown">
              <div tabIndex={0} role="button">
                <IoMdMenu className="text-xl"></IoMdMenu>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>

            {/* logo */}
            <div>
              <Link href="/">
                <div className="text-orange-500 text-xl font-bold">
                  <span className="font-extrabold">
                    Boi
                    <span className="text-orange-600 font-extralight">
                      Binimoy
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* md+lg screen */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* logo */}
            <div>
              <Link href="/">
                <div className="text-orange-500 text-2xl font-bold">
                  <span className="font-extrabold">
                    Boi
                    <span className="text-orange-600 font-extralight">
                      Binimoy
                    </span>
                  </span>
                </div>
              </Link>
            </div>

            {/* menus */}
            <div>
              <ul className="menu menu-horizontal px-1 mr-8">{links}</ul>
            </div>
          </div>
        </div>

        {/* nav end */}
        <div className="navbar-end flex items-center gap-3 md:gap-6">
          <button className="hidden lg:block">
            <IoSearch className="text-lg hover:text-orange-500"></IoSearch>
          </button>
          <button>
            <FaRegHeart className="text-lg hover:text-orange-500"></FaRegHeart>
          </button>
          <button>
            <BsBasket3 className="text-lg  hover:text-orange-500"></BsBasket3>
          </button>
          <button>
            <LuMoonStar className="text-xl  hover:text-orange-500"></LuMoonStar>
          </button>
          <button>
            <FiLogIn className="text-xl  hover:text-orange-500"></FiLogIn>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
