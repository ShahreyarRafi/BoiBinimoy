import ExchangeBookDetails from '@/components/ExchangeBookDetails/ExchangeBookDetails';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ExchangeBookDetails></ExchangeBookDetails>
            <Footer></Footer>
        </div>
    );
};

export default page;