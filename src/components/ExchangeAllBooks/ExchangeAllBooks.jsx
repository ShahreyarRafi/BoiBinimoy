"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ExchangeAllCards from "../Shared/ExchangeAllCards";

const ExchangeAllBooks = () => {

    const [books, setBooks] = useState([]);
    const [fetchData, setFetchData] = useState(true);

    useEffect(() => {
        if (fetchData) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        "https://boi-binimoy-server.vercel.app/api/v1/exchangableBooks"
                    );
                    setBooks(response.data);
                } catch (error) {
                    console.error("Error:", error);
                }
            };

            fetchData();
        }

        return () => { };
    }, [fetchData]);

    return (
        <div className="min-h-screen container mx-auto px-3">
            <div className="py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
                    {books?.map((book) => (
                        <ExchangeAllCards key={book?._id} item={book}></ExchangeAllCards>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExchangeAllBooks;