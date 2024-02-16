"use client"

import Cart from '@/components/Cart/Cart';
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar />
            <Cart />
            <Footer />
        </div>

    );
};

export default page;