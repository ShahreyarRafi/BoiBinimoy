import ExchangeAllBooks from '@/components/Exchnage/ExchangeAllBooks/ExchangeAllBooks';
import ExchangeAllBooksBanner from '@/components/Exchnage/ExchangeAllBooksBanner/ExchangeAllBooksBanner';
import Footer from '@/components/Shared/Footer/Footer';
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