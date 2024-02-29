"use client"

import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import BookCard from "../../Shared/BookCard";
import { AuthContext } from "@/providers/AuthProvider";
import PageLoading from "@/components/Shared/loadingPageBook/PageLoading";

const CategoryByName = () => {

    const { user } = useContext(AuthContext);
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

    useEffect(() => {
        if (user) {
            const formattedCategoryName = decodeURIComponent(param?.categoryName).replace("%20", " ");
            console.log("category:", formattedCategoryName);
        }
    }, [user, param?.categoryName]);

    if (loading) {
        return <div className='bg-50-50'><PageLoading /></div>;
    }


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
