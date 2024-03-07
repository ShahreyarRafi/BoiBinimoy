"use client";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function TopBuyingCustomerCard({ item }) {
  
  const { _id, totalPurchaseAmount } = item;

  const {
    data: topBuyingCustomer = [],
    isPending: topBuyingCustomerPending,
    refetch: topBuyingCustomerRefetch,
  } = useQuery({
    queryKey: ["topBuyingCustomer1"],
    queryFn: async () => {
      const res = await useAxiosPublic.get(`/api/v1/users/${_id}`);
      return res.data;
    },
  });



  console.log("topBuyingCustomer", topBuyingCustomer.topBuyingCustomers);
  return (
    <div>
      <p>{totalPurchaseAmount}</p>
    </div>
  );
}
