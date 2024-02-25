"use client"


import AllExchangeBooks from '@/components/Exchange/ExchangeAllBooks/AllExchangeBooks';
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import SectionTitle from '@/components/Shared/SectionTitle/SectionTitle';

const page = () => {
    return (
        <div>
            <Navbar />
            <SectionTitle heading={"Exchange Books"}></SectionTitle>
            <AllExchangeBooks />
            <Footer />
        </div>
    );
};

export default page;





