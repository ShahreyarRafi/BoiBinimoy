"use client"

import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useAllUser from "@/Hooks/api/useAllUser";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from 'sweetalert2';
import userPicPlaceHolder from '@/assets/userPicPlaceHolder.png'

const Users = () => {
    const [allUser, refetch] = useAllUser();
    const [data, setData] = useState({});
    const axiosSecure = useAxiosSecure();

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
                                                {user.photoURL ? (
                                                    <Image src={user.photoURL} alt="profile" priority width={500} height={500} className='rounded-full p-1 mx-auto size-32 lg:size-10' />
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
                                            <button className="w-full bg-[#016961] py-2 rounded-full lg:bg-transparent lg:mr-10 mt-2 lg:mt-auto text-center lg:text-start text-white lg:text-black" onClick={() => {
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
                    <h3 className="font-bold text-lg"> {data?.name} </h3>
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
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn"><AiOutlineClose className="text-xl text-red-600" /></button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Users;
