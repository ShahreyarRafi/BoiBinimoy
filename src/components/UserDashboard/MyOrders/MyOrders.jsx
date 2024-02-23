"use client";
import MyOrder from "./MyOrder";
import useMyOrders from "@/Hooks/Orders/useMyOrders";
import PageLoading from "@/components/Shared/loadingPageBook/PageLoading";

const MyOrders = () => {
  const { myOrders, carts, isPending, refetch } = useMyOrders();

  if (isPending) {
    return <PageLoading />;
  }

  console.log("my orders", myOrders);
  return (
    <div className="container duration-300">
      <div className="w-full rounded-2xl overflow-hidden lg:shadow-lg my-5 duration-300">
        <div className="bg-[#016961] duration-300 text-white ">
          <div className="grid grid-cols-8 items-center justify-between font-semibold border border-gray-100 px-10 py-5">
            <h5 className="text-center text-xs md:text-base">Book</h5>
            <h5 className="text-center text-xs md:text-base">Name</h5>
            <h5 className="text-center text-xs md:text-base">Quantity</h5>
            <h5 className="text-center text-xs md:text-base">Unit Price</h5>
            <h5 className="text-center text-xs md:text-base">total Price</h5>
            <h5 className="text-center text-xs md:text-base">Seller Email</h5>
            <h5 className="text-center text-xs md:text-base">Status</h5>
          </div>
        </div>
        <div className="flex-1 sm:flex-none grid grid-cols-1 gap-5 lg:gap-0">
          <div className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100">
            {carts?.map((cart) => (
              <MyOrder key={cart._id} cart={cart}></MyOrder>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
