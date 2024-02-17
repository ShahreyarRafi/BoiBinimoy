"use client";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Publisher() {
  const { data: publishers = [], isLoading } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await useAxiosPublic.get(`/api/v1/publishers`);
      return res.data;
    },
  });
  return <div className="container mx-auto my-10 bg-white p-4"></div>;
}
