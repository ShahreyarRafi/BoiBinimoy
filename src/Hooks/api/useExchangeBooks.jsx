"use client"

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const useExchangeBooks = () => {

    const { user } = useContext(AuthContext)
    console.log(" user ", user?.email);

    const axiosSecure = useAxiosSecure()

    const { data: exchangeBooks = [], refetch, isLoading } = useQuery({
        queryKey: ["exchangeBooks"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/exchange-books-individual/${user?.email}`)
            return res.data;
        }
    })
    return [exchangeBooks, refetch, isLoading]
    
};




export default useExchangeBooks;