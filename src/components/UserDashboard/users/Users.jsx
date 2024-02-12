"use client"

import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useAllUser from "@/Hooks/api/useAllUser";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from 'sweetalert2';
import userPicPlaceHolder from '@/assets/userPicPlaceHolder.png'
import palesholderImage from "../../../../public/placeholder.png"


const Users = () => {
    const [allUser, refetch] = useAllUser();
    const [data, setData] = useState({});
    const axiosSecure = useAxiosSecure();

    console.log("user all ", allUser);


    const hendleUserRole = (id, role) => {
        axiosSecure.patch(`/api/v1/users/${id}`, { [role]: true })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Member updated successfully',
                    });
                    refetch();
                    document.getElementById('role_modal').close();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to update member',
                    });
                    refetch();
                    document.getElementById('role_modal').close();
                }
            })
            .catch(error => {
                console.error("Error updating user role:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error updating member',
                });
                refetch();
                document.getElementById('role_modal').close();
            });
    };

    const removeUserRole = (id, role) => {
        axiosSecure.patch(`/api/v1/users/${id}`, { [role]: false })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Member removed from role successfully',
                    });
                    refetch();
                    document.getElementById('role_modal').close();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to remove member from role',
                    });
                    refetch();
                    document.getElementById('role_modal').close();
                }
            })
            .catch(error => {
                console.error("Error removing user from role:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error removing member from role',
                });
                refetch();
                document.getElementById('role_modal').close();
            });
    };

    {/* <div key={user._id}>
                            <div className="flex flex-col rounded-lg border-2 border-black py-5">
                                <Image src={user.photoURL} alt="profile" priority width={500} height={500} style={{
                                    width: '120px',
                                    height: '120px',
                                }} className='rounded-full p-1 mx-auto' />
                                <div className="flex flex-col pl-2">
                                    <h2 className="text-lg text-gray-600 font-semibold">{user?.name}</h2>
                                    <p className='text-xs text-gray-500'>{user?.email}</p>
                                    <button className="" onClick={() => {
                                        setData(user);
                                        document.getElementById('role_modal').showModal();
                                    }}> Role Update </button>
                                </div>
                            </div>
                        </div> */}

    return (
        <>
            <div className="grid grid-cols-1 gap-5">
                <div className="flex items-center justify-center">
                    <div className="container duration-300">
                        <div className="w-full rounded-2xl overflow-hidden lg:shadow-lg my-5 duration-300">
                            <div className="hidden lg:block bg-[#016961] duration-300 text-white ">
                                <div className="flex items-center justify-between font-semibold border border-gray-100 px-10 py-5">
                                    <h5 className="w-[40px] lg:mr-10"></h5>
                                    <h5 className="w-full lg:mr-10">User</h5>
                                    <h5 className="w-full lg:mr-10">Email</h5>
                                    <h5 className="w-full lg:mr-10">Register Date</h5>
                                    <h5 className="w-full lg:mr-10">Roles</h5>
                                    <h5 className="w-full lg:mr-10">View Profile</h5>
                                </div>
                            </div>
                            <div className="flex-1 sm:flex-none grid grid-cols-1 gap-5 lg:gap-0">
                                {allUser.map(user => (
                                    <div key={user._id} className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100">
                                        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-1  rounded-3xl lg:rounded-none px-6 lg:px-10 py-5 mx-auto duration-300">
                                            <div className="min-w-[40px] mr-2">
                                                {user.image ? (
                                                    <Image src={user.image} alt="profile" priority width={500} height={500} className='rounded-full p-1 mx-auto size-32 lg:size-10' />
                                                ) : (
                                                    <Image src={userPicPlaceHolder} alt="profile" priority width={500} height={500} className='rounded-full p-1 mx-auto size-32 lg:size-10' />
                                                )}
                                            </div>
                                            <h5 className="w-full lg:mr-10 text-lg font-semibold text-center lg:text-start line-clamp-1 truncate">{user?.name}</h5>
                                            <h5 className="w-full lg:mr-10 text-center lg:text-start">{user?.email}</h5>
                                            <h5 className="w-full lg:mr-10 text-center lg:text-start">{user?.reg_date}</h5>
                                            <div className="w-full lg:mr-10 flex gap-1.5 text-sm text-black justify-center lg:justify-start">
                                                {user?.isModerator && <p className="py-0.5 px-2 bg-orange-400 rounded-full my-1.5">Moderator</p>}
                                                {user?.isPublisher && <p className="py-0.5 px-2 bg-sky-500 rounded-full my-1.5">Publisher</p>}
                                                {user?.isSeller && <p className="py-0.5 px-2 bg-teal-500 rounded-full my-1.5">Seller</p>}
                                            </div>
                                            <button className=" btn btn-outline btn-success  bg-[#016961] py-2 rounded-full lg:bg-transparent lg:mr-10 mt-2 lg:mt-auto text-center lg:text-start text-white lg:text-black" onClick={() => {
                                                setData(user);
                                                document.getElementById('role_modal').showModal();
                                            }}> Role Update </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="role_modal" className="modal">
                <div className="modal-box">

                    <div className="bg-white my-10 pb-2 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">

                        {/*  Profile image  */}

                        {/*  some problem for the userProfile  */}
                        <div>
                            {data?.image ? (
                                <Image
                                    src={data?.image}
                                    alt="Profile"
                                    priority width={100} height={100}
                                    className="h-40 w-40 rounded-full mx-auto"
                                />
                            ) : (
                                <Image
                                    src={palesholderImage}
                                    alt="Placeholder"
                                    priority width={100} height={100}
                                    className="h-40 w-40 rounded-full bg-gray-300 mx-auto"
                                />
                            )}


                        </div>
                        <div className="mt-6">
                            <h1 className="text-lg text-center font-semibold">
                                Name : {data?.name}
                            </h1>
                            <p className="text-sm text-gray-600 text-center">
                                3 connections in common
                            </p>
                        </div>
                        <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
                            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 flex gap-20 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">


                                {/* isModerator */}


                                {data?.isModerator ? (
                                    <button onClick={() => removeUserRole(data._id, "isModerator")} className="font-bold text-lg flex mr-10"> Remove Moderator </button>
                                ) : (
                                    <button onClick={() => hendleUserRole(data._id, "isModerator")} className="font-bold text-lg"> Add Moderator </button>
                                )}

                                {/*isPublisher  */}
                            </div>
                            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                                {data?.isPublisher ? (
                                    <button onClick={() => removeUserRole(data._id, "isPublisher")} className="font-bold text-lg"> Remove Publisher </button>
                                ) : (
                                    <button onClick={() => hendleUserRole(data._id, "isPublisher")} className="font-bold text-lg"> Add Publisher </button>
                                )}




                                {/*isSeller   */}
                            </div>
                            <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">

                                {data?.isSeller ? (
                                    <button onClick={() => removeUserRole(data._id, "isSeller")} className="font-bold text-lg"> Remove Seller </button>
                                ) : (
                                    <button onClick={() => hendleUserRole(data._id, "isSeller")} className="font-bold text-lg"> Add Seller </button>
                                )}
                            </div>

                        </div>
                    </div>



                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, laboriosam! </p>


                    {/* 
                    <div className=" flex items-center gap-6 cursor-pointer">
                        {data?.isModerator ? (
                            <button onClick={() => removeUserRole(data._id, "isModerator")} className="font-bold text-lg"> Remove Moderator </button>
                        ) : (
                            <button onClick={() => hendleUserRole(data._id, "isModerator")} className="font-bold text-lg"> Add Moderator </button>
                        )}
                        {data?.isPublisher ? (
                            <button onClick={() => removeUserRole(data._id, "isPublisher")} className="font-bold text-lg"> Remove Publisher </button>
                        ) : (
                            <button onClick={() => hendleUserRole(data._id, "isPublisher")} className="font-bold text-lg"> Add Publisher </button>
                        )}
                        {data?.isSeller ? (
                            <button onClick={() => removeUserRole(data._id, "isSeller")} className="font-bold text-lg"> Remove Seller </button>
                        ) : (
                            <button onClick={() => hendleUserRole(data._id, "isSeller")} className="font-bold text-lg"> Add Seller </button>
                        )}
                    </div> */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-circle">
                                {/* <AiOutlineClose className="text-xl text-red-600" /> */}

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Users;
