import ExchangeAllBooks from '@/components/ExchangeAllBooks/ExchangeAllBooks';
import ExchangeAllBooksBanner from '@/components/ExchangeAllBooks/ExchangeAllBooksBanner/ExchangeAllBooksBanner';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';

const page = () => {
    return (
        <div>
            <Navbar />
            <ExchangeAllBooksBanner />
            <ExchangeAllBooks />
            <Footer />
        </div>
    );
};

export default page;