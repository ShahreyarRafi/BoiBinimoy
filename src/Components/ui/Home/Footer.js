"use client"

import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <div className='mt-10 max-w-7xl mx-auto'>
                <footer className="footer p-10 text-base-content">
                    <aside>
                        <div className='flex md:flex-col items-center gap-2'>
                            <Image
                                src="https://i.ibb.co/PxBs9dH/Boi-Binimoy-Transparent-Big.png" alt="card" priority width={500} height={500} style={{
                                    width: '50px',
                                    height: '100%',
                                }} />
                            <h3 className='text-2xl font-bold'>Boi Binimoy</h3>
                        </div>
                        <p className='text-xs lg:text-base mt-3 text-gray-400'>Got Question ? Call us 24/7!</p>
                        <p className='md:text-lg lg:text-3xl font-semibold text-[#f65d4e]'>+84-1800-4635</p>
                        <div className='flex gap-5 mt-2'>
                            <a><FaFacebook className='text-xl'></FaFacebook></a>
                            <a><FaXTwitter className='text-xl'></FaXTwitter></a>
                            <a><FaYoutube className='text-xl'></FaYoutube></a>
                        </div>
                    </aside>
                    <nav className='border-l-2 border-gray-400 pl-5'>
                        <header className="footer-title">Contact Info</header>
                        <div className='mb-3'>
                            <p>1418 River Drive, Suite 35</p>
                            <p>Cottonhall, CA 9622</p>
                        </div>

                        <div>
                            <p>Monday-Friday 9:00-20:00</p>
                            <p>Saturday: 11:00-15:00</p>
                        </div>
                        <h3 className='text-lg mt-3 font-medium'>Boi-binimoy@gmail.com</h3>
                    </nav>
                    <nav>
                        <header className="footer-title">Explore</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Sitemap</a>
                        <a className="link link-hover">Bookmark</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Our Service</header>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Returns</a>
                        <a className="link link-hover">Contact Us</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Categories</header>
                        <a className="link link-hover">Action</a>
                        <a className="link link-hover">Comedy</a>
                        <a className="link link-hover">Drama</a>
                        <a className="link link-hover">Horror</a>
                        <a className="link link-hover">Kids</a>
                    </nav>
                </footer>
            </div>
            <p className='text-xs lg:text-base p-4 bg-base-300 text-center'>Copyright © 2024 - All right reserved by <span className='text-[#f65d4e]'>Boi Binimoy</span></p>
        </div>
    );
};

export default Footer;