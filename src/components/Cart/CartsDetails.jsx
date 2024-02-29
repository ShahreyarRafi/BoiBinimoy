import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import PageLoading from "../Shared/loadingPageBook/PageLoading";
import { useState } from "react";
import Swal from "sweetalert2";
import { axiosSecure } from "@/Hooks/Axios/useAxiosSecure";

const CartsDetails = ({ cart, refetch }) => {
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(cart?.cart?.quantity);
  const [lastFetchedBookId, setLastFetchedBookId] = useState(null);

  console.log(cart?.cart.quantity);

  if (lastFetchedBookId !== cart.book_id) {
    setLastFetchedBookId(cart.book_id);
    return <PageLoading />;
  }

  const handleIncrement = async (id) => {
    if (quantity < cart?.book?.stock_limit) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      const price = quantity * cart?.book?.price;
      const res = await axiosSecure.patch(`/api/v1/carts/${id}`, { quantity, price });
      console.log(res?.data);
      if (res?.data) {
        refetch();
      }
    } else {
      setError(`Opps this book limit is ${cart?.book?.stock_limit}`);
    }
  };

  const handleDecrement = async (id) => {
    if (quantity > 1) {
      setError("");
      setQuantity((prevQuantity) => prevQuantity - 1);
      const price = quantity * cart?.book?.price;
      const res = await axiosSecure.patch(`/api/v1/carts/${id}`, { quantity, price });
      console.log(res.data);
      if (res.data) {
        refetch();
      }
    }
  };

  const handleDeleteCart = (id, title) => {
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
        axiosSecure.delete(`/api/v1/delete-cart/${id}`).then((response) => {
          console.log(response.data);
          if (response.data) {
            Swal.fire("Deleted!", `Your book "${title}" has been deleted.`, "success");
            refetch();
          }
        });
      } else {
        setError(`Opps this book limit is ${cart?.book?.stock_limit}`);
      }
    });
  };

  return (
    <div>
      <div className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100">
        <div className="grid grid-cols-6 items-center text-center font-semibold border border-gray-100 p-5">
          <Image
            src={cart?.book?.cover_image}
            width={150}
            height={200}
            alt="book"
            priority
            style={{ width: "50%", height: "100%" }}
            className="mx-auto"
          />
          <h5>{cart?.book?.title}</h5>
          <h5>{cart?.book?.price} BDT</h5>
          <h5>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDecrement(cart?.cart._id)}
                className="bg-base-300 p-3"
              >
                <FaMinus className="mx-auto"></FaMinus>
              </button>
              <h3>{cart?.cart?.quantity}</h3>
              <button
                onClick={() => handleIncrement(cart?.cart._id)}
                className="bg-base-300 p-3"
              >
                <FaPlus className="mx-auto"></FaPlus>
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </h5>
          <h5>{cart?.cart?.price} BDT</h5>
          <div>
            <button
              onClick={() => handleDeleteCart(cart?.cart?._id, cart?.book?.title)}
              className=" bg-red-500 rounded-full text-white p-3"
            >
              <RxCross2 className="mx-auto"></RxCross2>
            </button>
            <h3>{quantity}</h3>
            <button onClick={() => handleIncrement(cart?.cart._id)} className="bg-base-300 p-3">
              <FaPlus className="mx-auto"></FaPlus>
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <h5>{quantity * cart?.book.price} BDT</h5>
          <div>
            <button
              onClick={() => handleDeleteCart(cart?.cart?._id, cart?.book?.title)}
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
