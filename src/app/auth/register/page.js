"use client"


import { Checkbox } from "@material-tailwind/react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { Lato } from "next/font/google";
import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub, FaFacebook } from "react-icons/fa";




// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from '@/AuthProvider/AuthProvider';
// import SocialLogin from '../socialLogin/page';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';







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
        // <div className=" relative md:w-[28rem]  mx-auto p-2  rounded-lg shadow-2xl mt-1 h-full  ">
        //     <h1 className="text-3xl text-center text-pink-600 font-bold  mt-4 "> Register Now  </h1>
        //     <form onSubmit={handleRegister}>
        //         <div className="mb-4 mt-10 ">
        //             <label className="block  text-md font-semibold mb-2 " htmlFor=""> Your Name </label>
        //             <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Your Name" name="name" required />
        //         </div>
        //         <div className="mb-4  ">
        //             <label className="block  text-md font-semibold mb-2 " htmlFor=""> Your Email </label>
        //             <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Your Email" name="email" required />
        //         </div>

        //         <div className="mb-4 ">
        //             <label className="block  text-md font-semibold mb-2 " htmlFor=""> Password </label>
        //             <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 "
        //                 type={showPassword ? "text" : "password"}
        //                 placeholder="Password" name="password" required />
        //             <span onClick={() => setShowPassWord(!showPassword)} className="absolute left-96 mt-3  text-green-700 ">
        //                 {
        //                     showPassword ? <AiFillEye className='text-xl text-white'></AiFillEye> : <AiFillEyeInvisible className='text-xl text-white '></AiFillEyeInvisible>
        //                 }

        //             </span>
        //         </div>
        //         <label className="label ">
        //             <a href="#" className="label-text-alt link link-hover text-base ">Forgot password?</a>
        //         </label>

        //         <div className=" w-32 py-1.5 rounded-md justify-center mx-auto text-center bg-fuchsia-600 hover:bg-fuchsia-800 ">
        //             <button type="submit" className=" w-28 font-bold "> Register Now  </button>
        //         </div>
        //         <div className=' flex justify-between items-center  mt-6 px-6 '>
        //             <label className="label">
        //                 <h1 className="label-text-alt link link-hover text-[16px] text-pink-600 ">Please Your  </h1>
        //             </label>
        //             <label className="label">
        //                 <Link href='/auth/login' className="label-text-alt link link-hover text-[16px] text-pink-600">
        //                     Login Account
        //                 </Link>
        //             </label>
        //         </div>
        //     </form>
        //     <SocialLogin></SocialLogin>
        //     <ToastContainer></ToastContainer>
        // </div>
    );
};

export default Register;