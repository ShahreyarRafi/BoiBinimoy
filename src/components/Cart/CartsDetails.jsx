"use client";
import useGetOneBuyBook from "@/Hooks/buyBooks/useGetOneBuyBook";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import PageLoading from "../Shared/loadingPageBook/PageLoading";
import { useState } from "react";
import Swal from "sweetalert2";
import { axiosSecure } from "@/Hooks/Axios/useAxiosSecure";

const CartsDetails = ({ cart, refetch }) => {
  const { book, bookLoading, bookRefetch } = useGetOneBuyBook(cart.book_id);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(cart?.quantity || 1);
  const [lastFetchedBookId, setLastFetchedBookId] = useState(null);

  if (bookLoading) {
    return <PageLoading />;
  }

  if (lastFetchedBookId !== cart.book_id) {
    // The book_id has changed, set a loading state
    setLastFetchedBookId(cart.book_id);
    return <PageLoading />;
  }

  console.log(  'cartId: ', cart.book_id, ' book: ', book );

  const handleIncrement = async (id) => {
    if (quantity < book?.stock_limit) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      const price = quantity*book?.price;
      const res = await axiosSecure.patch(`/api/v1/carts/${id}`, {quantity, price});
      console.log(res.data);
      if(res.data){
        bookRefetch();
        refetch();
      }
    } else {
      setError(`Opps this book limit is ${book?.stock_limit}`);
    }
  };

  console.log(quantity);
  const handleDecrement = async (id) => {
    if (quantity > 1) {
      setError("");
      setQuantity((prevQuantity) => prevQuantity - 1);
      const price = quantity*book?.price;
      const res = await axiosSecure.patch(`/api/v1/carts/${id}`, {quantity, price});
      console.log(res.data);
      if(res.data){
        bookRefetch();
        refetch();
      }
      
    }
  };


//   delete a cart
const handleDeleteCart = (id, title) => {
    console.log("id: ", id);

    Swal.fire({
      title: `Delete Book`,
      text: `Are you sure you want to delete the book "${title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/api/v1/delete-cart/${id}`)
          .then((response) => {
            console.log(response.data);
            if (response.data) {
              Swal.fire(
                "Deleted!",
                `Your book "${title}" has been deleted.`,
                "success"
              );
              bookRefetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting Book:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the book.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      <div className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100">
        <div className="grid grid-cols-6 items-center text-center font-semibold border border-gray-100 p-5">
          <Image
            src={book?.cover_image}
            width={150}
            height={200}
            alt="book"
            priority
            style={{ width: "50%", height: "100%" }}
            className="mx-auto"
          />
          <h5>{book?.title}</h5>
          <h5>{book?.price} BDT</h5>
          <h5>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDecrement(cart._id)}
                className="bg-base-300 p-3"
              >
                <FaMinus className="mx-auto"></FaMinus>
              </button>
              <h3>{quantity}</h3>
              <button
                onClick={() => handleIncrement(cart._id)}
                className="bg-base-300 p-3"
              >
                <FaPlus className="mx-auto"></FaPlus>
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </h5>
          <h5>{quantity * book.price} BDT</h5>
          <div>
            <button
              onClick={() => handleDeleteCart(cart?._id, book?.title)}
              className=" bg-red-500 rounded-full text-white p-3"
            >
              <RxCross2 className="mx-auto"></RxCross2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartsDetails;
