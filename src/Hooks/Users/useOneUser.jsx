"use client"

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";
import useAuth from "../auth/useAuth";

const useOneUser = () => {    
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
   

    const { data: currentUser = [] , isPending: isLoading} = useQuery({
        queryKey: ["currentUser", user?.email],
        queryFn: async () => {
            const email = await user.email
            const res = await axiosPublic.get(`api/v1/users/${email}`)
            return res.data
        }
    })

    const { isAdmin, isModerator, isPublisher, isSeller } = currentUser;
    const interest = currentUser.interest
    return {currentUser, isLoading, isAdmin, isModerator, isPublisher, isSeller, interest }
};


export default useOneUser;

// update this