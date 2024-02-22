import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import useAuth from "../auth/useAuth";

const useMyOrders = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: myOrdersData, isPending, refetch } = useQuery({
        queryKey: ["myOrders"],
        queryFn: async() => {
            const email = await user?.email;
            if(email){
                const res  = await axiosSecure.get(`/api/v1/my-orders/${email}`);
                return res.data
            }
        }
    });
   
    const myOrders = myOrdersData?.orders || [];
    const carts = myOrdersData?.allCarts || [];

    return { myOrders, carts, isPending, refetch};
};

export default useMyOrders;