"use client"

import React, { useContext, useEffect, useState } from 'react';
import './joinUs.css'
import Image from 'next/image';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logImg from './img/log.svg'
import regImg from './img/register.svg'
import { useForm } from 'react-hook-form';
// import useAuth from '@/Hooks/auth/useAuth';
import { useRouter } from 'next/navigation';
import useAxiosPublic from '@/Hooks/Axios/useAxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '@/providers/AuthProvider';


const JoinUs = () => {
    const { register, handleSubmit, reset } = useForm();
    // const { createUser, signin, googleLogin } = useAuth();
    const { createUser, signin, googleLogin, updateUserProfiole } = useContext(AuthContext);
    const router = useRouter();
    const axiosPublic = useAxiosPublic();
    const [componentsMounted, setComponentMounted] = useState(false);

    const isUser = true

    useEffect(() => {
        setComponentMounted(true);
    }, []);

    useEffect(() => {
        if (componentsMounted) {
            initialize();
        }
    }, [componentsMounted]);

    function initialize() {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    }

    // user sign up function
    const signUp = (data) => {

        const name = data.userName;
        const email = data.email;
        const password = data.password;

        const userInfo = { name, email, password }
        createUser(email, password)
            .then(async (res) => {
                 const updateName = await updateUserProfiole(name);
                 console.log("user name : ",updateName);
                if (res.user) {
                    reset();
                    const res = await axiosPublic.post("/api/v1/users", userInfo);
                    console.log(res.data)
                    Swal.fire('Sign up successfull')
                    router.push('/')
                }
            })

    }



    // user login function
    const logIn = (data) => {
        const email = data.loginEmail;
        const password = data.loginPassword;
        signin(email, password)
            .then(res => {
                reset();
                router.push('/')
                console.log(res)
                Swal.fire('Login successfull')
            })
    };

    // handle google sign in function

    // const handleSocialLogin = async () => {
    //     try {
    //         const result = await googleLogin();
    //         const userInfo = {
    //             name: result.user?.displayName,
    //             email: result.user?.email,
    //             photo: result.user?.photoURL,
    //         }
    //         console.log("clicke")
    //         console.log(userInfo);
    //         axiosPublic.post('/api/v1/users', userInfo)
    //             .then(res => {
    //                 console.log(res.data);
    //                 router.push('/')
    //             })
    //     } catch (error) {
    //         console.error('Error during Google sign-in:', error);
    //     }
    // };



    // const handleSocialLogin = (user) => {
    //     user().then((res) => {
    //         console.log(res.user);
    //         if (res.user) {
    //             Swal.fire('Login successfull')
    //         };

    //         const userInformation = {
    //             email: res.user?.email,
    //             name: res.user?.displayName,
    //         }

    //         axiosPublic.post("/api/v1/users", userInformation)
    //             .then(res => {
    //                 console.log(res.data);

    //                     router.push("/")
    //             })


    //     }).catch(error => {
    //         Swal.fire(error);
    //     });
    // };




    // const handleSocialLogin =  (user) => {

    //     user()
    //         .then(res => {
    //             console.log(res.user);
    //             if (res.user) {
    //                 Swal.fire('User logged in successfully')
    //                 setTimeout(() => {
    //                 }, 1000);
    //             }

    //             const userInfo = {
    //                 email: res.user?.email,
    //                 name: res.user?.displayName,
    //             }

    //            axiosPublic.post("/api/v1/users", userInfo)
    //                 .then(res => {
    //                     console.log(res.data);

    //                     router.push('/')
    //                 })

    //         }).catch(error => {
    //             Swal.fire(error);
    //         })
    // }



    const handleSocialLogin = (user) => {
        user()
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    Swal.fire('User logged in successfully');
                    setTimeout(() => {
                        const userInfo = {
                            email: res.user?.email,
                            name: res.user?.displayName,
                        };
    
                        axiosPublic.post("/api/v1/users", userInfo)
                            .then(res => {
                                console.log(res.data);
                                router.push('/');
                            })
                            .catch(error => {
                                console.error("Error in Axios POST request:", error);
                                Swal.fire('An error occurred while processing your request.');
                            });
                    }, 1000);
                }
            })
            .catch(error => {
                console.error("Error in social login:", error);
                Swal.fire('An error occurred while logging in.');
            });
    };
    

















    return (
        <div className="container w-full flex justify-between">
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={handleSubmit(logIn)} action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="email" {...register('loginEmail')} placeholder="Email" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" {...register('loginPassword')} placeholder="Password" required />
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i><FaFacebookF /></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i><FaTwitter /></i>
                            </a>
                            <a className="social-icon">
                                <i onClick={() => handleSocialLogin(googleLogin)} ><FaGoogle /></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i><FaLinkedinIn /></i>
                            </a>
                        </div>
                    </form>


                    <form onSubmit={handleSubmit(signUp)} action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" {...register('userName')} placeholder="Username" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" {...register('email')} placeholder="Email" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" {...register('password')} placeholder="Password" required />
                        </div>
                        <input type="submit" className="btn" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i><FaFacebookF /></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i><FaTwitter /></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i onClick={() => handleSocialLogin(googleLogin)}><FaGoogle /></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i><FaLinkedinIn /></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <Image src={logImg} className="image" alt="" height={1000} width={1000} />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <Image src={regImg} className="image" alt="" height={1000} width={1000} />
                </div>
            </div>
        </div>


    );
};

export default JoinUs;

