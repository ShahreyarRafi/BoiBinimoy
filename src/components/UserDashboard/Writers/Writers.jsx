"use client"

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const Writers = () => {

    const axiosSecure = useAxiosSecure();
    const [current, setCurrent] = useState([]);

    const { data: allWriters = [], isPending, refetch } = useQuery({
        queryKey: ["writers"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/writers`);
            return res.data;
        },
    });

    // Add functionality checked
    const handleAdd = (e) => {
        e.preventDefault();
        const writer_name = document.getElementById('writerName').value;
        const birth = document.getElementById('dateOfBirth').value;
        const death = document.getElementById('dateOfDeath').value;
        const follower = document.getElementById('followers').value;
        const bio = document.getElementById('bio').value;
        const profile = "https://i.ibb.co/mvbNFzD/images.jpg"
        const newWriter = {
            writer_name,
            birth,
            death,
            follower,
            bio,
            profile
        }

        axiosSecure.post("api/v1/writers", newWriter)
            .then(res => {
                console.log(res);
                if (res.data._id) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Writer added successfully",
                    });
                    refetch();
                    document.getElementById("writerName").value = ""
                    document.getElementById("dateOfBirth").value = ""
                    document.getElementById("dateOfDeath").value = ""
                    document.getElementById("followers").value = ""
                    document.getElementById("bio").value = ""
                    document.getElementById("add_modal").close();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to added writer",
                    });
                    document.getElementById("add_modal").close();
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to added writer",
                });
                document.getElementById("add_modal").close();
            })
    }

    const handleUpdate = (id, name, profile, dateBirth, dateDeath, followers, biography) => {
        setCurrent({ id, name, profile, dateBirth, dateDeath, followers, biography });

        const modal = document.getElementById('update_modal');
        modal.showModal();

        document.getElementById('updateName').value = name;
        document.getElementById('updateBirth').value = dateBirth;
        document.getElementById('updateDeath').value = dateDeath;
        document.getElementById('updateFollowers').value = followers;
        document.getElementById('updateBio').value = biography;
    }

    // Update functionality checked
    const handleSubmit = () => {

        const writer_name = document.getElementById('updateName').value;
        const birth = document.getElementById('updateBirth').value;
        const death = document.getElementById('updateDeath').value;
        const follower = document.getElementById('updateFollowers').value;
        const bio = document.getElementById('updateBio').value;
        const profile = "https://i.ibb.co/mvbNFzD/images.jpg";
        const updateWriter = {
            writer_name,
            birth,
            death,
            follower,
            bio,
            profile
        }

        axiosSecure.patch(`api/v1/writers/${current?.id}`, updateWriter)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Writer updated successfully',
                    });
                    refetch();
                    document.getElementById('updateName').value = "";
                    document.getElementById('updateBirth').value = "";
                    document.getElementById('updateDeath').value = "";
                    document.getElementById('followers').value = "";
                    document.getElementById('bio').value = "";
                    document.getElementById('update_modal').close();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to update writer',
                    });
                    document.getElementById('update_modal').close();
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to update writer',
                });
                document.getElementById('update_modal').close();
            });
    };

    // Delete functionality checked
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`api/v1/writers/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success!',
                                text: 'Writer has been deleted.',
                            });
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Error deleting writer',
                            });
                        }
                        refetch();
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error deleting writer',
                        });
                    });
            }
        });
    }

    return (
        <div className="container">
            <div className="text-center">
                <button className="btn bg-[#016961] text-white mb-5" onClick={() => document.getElementById('add_modal').showModal()}>Add Writer</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    allWriters.map(writer =>
                        <div key={writer?._id} className="border-2 border-black rounded-lg p-5 flex flex-col justify-between">
                            <div>
                                <Image
                                    src={writer?.profile}
                                    alt="writer"
                                    priority
                                    width={100}
                                    height={100}
                                    className="rounded-full p-1 mx-auto w-32 h-32 mb-3"
                                />
                                <h5 className="w-full text-md font-semibold">Name: <span className="font-normal">{writer?.writer_name}</span></h5>
                                <h5 className="w-full text-md font-semibold">Date of Birth: <span className="font-normal">{writer?.birth}</span></h5>
                                <h5 className="w-full text-md font-semibold">Death: <span className="font-normal">{writer?.death === "" ? "N/A" : writer?.death}</span></h5>
                                <h5 className="w-full text-md font-semibold">Followers: <span className="font-normal">{writer?.follower}</span></h5>
                                <h5 className="w-full text-md font-semibold">Bio: <span className="font-normal">{writer?.bio}</span> </h5>
                            </div>
                            <div className="flex w-full gap-5 pt-3">
                                <button onClick={() => handleUpdate(writer?._id, writer?.writer_name, writer?.profile, writer?.birth, writer?.death, writer?.follower, writer?.bio)} className="btn flex-1 bg-[#016961] text-white">Update</button>
                                <button onClick={() => handleDelete(writer?._id)} className="btn flex-1 bg-[#016961] text-white">Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>

            <dialog id="add_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="border-2 border-gray-300 rounded-lg px-3 pb-3">
                        <h3 className="text-sm font-light py-2">Writer Name:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            placeholder="Writer name"
                            id="writerName"
                            type="text"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Date of Birth:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            id="dateOfBirth"
                            type="date"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Date of Death:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            id="dateOfDeath"
                            type="date"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Followers:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            placeholder="Followers"
                            id="followers"
                            type="number"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Bio:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            placeholder="Bio"
                            id="bio"
                            type="text"
                            required
                        />
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleAdd} className="btn">Submit</button>
                            <button onClick={() => {
                                document.getElementById("writerName").value = "";
                                document.getElementById("dateOfBirth").value = "";
                                document.getElementById("dateOfDeath").value = "";
                                document.getElementById("followers").value = "";
                                document.getElementById("bio").value = "";
                            }
                            } className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >
            <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="border-2 border-gray-300 rounded-lg px-3 pb-3">
                        <h3 className="text-sm font-light py-2">Writer Name:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            placeholder="Writer name"
                            id="updateName"
                            type="text"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Date of Birth:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            id="updateBirth"
                            type="date"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Date of Death:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            id="updateDeath"
                            type="date"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Followers:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            placeholder="Followers"
                            id="updateFollowers"
                            type="number"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Bio:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            placeholder="Bio"
                            id="updateBio"
                            type="text"
                            required
                        />
                    </div>
                    <div className="modal-action gap-5">
                        <form method="dialog">
                            <button onClick={handleSubmit} className="btn">Update</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    );
};

export default Writers;