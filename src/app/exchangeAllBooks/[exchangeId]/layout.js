"use client"

import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;