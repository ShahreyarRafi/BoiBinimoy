"use client"

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

const useAllUser = () => {
    const axiosSecure = useAxiosSecure()
    
    const { data: allUser = [] } = useQuery({
        queryKey: ["allUser"],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/v1/users")
            return res.data
        }
    })
    return [allUser]
};


export default useAllUser;