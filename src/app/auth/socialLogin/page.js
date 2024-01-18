"use client"

import { FcGoogle } from 'react-icons/fc';
import { ToastContainer, toast } from "react-toastify";
import { useContext } from 'react';
import { AuthContext } from '@/AuthProvider/AuthProvider';
import { useRouter } from 'next/navigation';

const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext)
    const router = useRouter();


    const handleSocialLogin = (user) => {

        user()
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    toast.success('User logged in successfully', {
                        position: 'top-center'
                    })
                    setTimeout(() => {
                        router.push('/');
                    }, 1000);
                }
            })

    }

    return (
        <>
            <div className="divider text-center font-semibold mb-3">
              Or Continue With
            </div>
            <div className=" flex-col flex items-center justify-center ">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className=" badge badge-outline w-full flex items-center justify-center font-bold gap-1"><span className=" text-xl"><FcGoogle></FcGoogle></span ><span className='text-fuchsia-600 font-semibold '>Login With Google</span>
                </button>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default SocialLogin;
