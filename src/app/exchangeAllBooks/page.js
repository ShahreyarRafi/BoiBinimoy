"use client"

import ExchangeAllBooks from '@/components/Exchange/ExchangeAllBooks/ExchangeAllBooks';
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import SectionTitle from '@/components/Shared/SectionTitle/SectionTitle';

const page = () => {
    return (
        <div>
            <Navbar />
            <SectionTitle heading={"Exchange Books"}></SectionTitle>
            <ExchangeAllBooks />
            <Footer />
        </div>
    );
};

export default page;