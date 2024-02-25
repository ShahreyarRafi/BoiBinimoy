"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookCard from "../../Shared/BookCard";

const CategoryByName = () => {

    const param = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://boi-binimoy-server.vercel.app/api/v1/category/${param?.categoryName}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setBooks(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [param?.categoryName]);

    return (
        <div className="min-h-screen container mx-auto px-3">
            <div className="py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
                    {books?.map((book) => (
                        <BookCard key={book?._id} item={book}></BookCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryByName;