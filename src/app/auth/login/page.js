"use client"

import { Checkbox } from "@material-tailwind/react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { Lato } from "next/font/google";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { IoLogoGoogle } from "react-icons/io5";
// import { FaGithub, FaFacebook } from "react-icons/fa";

import { useContext, useState } from "react";
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "@/AuthProvider/AuthProvider";
// import SocialLogin from "../socialLogin/page";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import SocialLogin from "../socialLogin/page";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/ui/Footer";
// import Link from "next/link";




const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});




const LoginPage = () => {

  const { signin } = useContext(AuthContext);
  const [activePage, setActivePage] = useState('login');
  const [showPassword, setShowPassWord] = useState(false)
  // const [showPassword, setShowPassWord] = useState(false)
  const router = useRouter()

  const handleLoginUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);



    //  User Lggin

    signin(email, password)
      .then(res => {
        console.log(res);

        if (res.user) {

          toast.success('User logged in successfully');
          setTimeout(() => {
            // router(location?.state ? location.state : '/')
            router("/")
          }, 1000);
        }

      }).catch(error => {
        console.error(error);
        toast.error('Cheack your Email or password', error);
      })

  }

  return (
    <div className={lato.className}>
      <Navbar></Navbar>
      <div className="min-h-screen flex flex-col justify-center items-center" >
        <div className="max-w-5xl mx-auto my-16 rounded-lg">
          <div className="flex justify-between items-center rounded-lg gap-2 h-[700px] bg-slate-50 shadow-xl">
            <div className="flex-1 h-[500px] w-[800px]">
              <div className={lora.className}>
                <h2 className="mb-10 text-2xl md:text-3xl lg:text-4xl text-center font-bold">
                  Sign In
                </h2>
              </div>

              <div className="flex gap-1 bg-[#f1f0f3] p-[0.20rem] rounded-lg w-[24rem] mx-auto">
                <button
                  onClick={() => {
                    setActivePage('login');
                    router.push('/auth/login');
                  }}
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none font-bold text-center ${activePage === 'login' ? 'bg-orange-500 text-white' : 'text-gray-700'
                    }`}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setActivePage('register');
                    router.push('/auth/register');
                  }}
                  className={`w-full px-3 py-2  rounded-lg focus:outline-none font-bold text-center ${activePage === 'register' ? 'bg-orange-500 text-white' : 'text-gray-700'
                    }`}
                >
                  Register
                </button>
              </div>
              
              <form onSubmit={handleLoginUser} className="mt-8 mb-2  w-[24rem] mx-auto">
                <div className="mb-1 flex flex-col gap-6">
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="w-full h-12 pl-2 pr-8 border-2 border-gray-300 rounded-lg focus:outline-none bg-transparent"
                  />
                  <div className="relative">
                    <input
                      placeholder="Password"
                      name="password"
                      required
                      type={showPassword ? "text" : "password"}
                      className=" w-full h-12 pl-2 pr-8 border-2 border-gray-300 rounded-lg focus:outline-none bg-transparent"
                    />
                    <span className="absolute right-5 top-3 cursor-pointer text-green-700 z-10" onClick={() => setShowPassWord(!showPassword)}>
                      {showPassword ? (
                        <AiFillEye className='text-xl text-gray-600' />
                      ) : (
                        <AiFillEyeInvisible className='text-xl text-gray-600' />
                      )}
                    </span>
                  </div>
                </div>

                <span className="flex justify-start items-center text-sm my-3 -ml-3">
                  <Checkbox /> I agree the{" "}
                  <span className="font-bold hover:underline">
                    Terms and Conditions
                  </span>
                </span>

                <button
                  type="submit"
                  className="w-full py-2 border-2 border-orange-500 rounded-lg focus:outline-none bg-orange-500 font-bold text-white"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-5">
                <SocialLogin></SocialLogin>
              </div>
            </div>
            <div>
              <Image
                width={500}
                height={500}
                alt="image"
                className="flex-1 h-[700px] w-full object-cover rounded-r-lg hidden md:block"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </div>
  )
};

export default LoginPage;