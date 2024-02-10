"use client"

import BuyBookDetails from '@/components/BuyBook/BuyBookDetails/BuyBookDetails';
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar />
            <BuyBookDetails />
            <Footer />
        </div>
    );
};

export default page;