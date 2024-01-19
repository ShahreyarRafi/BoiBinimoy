"use client"

import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {

    const links = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/aboutus'>About</Link></li>
        {/* <li><a>Contact</a></li> */}
        {/* <li><a>Blog</a></li> */}
    </>

    return (
        <div className="bg-base-100 px-0 md:px-10 lg:px-0">
            <div className="max-w-7xl mx-auto">
                {/* First position */}
                <div className="navbar">
                    <div className="navbar-start md:mr-10">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            {/* Mobile menu */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src="https://i.ibb.co/PxBs9dH/Boi-Binimoy-Transparent-Big.png" alt="card" priority width={500} height={500} style={{
                                    width: '50px',
                                    height: '100%',
                                }} />
                            <p className="text-base md:text-lg lg:text-xl font-bold">Boi Binimoy</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <input type="text" placeholder="Search products..." className="bg-base-300 text-black rounded-l-full rounded-r-full pl-4 py-2 w-[200px] md:w-[250px] lg:w-[400px]" />
                        <button className="bg-[#f65d4e] rounded-full relative right-8"><IoSearch className="text-white m-3 w-8"></IoSearch></button>
                    </div>

                    <div className="navbar-end flex gap-3 md:gap-6">
                        <button><FaRegHeart className="text-lg"></FaRegHeart></button>
                        <button><BsBasket3 className="text-lg"></BsBasket3></button>
                        <Link href='/auth/login' className="bg-[#f65d4e] text-white btn btn-sm">Login</Link>
                    </div>
                </div>
                <hr />
                {/* Second Position*/}
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        {/* Category */}
                        <div className="flex items-center gap-2 bg-[#f65d4e] text-white p-2 w-[200px] rounded-l-full rounded-r-full">
                            <p><CgMenuGridO className="text-2xl"></CgMenuGridO></p>
                            <p className="text-sm">Category</p>
                            <p className="pl-10"><IoIosArrowDown></IoIosArrowDown></p>
                        </div>
                        {/* Search */}
                        <div className="flex ml-4 md:hidden">
                            <input type="text" placeholder="Search products..." className="bg-base-300 text-black rounded-l-full rounded-r-full pl-4 py-2 w-[200px]" />
                            <button className="bg-[#f65d4e] rounded-full relative right-8"><IoSearch className="text-white m-3 w-8"></IoSearch></button>
                        </div>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end hidden md:flex">
                        <div className="flex items-center gap-2">
                            <p className="bg-gray-200 rounded-full p-2"><FiPhoneCall></FiPhoneCall></p>
                            <div>
                                <p className="text-[#f65d4e] text-md font-bold">+84-1800-4635</p>
                                <p className="text-xs text-gray-400">24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;