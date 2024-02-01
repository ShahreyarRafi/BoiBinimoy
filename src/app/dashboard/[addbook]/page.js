"use client"

import AddBook from '@/components/AddBook/AddBook';

const page = ({ params }) => {
    console.log(params);
    return (
        <div className="">
            <AddBook></AddBook>
        </div>
    );
};

export default page;