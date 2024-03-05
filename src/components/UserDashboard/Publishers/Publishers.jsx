"use client"

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const Publishers = () => {

    const axiosSecure = useAxiosSecure();
    const [current, setCurrent] = useState([]);

    const { data: publishers = [], isPending, refetch } = useQuery({
        queryKey: ["publishers"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/publishers`);
            return res.data;
        },
    });

    // Add functionality checked
    const handleAdd = (e) => {
        e.preventDefault();
        const publisher = document.getElementById('publisherName').value;
        const description = document.getElementById('description').value;
        const logo = "https://i.ibb.co/mvbNFzD/images.jpg"
        const newPublisher = {
            publisher,
            description,
            logo
        }

        axiosSecure.post("api/v1/publishers", newPublisher)
            .then(res => {
                console.log(res);
                if (res.data._id) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Publisher added successfully",
                    });
                    refetch();
                    document.getElementById("publisherName").value = ""
                    document.getElementById("description").value = ""
                    document.getElementById("add_modal").close();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to added publisher",
                    });
                    document.getElementById("add_modal").close();
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to added publisher",
                });
                document.getElementById("add_modal").close();
            })
    }

    const handleUpdate = (id, publisher, logo, description) => {
        setCurrent({ id, publisher, logo, description });

        const modal = document.getElementById('update_modal');
        modal.showModal();

        document.getElementById('updateName').value = publisher;
        document.getElementById('updateDescription').value = description;
    }

    // Update functionality checked
    const handleSubmit = () => {

        const publisher = document.getElementById('updateName').value;
        const description = document.getElementById('updateDescription').value;
        const logo = "https://i.ibb.co/mvbNFzD/images.jpg";
        const updatePublisher = {
            publisher,
            description,
            logo
        }

        axiosSecure.patch(`api/v1/publishers/${current?.id}`, updatePublisher)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Publisher updated successfully',
                    });
                    refetch();
                    document.getElementById('updateName').value = "";
                    document.getElementById('updateDescription').value = "";
                    document.getElementById('update_modal').close();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to update publisher',
                    });
                    document.getElementById('update_modal').close();
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to update publisher',
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
                axiosSecure.delete(`api/v1/publishers/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success!',
                                text: 'Publisher has been deleted.',
                            });
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Error deleting publisher',
                            });
                        }
                        refetch();
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error deleting publisher',
                        });
                    });
            }
        });
    }

    return (
        <div className="container">
            <div className="text-center">
                <button className="btn bg-[#016961] text-white mb-5" onClick={() => document.getElementById('add_modal').showModal()}>Add Publisher</button>
            </div>
            <div className="grid grid-cols-1 gap-5">
                {
                    publishers.map(publisher =>
                        <div key={publisher?._id} className="border-2 border-black rounded-lg p-5 flex flex-col justify-between">
                            <div className="flex flex-col md:flex-row items-center gap-5">
                                <div className="w-32">
                                    <Image 
                                        src={publisher?.logo}
                                        alt="writer"
                                        priority
                                        width={100}
                                        height={100}
                                        className="rounded-full object-cover p-1 mx-auto w-32 h-32 mb-3"
                                    />
                                </div>
                                <div className="w-full">
                                    <h5 className="w-full text-lg font-bold text-center my-3">{publisher?.publisher}</h5>
                                    <h5 className="w-full text-md font-normal">{publisher?.description}</h5>
                                    <div className="flex gap-5 pt-3">
                                        <button onClick={() => handleUpdate(publisher?._id, publisher?.publisher, publisher?.logo, publisher?.description)} className="btn flex-1 bg-[#016961] text-white">Update</button>
                                        <button onClick={() => handleDelete(publisher?._id)} className="btn flex-1 bg-[#016961] text-white">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <dialog id="add_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="border-2 border-gray-300 rounded-lg px-3 pb-3">
                        <h3 className="text-sm font-light py-2">Publisher Name:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            placeholder="Writer name"
                            id="publisherName"
                            type="text"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Description:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            id="description"
                            placeholder="Description"
                            type="text"
                            required
                        />
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleAdd} className="btn">Submit</button>
                            <button onClick={() => {
                                document.getElementById("publisherName").value = "";
                                document.getElementById("description").value = "";
                            }
                            } className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >
            <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="border-2 border-gray-300 rounded-lg px-3 pb-3">
                        <h3 className="text-sm font-light py-2">Publisher Name:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            placeholder="Publisher name"
                            id="updateName"
                            type="text"
                            required
                        />
                        <h3 className="text-sm font-light py-2">Description:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            id="updateDescription"
                            placeholder="Description"
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

export default Publishers;