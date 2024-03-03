import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import useAuth from "../auth/useAuth";
import useAxiosPublic from "../Axios/useAxiosPublic";

const useGetMyCarts = () => {
  console.log("cart api calling ");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const axiosPublic = useAxiosPublic();
  const {
    data: cartsData = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["myCarts"],
    queryFn: async () => {
      // const email = await user?.email;
      const res = await axiosSecure.get(`api/v1/my-carts/${user?.email}`);
      return res?.data;
    },
  });

  const myCarts = cartsData?.carts;
  const price = cartsData?.totalPrice;
  const quantity = cartsData?.quantity;

  // let quantity = 0;
  // let price = 0;
  // if (myCarts.length) {
  //   myCarts?.map((cart) => {
  //     quantity += cart?.quantity;
  //     price += cart?.price;
  //   });
  // }

  return { myCarts, price, quantity, isPending, refetch };
};

export default useGetMyCarts;
