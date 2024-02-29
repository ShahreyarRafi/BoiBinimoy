

// import Cart from '@/components/Cart/Cart';
import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import SectionTitle from '@/components/Shared/SectionTitle/SectionTitle';

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SectionTitle heading={"Cart"}></SectionTitle>
            {/* <Cart></Cart> */}
            <Footer></Footer>
        </div>

    );
};

export default page;