"use client"

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const useSpecificUserBook = () => {

    const { user } = useContext(AuthContext)
    console.log(" user ", user?.email);

    const axiosSecure = useAxiosSecure()

    const { data: specificBooks = [], refetch, isLoading } = useQuery({
        queryKey: ["specificBooks"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/buy-books-individual/${user?.email}`)
            return res.data;
        }
    })
    return [specificBooks, refetch, isLoading]
    
};




export default useSpecificUserBook;