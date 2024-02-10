"use client"

import AllBlog from '@/components/Blog/AllBlog/AllBlog';
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AllBlog></AllBlog>
            <Footer></Footer>
        </div>
    );
};

export default page;