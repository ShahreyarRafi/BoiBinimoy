"use client"

import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useAllUser from "@/Hooks/api/useAllUser";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from 'sweetalert2';



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
            <div className="grid grid-cols-5 gap-5 p-10">
                {allUser.map(user => (
                    <div key={user._id}>
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
                    </div>
                ))}
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
