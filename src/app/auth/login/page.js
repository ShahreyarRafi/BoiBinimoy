"use client"

import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "@/AuthProvider/AuthProvider";
import SocialLogin from "../socialLogin/page";
import { useRouter } from 'next/navigation';
import Link from "next/link";


const LoginPage = () => {

    const { signin } = useContext(AuthContext);
    const [showPassword, setShowPassWord] = useState(false)
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

        <div className=" relative md:w-[28rem] mx-auto p-2  rounded-lg shadow-2xl mt-1 h-full  ">
            <h1 className="text-3xl text-center text-pink-600 font-bold  mt-4 "> Login Now  </h1>
            <form onSubmit={handleLoginUser}>
                
                <div className="mb-4  ">
                    <label className="block  text-md font-semibold mb-2 " htmlFor=""> Your Email </label>
                    <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Your Email" name="email" required />
                </div>

                <div className="mb-4 ">
                    <label className="block  text-md font-semibold mb-2 " htmlFor=""> Password </label>
                    <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 "
                        type={showPassword ? "text" : "password"}
                        placeholder="Password" name="password" required />
                    <span onClick={() => setShowPassWord(!showPassword)} className="absolute left-96 mt-3  text-green-700 ">
                        {
                            showPassword ? <AiFillEye className='text-xl text-white'></AiFillEye> : <AiFillEyeInvisible className='text-xl text-white '></AiFillEyeInvisible>
                        }

                    </span>
                </div>
                <label className="label ">
                    <a href="#" className="label-text-alt link link-hover text-base ">Forgot password?</a>
                </label>

                <div className=" w-32 py-1.5 rounded-md justify-center mx-auto text-center bg-fuchsia-600 hover:bg-fuchsia-800 ">
                    <button type="submit" className=" w-28 font-bold "> Login Now  </button>
                </div>
                <div className=' flex justify-between items-center  mt-6 px-6 '>
                    <label className="label">
                        <h1 className="label-text-alt link link-hover text-[16px] text-pink-600 ">Please Your  </h1>
                    </label>
                    <Link href='/auth/register' className="label-text-alt link link-hover text-[16px] text-pink-600">
                        Create A Account
                    </Link>

                </div>
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>

    )
};

export default LoginPage;