import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";



const useGetOneBuyBook = ( id ) => {
    
    const axiosPublic = useAxiosPublic();

    const { data: getOneBuyBook, isPending: isLoading, refetch } = useQuery({
        queryKey: ['getOneBuyBook'] ,
        queryFn: async() => {
            const res = await axiosPublic.get(`/api/v1/buy-books/${id}`);
            return res?.data;
        }
    })
    return { getOneBuyBook, refetch, isLoading };
};

export default useGetOneBuyBook;
