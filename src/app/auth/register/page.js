"use client"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from '@/AuthProvider/AuthProvider';
import SocialLogin from '../socialLogin/page';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Register = () => {

    const [showPassword, setShowPassWord] = useState(false)
    const auth = useContext(AuthContext)
    const router = useRouter();


    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name);

        const userInfo = {
            name,
            email,

        }

        console.log(userInfo);

        auth.createUser(email, password)
            .then(res => {
                console.log(res);
                toast.success('create account ')

                setTimeout(() => {
                    router.push('/');
                }, 1000);

            })

            .catch(error => {
                console.error(error);
                toast.error('please cheack your email or password ')
            })

    }

    return (
        <div className=" relative md:w-[28rem]  mx-auto p-2  rounded-lg shadow-2xl mt-1 h-full  ">
            <h1 className="text-3xl text-center text-pink-600 font-bold  mt-4 "> Register Now  </h1>
            <form onSubmit={handleRegister}>
                <div className="mb-4 mt-10 ">
                    <label className="block  text-md font-semibold mb-2 " htmlFor=""> Your Name </label>
                    <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Your Name" name="name" required />
                </div>
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
                    <button type="submit" className=" w-28 font-bold "> Register Now  </button>
                </div>
                <div className=' flex justify-between items-center  mt-6 px-6 '>
                    <label className="label">
                        <h1 className="label-text-alt link link-hover text-[16px] text-pink-600 ">Please Your  </h1>
                    </label>
                    <label className="label">
                        <Link href='/auth/login' className="label-text-alt link link-hover text-[16px] text-pink-600">
                            Login Account
                        </Link>
                    </label>
                </div>
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;