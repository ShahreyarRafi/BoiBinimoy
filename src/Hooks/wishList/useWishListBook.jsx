"use client";

import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../Axios/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";

const useWishListBook = () => {
    const { user } = useContext(AuthContext);
  console.log(" user ", user?.email);

//   const axiosSecure = useAxiosSecure();

  const fetchData = async () => {
    if (user && user.email) {
      const res = await axios.get(`https://boi-binimoy-server.vercel.app/api/v1/wishlist/${user?.email}`);
      return res.data;
    } else {
      return []; 
    }
  };

  const { data: wishListBook = [], refetch, isLoading, } = useQuery({
    queryKey: ["wishListBook"],
    queryFn: fetchData,
    enabled: !!user && !!user?.email, 
  });

  return [wishListBook, refetch, isLoading];
};

export default useWishListBook;