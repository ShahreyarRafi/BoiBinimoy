"use client"

import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Writer = () => {

    const axiosPublish = useAxiosPublic();
    const [searchQuery, setSearchQuery] = useState("");

    const { data: allWriters = [], isLoading } = useQuery({
        queryKey: ["writers"],
        queryFn: async () => {
            const res = await axiosPublish.get(`/api/v1/writers`);
            return res.data;
        },
    });

    console.log(allWriters);

    return (
        <div>

        </div>
    );
};

export default Writer;