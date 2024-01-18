"use client";
import { Checkbox } from "@material-tailwind/react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { Lato } from "next/font/google";
import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub, FaFacebook } from "react-icons/fa";

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

const signup = () => {
  return (
    <div className={lato.className}>
      <div className="max-w-3xl mx-auto my-16 rounded-lg">
        <div className="flex justify-between items-center rounded-lg gap-2 shadow-xl">
          <div className="flex-1 px-8">
            <div className={lora.className}>
              <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl text-center font-bold">
                Sign Up
              </h2>
            </div>

            <form className="mt-8 mb-2">
              <div className="mb-1 flex flex-col gap-6">
                <input
                  placeholder="Name"
                  name="name"
                  type="text"
                  className="w-full h-12 pl-2 pr-8 border-2 border-gray-300 rounded-lg focus:outline-none bg-transparent"
                />
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  className="w-full h-12 pl-2 pr-8 border-2 border-gray-300 rounded-lg focus:outline-none bg-transparent"
                />
                <input
                  placeholder="Password"
                  name="Password"
                  type="password"
                  className="w-full h-12 pl-2 pr-8 border-2 border-gray-300 rounded-lg focus:outline-none bg-transparent"
                />
              </div>

              <span className="flex justify-center items-center text-sm my-3">
                <Checkbox />I agree the{" "}
                <span className="font-bold hover:underline">
                  Terms and Conditions
                </span>
              </span>

              <button
                type="input"
                className="w-full h-12 pl-2 pr-8 border-2 border-orange-500 rounded-lg focus:outline-none bg-orange-500 font-bold text-white"
              >
                SugnUp
              </button>
            </form>

            <div className="flex justify-center">
              <span className="text-xs">
                Already have an account? Please{" "}
                <a href="#" className="font-bold hover:underline">
                  Sign In
                </a>
              </span>
            </div>

            <div className="flex justify-center items-center gap-3 my-4">
              <span className="border-2 border-black rounded-full p-1">
                <IoLogoGoogle className="w-7 h-7" />
              </span>
              <span className="border-2 border-black rounded-full p-1">
                <FaGithub className="w-7 h-7" />
              </span>
              <span className="border-2 border-black rounded-full p-1">
                <FaFacebook className="w-7 h-7" />
              </span>
            </div>
          </div>

          <div>
            <Image
              width={500}
              height={500}
              alt="image"
              className="flex-1 h-[500px] w-full object-cover rounded-r-lg hidden md:block"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
