"use client"

import CategoryByName from '@/components/Categories/CategoryByName/CategoryByName';
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CategoryByName></CategoryByName>
            <Footer></Footer>
        </div>
    );
};

export default page;