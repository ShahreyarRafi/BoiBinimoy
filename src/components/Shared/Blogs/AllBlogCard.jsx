"use client"

import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import Image from "next/image";
import Link from "next/link";
import { BsUpload } from "react-icons/bs";
import Swal from 'sweetalert2'
import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useState } from "react";


const AllBlogCard = ({ item }) => {

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [id, setId] = useState(item?._id);

    const deleteButton = (id) => {
        console.log(id);
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
                axiosSecure.delete(`api/v1/blogs/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success!',
                                text: 'Your blog has been deleted.',
                            });
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Error deleting blog',
                            });
                        }
                    })
                    .catch(error => {
                        console.error("Error updating user role:", error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error deleting blog',
                        });
                    });
            }
        });
    }

    const handleUpdate = () => {
        const modal = document.getElementById('update_blog_modal');
        const idInput = modal.querySelector('[name="id"]');
        const titleInput = modal.querySelector('[name="title"]');
        const descriptionInput = modal.querySelector('[name="description"]');
        const categoryInput = modal.querySelector('[name="category"]');
        const tagsInput = modal.querySelector('[name="tags"]');

        idInput.value = item?._id;
        titleInput.value = item?.title;
        descriptionInput.value = item?.body[0];
        categoryInput.value = item?.category;
        tagsInput.value = item?.tags[0];

        modal.showModal();
    }

    const handleSubmit = () => {
        const id = document.getElementById('id').value;
        const title = document.getElementById('title').value;
        const body = [document.getElementById('description').value];
        const category = document.getElementById('category').value;
        const tags = [document.getElementById('tags').value];
        const cover_image = 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
        const user_name = 'admin';
        const user_email = user?.email;

        const updateBlog = {
            title,
            body,
            cover_image,
            user_name,
            user_email,
            category,
            tags
        };

        axiosSecure.patch(`api/v1/blogs/${id}`, updateBlog)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Blog updated successfully',
                    });
                    document.getElementById('update_blog_modal').close();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to update blog',
                    });
                    document.getElementById('update_blog_modal').close();
                }
            })
            .catch(error => {
                console.error("Error updating user role:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error updating blog',
                });
                document.getElementById('update_blog_modal').close();
            });
    };

    return (
        <>
            <div className="rounded w-full flex flex-col justify-between">
                <div>
                    <Image
                        src={item?.cover_image}
                        className="rounded h-[200px]"
                        width={500}
                        height={500}
                        alt="latest"
                    />
                    <div className="p-4 pl-0">
                        <h2 className="font-bold text-xl text-gray-800">
                            {item?.title.slice(0, 40) + '...'}
                        </h2>
                        <p className="text-gray-700 mt-2">
                            {item?.body.slice(0, 1000) + '...'}
                            <Link href={`/ blogs / ${item?._id}`} className="text-blue-400"> Read more</Link>
                        </p>
                    </div>
                </div>
                <div className='p-4 flex gap-5'>
                    <button onClick={handleUpdate} className="w-full mt-6 text-center cursor-pointer bg-[#016961] text-white font-medium p-2 text-sm rounded-full ">
                        Update
                    </button>
                    <button onClick={() => deleteButton(item?._id)} className="w-full mt-6 text-center cursor-pointer bg-[#016961] text-white font-medium p-2 text-sm rounded-full ">
                        Delete
                    </button>
                </div>
            </div>
            <dialog id="update_blog_modal" className="modal">
                <div className="modal-box w-11/12 max-w-4xl">
                    <h1 className="text-3xl text-center font-bold py-2">Update Blog</h1>
                    {/* basic information div */}
                    <div className=" border-2 border-[#016961] rounded-lg px-3 pb-3">
                        {/* id */}
                        <h3 className="text-sm font-light py-2">Blog Id:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                            name="id"
                            type="text"
                            id="id"
                            defaultValue={item?._id}
                            readOnly
                        />
                        {/* title */}
                        <h3 className="text-sm font-light py-2">Blog Title:</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                            name="title"
                            type="text"
                            id="title"
                            defaultValue={item?.title}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-3">
                        {/* book description div */}
                        <div className="border-2 col-span-1 lg:col-span-2 border-[#016961] rounded-lg h-full w-full px-2 pb-1">
                            {/* title */}
                            <h3 className="text-sm font-light py-2">Blog Description:</h3>
                            {/* blog description div name:description*/}
                            <div>
                                <textarea
                                    className="w-full p-2 text-xs bg-transparent border-2 border-[#016961] rounded-lg focus:outline-none"
                                    name="description"
                                    id="description"
                                    defaultValue={item?.body}
                                    cols="30"
                                    rows="10"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        {/* image div */}
                        <div className="border-2 flex flex-col border-[#016961] rounded-lg h-full w-full px-2 pb-3">
                            {/* title */}
                            <h3 className="text-sm font-light py-2">
                                Upload blog cover image:
                            </h3>
                            {/* image */}
                            <div
                                for="imageFile"
                                className="w-full h-full border flex justify-center items-center border-[#016961] rounded-lg"
                            >
                                <label
                                    for="imageFile"
                                    className="border px-3 py-1 flex justify-center items-center gap-3 rounded-lg text-center text-sm  cursor-pointer"
                                >
                                    <BsUpload /> <span> Upload Here</span>
                                </label>
                                <input
                                    type="file"
                                    id="imageFile"
                                    hidden
                                />
                            </div>
                        </div>
                    </div>

                    {/* Blog category */}
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="border-2 border-[#016961] rounded-lg h-full w-full px-2 mt-3 pb-3">
                            <h3 className="text-sm font-light py-2">
                                Blog Category:
                            </h3>

                            <div className="grid grid-cols-1 gap-3">
                                {/* blog Tags name:category*/}
                                <input
                                    className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                    name="category"
                                    id="category"
                                    type="text"
                                    defaultValue={item?.category}
                                    required
                                />
                            </div>
                        </div>
                        <div className="border-2 border-[#016961] rounded-lg h-full w-full px-2 mt-3 pb-3">
                            <h3 className="text-sm font-light py-2">
                                Blog Tags:
                            </h3>

                            <div className="grid grid-cols-1 gap-3">
                                {/* blog Tags name:tags*/}
                                <input
                                    className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                    name="tags"
                                    id="tags"
                                    defaultValue={item?.tags}
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <div className='flex gap-5'>
                                <button onClick={handleSubmit} className="w-full px-4 mt-6 text-center cursor-pointer bg-[#016961] text-white font-medium p-2 text-sm rounded-full ">
                                    Update
                                </button>
                                <button className="w-full px-4 mt-6 text-center cursor-pointer bg-[#016961] text-white font-medium p-2 text-sm rounded-full ">
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default AllBlogCard;