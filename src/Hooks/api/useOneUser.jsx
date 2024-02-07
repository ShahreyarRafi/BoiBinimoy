"use client"

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const useOneUser = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    console.log(user?.email);

    const { data: currentUser = [] } = useQuery({
        queryKey: ["currentUser", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`api/v1/users/${user?.email}`)
            return res.data
        }
    })
    return [currentUser]
};


export default useOneUser;