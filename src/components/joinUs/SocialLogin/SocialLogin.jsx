"use client";

import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const handleSocialLogin = (user) => {
    user().then((res) => {
      console.log(res.user);
      if (res.user) {
        toast.success("User logged in successfully", {
          position: "top-center",
        })
      };

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL
      }

      axiosPublic.post("/users", userInfo)
        .then(res => {
          console.log(res.data);
            router.push("/");
        })

    }).catch(error => {
      Swal.fire(error.message);
    });
  };

  return (
    <>
      <div className="divider text-center font-semibold mb-3">
        Or Continue With
      </div>
      <div className=" flex-col flex items-center justify-center px-10">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="border-2 border-black rounded-full py-2 w-full flex items-center justify-center font-bold gap-1"
        >
          <span className=" text-xl">
            <FcGoogle></FcGoogle>
          </span>
          <span className="text-fuchsia-600 font-semibold ">
            Login With Google
          </span>
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default SocialLogin;
