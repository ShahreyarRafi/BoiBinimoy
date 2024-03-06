"use client";

import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function AdminDashboardHome() {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const {
    data: totalSales = [],
    isPending: totalSalesPending,
    refetch: totalSaleesRefetch,
  } = useQuery({
    queryKey: ["totalSales"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/total-sales`);
      return res.data;
    },
  });

  const {
    data: totalOrders = [],
    isPending: totalOrdersPendig,
    refetch: refetchTotalOrder,
  } = useQuery({
    queryKey: ["totalOrders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/total-orders`);
      return res.data;
    },
  });

  const {
    data: topSellingBooks = [],
    isPending: topSellingBooksPending,
    refetch: refetchTopSellingBooks,
  } = useQuery({
    queryKey: ["topSellingBook"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/top-selling-books`);
      return res.data;
    },
  });

  const {
    data: topBuyingCustomers = [],
    isPending: topBuyingCustomersPending,
    refetch: refetchTopBuyingCustomers,
  } = useQuery({
    queryKey: ["topBuyingCustomers"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/top-buying-customers`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="border p-5 rounded-lg shadow-sm space-y-3">
          <h3 className="uppercase text-xl font-semibold">Total Sales</h3>
          <h2 className="font-bold text-2xl">
            $ {totalSales && totalSales.totalSales ? totalSales.totalSales : 0}
          </h2>
        </div>
        <div className="border p-5 rounded-lg shadow-sm space-y-3">
          <h3 className="uppercase text-xl font-semibold">Total Orders</h3>
          <h2 className="font-bold text-2xl">
            {totalOrders && totalOrders.totalOrders
              ? totalOrders.totalOrders
              : 0}
          </h2>
        </div>
        <div className="border p-5 rounded-lg shadow-sm space-y-3">
          <h3 className="uppercase text-xl font-semibold">Total Customers</h3>
          <h2 className="font-bold text-2xl">100</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="border p-5 rounded-lg shadow-sm space-y-3">
          <h3 className="text-xl font-semibold flex items-center justify-between">
            Top selling Books{" "}
            <span>
              {topSellingBooks && topSellingBooks.topSellingBooks
                ? topSellingBooks.topSellingBooks.length
                : 0}
            </span>
          </h3>
          <div>
            {topSellingBooks &&
              topSellingBooks.topSellingBooks?.map((item) => (
                <li>{item.totalQuantity}</li>
              ))}
          </div>
        </div>
        <div className="border p-5 rounded-lg shadow-sm space-y-3">
          <h3 className="text-xl font-semibold flex justify-between items-center gap-5">
            Top Buying Customers
            <span>
              {topBuyingCustomers && topBuyingCustomers.topBuyingCustomers
                ? topBuyingCustomers.topBuyingCustomers.length
                : 0}
            </span>
          </h3>
        </div>
        <div className="border p-5 rounded-lg shadow-sm space-y-3">
          <h3 className="text-xl font-semibold">Recent Orders</h3>
        </div>
      </div>
    </div>
  );
}
