"use client"

import BookDetails from '@/components/BookDetails/BookDetails';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar />
            <BookDetails />
            <Footer />
        </div>
    );
};

export default page;