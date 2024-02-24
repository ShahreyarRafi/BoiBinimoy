"use client"

import WriterDetails from "@/components/Home/Writer/WriterDetails/WriterDetails";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const page = () => {

    return (
        <div>
            <Navbar></Navbar>
            <WriterDetails></WriterDetails>
            <Footer></Footer>
        </div>
    );
};

export default page;