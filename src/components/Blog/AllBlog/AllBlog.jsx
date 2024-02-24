"use client"

import useAxiosPublic from '@/Hooks/Axios/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import AllBlogCard from "../../Shared/Blogs/AllBlogCard";

const AllBlog = () => {

    const axiosPublic = useAxiosPublic();

    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/blogs`);
            return res.data;
        },
    });

    return (
        <div className="min-h-screen container mx-auto px-3">
            <div className="py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {blogs?.map(blog => <AllBlogCard key={blog?._id} item={blog}></AllBlogCard>)}
                </div>
            </div>
        </div>
    );
};

export default AllBlog;