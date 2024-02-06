import axios from "axios";
import useAuth from "./auth/useAuth";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      console.log("asking or checking is admin", user);
      const res = await axios.get(
        `https://boi-binimoy-server.vercel.app/api/v1/users/${user.email}`
      );
      console.log("hello", res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
