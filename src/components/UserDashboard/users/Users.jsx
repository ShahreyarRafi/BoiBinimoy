"use client"

import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useAllUser from "@/Hooks/api/useAllUser";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from 'sweetalert2';



const Users = () => {

    const [allUser, refetch] = useAllUser()

    const [data, setData] = useState({})

    const axiosSecure = useAxiosSecure()


    //  Handle make a user  role 
    const hendleUserRole = (id, role) => {

        // axiosSecure.patch(`/users?id=${id}`)
        axiosSecure.patch(`api/v1/users${id}`, {
            
        })
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    Swal.fire(' Member Update  successfully',)
                    refetch()
                }
            })
    }



    return (
        <>
            <div className="grid grid-cols-5 gap-5 p-10">
                {/* {
                    allUser?.map(user => <UserCard key={user?._id} user={user}></UserCard>)
                } */}

                {
                    allUser.map(user => < div key={user._id}>
                        <div className="flex flex-col rounded-lg border-2 border-black py-5">
                            <Image src={user.photoURL} alt="profile" priority width={500} height={500} style={{
                                width: '120px',
                                height: '120px',
                            }} className='rounded-full p-1 mx-auto' />
                            <div className="flex flex-col pl-2">
                                <h2 className="text-lg text-gray-600 font-semibold">{user?.name}</h2>
                                <p className='text-xs text-gray-500'>{user?.email}</p>

                                <button className="" onClick={async () => {
                                    await setData(user)
                                    document.getElementById('my_modal_1').showModal()
                                }}> Role Update </button>


                            </div>
                        </div>
                    </div>)
                }
            </div>

            {/* Modal  */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"> {data?.name} </h3>
                    <h3 className="font-bold text-lg"> {data?.isModerator} </h3>
                    <div className=" flex items-center gap-6 cursor-pointer">
                        <button onClick={() => hendleUserRole(data._id, 'isModerator')} className="font-bold text-lg"> Moderator </button>
                        <button onClick={() => hendleUserRole(data._id, "isPublisher")} className="font-bold text-lg"> Publisher </button>
                        <button onClick={() => hendleUserRole(data._id, "isSeller")} className="font-bold text-lg"> Seller</button>
                    </div>




                    {/* <div className="card-actions justify-end cursor-pointer">
                        <button onClick={() => hendleUserRole(data._id)} className="badge badge-outline px-4 py-3 ">Confirm</button>

                    </div> */}
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn"><AiOutlineClose className="text-xl text-red-600" /></button>
                        </form>
                    </div>
                </div>
            </dialog>



        </>
    );
};

export default Users;