"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const useOneUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: currentUser = [], isPending: isLoading } = useQuery({
    queryKey: ["currentUser", user?.email],
    queryFn: async () => {
      const email = await user.email;
      const res = await axiosPublic.get(`api/v1/users/${email}`);
      return res.data;
    },
  });

  const { isAdmin, isModerator, isPublisher, isSeller } = currentUser;
  return {
    currentUser,
    isLoading,
    isAdmin,
    isModerator,
    isPublisher,
    isSeller,
  };
};

export default useOneUser;

// update this
