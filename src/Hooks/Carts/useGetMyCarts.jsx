import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import useAuth from "../auth/useAuth";

const useGetMyCarts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: cartsData = [], isLoading, refetch, } = useQuery({
    queryKey: ["cartsData", "cartBooks"],
    queryFn: async () => {
      const email = await user?.email;
      if (email) {
        const res = await axiosSecure.get(`api/v1/my-carts/${email}`);
        console.log(res?.data);
        return res?.data;
      }
    },
  });

  const myCarts = cartsData?.myCarts;
  const price = cartsData?.totalPrice;
  let quantity = cartsData?.quantity;
 

  return { myCarts , price, quantity, isLoading, refetch };
};

export default useGetMyCarts;
