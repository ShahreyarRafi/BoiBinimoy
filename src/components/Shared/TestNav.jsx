"use client"

import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import userPicPlaceholder from '../../assets/userPicPlaceHolder.png';
import cartIcon from '../../assets/cartRoundedWhite.png';
import cartIconDark from '../../assets/cartRoundedBlack.png';
import profile from '../../assets/userIconWhite.png';
import profileDark from '../../assets/userIconBlack.png';
import { AuthContext } from '@/providers/AuthProvider';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FaBars } from 'react-icons/fa';
import '@/components/Styles/nav.css'
import { FiPhoneCall, FiSearch } from 'react-icons/fi';




const TestNav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(false);


    const { user, logout } = useContext(AuthContext);


    const handleLogout = () => {
        logout();
    }

    const userTheme = localStorage.getItem('theme');

    // default light
    // const [theme, setTheme] = useState(userTheme === 'dark' ? true : false);

    // default dark
    // const [theme, setTheme] = useState(userTheme === 'light' ? false : true);


    // Set the initial theme state based on the user's preference or default to dark
    const [theme, setTheme] = useState(userTheme === 'light' ? false : true);

    const toggleTheme = () => {
        const newTheme = !theme;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme);
    }, [theme]);

    return (
        <nav className="relative flex flex-wrap items-center justify-between  font-primary bg-slate-100 dark:bg-black duration-300">
            <div className="w-full px-1 md:px-7 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <div className='flex items-center gap-4 mr-5'>
                        <a
                            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black dark:text-white duration-300"
                            href="/"
                        >
                            Boi Binimoy
                        </a>
                    </div>
                    <button
                        className="text-black dark:text-white duration-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <div>
                            =
                        </div>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <div className='w-full flex justify-between items-center mt-5 lg:mt-0 mb-2 lg:mb-0'>
                        <div>
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-3 xl:gap-5">
                            </ul>
                        </div>

                        <div class="relative text-gray-600">
                            <input type="search" name="search" placeholder="Search" class="bg-white min-w-[600px] w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                            <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                                <FiSearch />
                            </button>
                        </div>

                        <div className='bg-red-700'>
                            <ul className=" flex lg:items-center justify-center items-end flex-col lg:flex-row list-none lg:ml-auto gap-3 xl:gap-5">

                                {!user && (
                                    <li>
                                        <ul className="flex items-center gap-2 md:gap-5">
                                            <li className="nav-item px-1 xl:px-3 py-2 flex items-center text-sm  uppercase font-semibold text-black dark:text-white duration-300 hover:opacity-75">
                                                <Link
                                                    href="/login"
                                                >
                                                    LOGIN
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                )}



                                <li className='flex items-center gap-3 lg:gap-6'>
                                    {user && (
                                        <a className=" ml-3 xl:ml-0">
                                            <Link href="/cart">
                                                <Image
                                                    className='w-10 dark:block hidden'
                                                    src={cartIcon} alt="" />
                                                <Image
                                                    className='w-10 dark:hidden block'
                                                    src={cartIconDark} alt="" />
                                            </Link>
                                        </a>
                                    )}
                                    <div className=" flex rounded-full text-black dark:text-white duration-300">
                                        <DarkModeSwitch
                                            checked={theme}
                                            onChange={toggleTheme}
                                            size={35}
                                        />
                                    </div>
                                    <div className=''>
                                        {user && (
                                            <div className='relative'>
                                                <button
                                                    className="text-black dark:text-white duration-300 cursor-pointer text-xl border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
                                                    type="button"
                                                    onClick={() => setDropDownOpen(!dropDownOpen)}
                                                >
                                                    <summary>
                                                        {user.photoURL ? (
                                                            <Image
                                                                src={user.photoURL}
                                                                alt="Profile"
                                                                className="h-9 w-9 rounded-full"
                                                            />
                                                        ) : (
                                                            <>
                                                                <Image
                                                                    src={profile}
                                                                    alt="Placeholder"
                                                                    className="h-9 w-9 dark:block hidden"
                                                                />
                                                                <Image
                                                                    src={profileDark}
                                                                    alt="Placeholder"
                                                                    className="h-9 w-9 dark:hidden block"
                                                                />
                                                            </>
                                                        )}

                                                    </summary>
                                                </button>

                                                {dropDownOpen && (
                                                    <div className="origin-top-right absolute right-0 mt-2 w-auto pr-10 rounded-md shadow-lg bg-slate-100 dark:bg-black border border-neutral-300 dark:border-gray-800 ring-1 ring-white dark:ring-black ring-opacity-5">
                                                        <ul className="py-2">
                                                            {user && (
                                                                <li>
                                                                    <div className="flex items-center space-x-2 p-4">
                                                                        {user.photoURL ? (
                                                                            <Image
                                                                                src={user.photoURL}
                                                                                alt="Profile"
                                                                                className="h-8 w-8 rounded-full"
                                                                            />
                                                                        ) : (
                                                                            <Image
                                                                                src={userPicPlaceholder}
                                                                                alt="Placeholder"
                                                                                className="h-8 w-8 rounded-full bg-gray-300"
                                                                            />
                                                                        )}

                                                                        <div>
                                                                            {user.displayName ? (
                                                                                <p className="text-sm  font-semibold text-black dark:text-white duration-300">
                                                                                    {user.displayName}
                                                                                </p>
                                                                            ) : (
                                                                                <p className="text-sm  font-semibold text-black dark:text-white duration-300">
                                                                                    {user.email}
                                                                                </p>
                                                                            )}
                                                                            <button
                                                                                type="button"
                                                                                onClick={handleLogout}

                                                                                className="text-sm  font-semibold text-red-600 hover:text-red-900"
                                                                            >
                                                                                Logout
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------------2nd section------------------*/}

            <div
                className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
            >
                <div className="w-full py-3 px-1 md:px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="lg:flex flex-grow items-center">
                        <div className='w-full flex justify-between items-center mt-5 lg:mt-0 mb-2 lg:mb-0'>
                            <div>
                                <ul className=" flex flex-col lg:flex-row list-none lg:ml-auto gap-3 xl:gap-5">
                                    <li className="nav-item pl-1 xl:pl-3 py-2 flex items-center text-sm  uppercase font-semibold text-black dark:text-white duration-300 hover:opacity-75">
                                        <p className='bg-'> Category </p>
                                    </li>
                                </ul>
                            </div>

                            <div class="flex items-center justify-center">
                                <Link href="/">
                                    <li className="nav-item pl-1 xl:pl-3 py-2 flex items-center text-sm  uppercase font-semibold text-black dark:text-white duration-300 hover:opacity-75">
                                        Home
                                    </li>
                                </Link>
                                <Link href="/aboutus">
                                    <li className="nav-item pl-1 xl:pl-3 py-2 flex items-center text-sm  uppercase font-semibold text-black dark:text-white duration-300 hover:opacity-75">
                                        About
                                    </li>
                                </Link>
                                <Link href="/blogs">
                                    <li className="nav-item pl-1 xl:pl-3 py-2 flex items-center text-sm  uppercase font-semibold text-black dark:text-white duration-300 hover:opacity-75">
                                        Blogs
                                    </li>
                                </Link>
                                <Link href="/dashboard">
                                    <li className="nav-item pl-1 xl:pl-3 py-2 flex items-center text-sm  uppercase font-semibold text-black dark:text-white duration-300 hover:opacity-75">
                                        Dashboard
                                    </li>
                                </Link>
                            </div>

                            <div >
                                <ul className=" flex lg:items-center justify-center items-end flex-col lg:flex-row list-none lg:ml-auto gap-3 xl:gap-5">

                                    <div className="hidden md:block">
                                        <div className="flex items-center gap-2">
                                            <p className="bg-gray-200 rounded-full p-2"><FiPhoneCall></FiPhoneCall></p>
                                            <div>
                                                <p className="text-black text-md font-bold">+84-1800-4635</p>
                                                <p className="text-xs text-gray-400">24/7 Support Center</p>
                                            </div>
                                        </div>
                                    </div>

                                    <li className='flex items-center gap-3 lg:gap-6'>
                                        {user && (
                                            <a className=" ml-3 xl:ml-0">
                                                <Link href="/cart">
                                                    <Image
                                                        className='w-10 dark:block hidden'
                                                        src={cartIcon} alt="" />
                                                    <Image
                                                        className='w-10 dark:hidden block'
                                                        src={cartIconDark} alt="" />
                                                </Link>
                                            </a>
                                        )}
                                        <div className=''>
                                            {user && (
                                                <div className='relative'>
                                                    <button
                                                        className="text-black dark:text-white duration-300 cursor-pointer text-xl border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
                                                        type="button"
                                                        onClick={() => setDropDownOpen(!dropDownOpen)}
                                                    >
                                                        <summary>
                                                            {user.photoURL ? (
                                                                <Image
                                                                    src={user.photoURL}
                                                                    alt="Profile"
                                                                    className="h-9 w-9 rounded-full"
                                                                />
                                                            ) : (
                                                                <>
                                                                    <Image
                                                                        src={profile}
                                                                        alt="Placeholder"
                                                                        className="h-9 w-9 dark:block hidden"
                                                                    />
                                                                    <Image
                                                                        src={profileDark}
                                                                        alt="Placeholder"
                                                                        className="h-9 w-9 dark:hidden block"
                                                                    />
                                                                </>
                                                            )}

                                                        </summary>
                                                    </button>

                                                    {dropDownOpen && (
                                                        <div className="origin-top-right absolute right-0 mt-2 w-auto pr-10 rounded-md shadow-lg bg-slate-100 dark:bg-black border border-neutral-300 dark:border-gray-800 ring-1 ring-white dark:ring-black ring-opacity-5">
                                                            <ul className="py-2">
                                                                {user && (
                                                                    <li>
                                                                        <div className="flex items-center space-x-2 p-4">
                                                                            {user.photoURL ? (
                                                                                <Image
                                                                                    src={user.photoURL}
                                                                                    alt="Profile"
                                                                                    className="h-8 w-8 rounded-full"
                                                                                />
                                                                            ) : (
                                                                                <Image
                                                                                    src={userPicPlaceholder}
                                                                                    alt="Placeholder"
                                                                                    className="h-8 w-8 rounded-full bg-gray-300"
                                                                                />
                                                                            )}

                                                                            <div>
                                                                                {user.displayName ? (
                                                                                    <p className="text-sm  font-semibold text-black dark:text-white duration-300">
                                                                                        {user.displayName}
                                                                                    </p>
                                                                                ) : (
                                                                                    <p className="text-sm  font-semibold text-black dark:text-white duration-300">
                                                                                        {user.email}
                                                                                    </p>
                                                                                )}
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={handleLogout}

                                                                                    className="text-sm  font-semibold text-red-600 hover:text-red-900"
                                                                                >
                                                                                    Logout
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TestNav;