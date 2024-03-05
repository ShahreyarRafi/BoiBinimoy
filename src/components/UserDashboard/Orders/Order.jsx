"use client";

import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import Image from "next/image";
import Swal from "sweetalert2";

const Order = ({order}) => {
  const {cart, book } = order;
  const axiosSecure = useAxiosSecure();

  console.log(order);

  const handleDelivary = async(id, title) =>{  
    Swal.fire({
      title: `Delivery Book`,
      text: `Are you sure is delivered the book "${title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delivered!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/api/v1/seller-orders/${id}`)
          .then((response) => {
            if (response.data) {
              Swal.fire(
                "Deleted!",
                `Your book "${title}" has been delivered.`,
                "success"
              );

              refetch();
            }
          })
          .catch((error) => {
            console.error("Error delivery Book:", error);
            Swal.fire(
              "Error!",
              "An error occurred while delivery the book.",
              "error"
            );
          });
      }
    });
  } 

  

  return (
    <div className="grid grid-cols-11 items-center text-center font-semibold border border-gray-100 p-5">
      <img
            src={book?.cover_image}
            width={150}
            height={200}
            alt="book"
            priority
            style={{ width: "50%", height: "100%" }}
            className="mx-auto col-span-1"
          />
      <h5 className=" col-span-2">{book?.title}</h5>
      <h5 className=" col-span-1"> {cart?.quantity} </h5>
      <h5 className=" col-span-1"> {book?.price} BDT</h5>
      <h5 className=" col-span-1"> {cart?.price} BDT</h5>
      <h5 className=" col-span-1"> {cart?.user_name}</h5>
      <h5 className=" col-span-3"> {cart?.user_email}</h5>
      <h5 className=" col-span-1">
        <button className="btn btn-sm">Pending</button>
      </h5>
    </div>
  );
};

export default Order;
