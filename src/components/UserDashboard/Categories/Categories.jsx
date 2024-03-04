"use client"

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import { useState } from "react";
import { BsUpload } from "react-icons/bs";
import useImageURL from "@/Hooks/ImageURL/useImageURL";
import Swal from "sweetalert2";

const Categories = () => {

    const axiosSecure = useAxiosSecure();
    const [current, setCurrent] = useState([]);
    const [selectFile, setSelectFile] = useState();
    const [preview, setPreview] = useState();
    const { imageUrl, uploadImage } = useImageURL(selectFile);
    let count = 0;

    const { data: categories = [], isPending, refetch } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/category`);
            return res.data;
        },
    });

    const addOnSelectFile = () => {
        const file = document.getElementById('imageFile').files[0];

        if (!file) {
            setSelectFile(undefined);
            setPreview(undefined);
            return;
        }
        setSelectFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const updateOnSelectFile = () => {
        const file = document.getElementById('updateImageFile').files[0];

        if (!file) {
            setSelectFile(undefined);
            setPreview(undefined);
            return;
        }
        setSelectFile(file);
        setPreview(URL.createObjectURL(file));
    };

    // Add functionality checked
    const handleAdd = async (e) => {
        e.preventDefault();
        const category_name = document.getElementById('addCategory').value;
        const uploadedImageUrl = await uploadImage();
        const newCategory = {
            category_name,
            category_image: uploadedImageUrl,
        }

        axiosSecure.post("api/v1/category", newCategory)
            .then(res => {
                if (res.data._id) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Category added successfully",
                    });
                    refetch();
                    document.getElementById("addCategory").value = '';
                    setSelectFile(undefined);
                    document.getElementById("add_modal").close();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to added category",
                    });
                    document.getElementById("addCategory").value = '';
                    setSelectFile(undefined);
                    document.getElementById("add_modal").close();
                }

            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to added category",
                });
                document.getElementById("addCategory").value = '';
                setSelectFile(undefined);
                document.getElementById("add_modal").close();
            })
    }

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
                axiosSecure.delete(`api/v1/category/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success!',
                                text: 'Category has been deleted.',
                            });
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Error deleting category',
                            });
                        }
                        refetch();
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Error deleting category',
                        });
                    });
            }
        });
    }

    const handleUpdate = (id, name, image) => {
        setCurrent({ id, name, image });
        const modal = document.getElementById('update_modal');
        modal.showModal();
        document.getElementById('updateCategory').value = name;
        setPreview(image);
    }

    // Update functionality checked
    const handleSubmit = async () => {

        const category_name = document.getElementById('updateCategory').value;
        const category_image = await uploadImage();

        axiosSecure.put(`api/v1/category/${current?.id}`, { category_name, category_image })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Category updated successfully',
                    });
                    refetch();
                    setSelectFile(undefined);
                    document.getElementById('update_modal').close();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to update category',
                    });
                    setSelectFile(undefined);
                    document.getElementById('update_modal').close();
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to update category',
                });
                setSelectFile(undefined);
                document.getElementById('update_modal').close();
            });
    };

    return (
        <div>
            <div className="text-center">
                <button className="btn bg-[#016961] text-white" onClick={() => document.getElementById('add_modal').showModal()}>Add Category</button>
            </div>

            <div className="grid grid-cols-1 gap-5">
                <div className="flex items-center justify-center">
                    <div className="container duration-300">
                        <div className="w-full rounded-2xl overflow-hidden lg:shadow-lg my-5 duration-300">
                            <div className="hidden md:block bg-[#016961] duration-300 text-white ">
                                <div className="flex items-center justify-between font-semibold border border-gray-100 py-5">
                                    <h5 className="w-full text-center">No</h5>
                                    <h5 className="w-full text-center">Category Image</h5>
                                    <h5 className="w-full text-center">Category Name</h5>
                                    <h5 className="w-full text-center">Update | Delete</h5>
                                </div>
                            </div>
                            <div className="flex-1 sm:flex-none grid grid-cols-1 gap-5 lg:gap-0">
                                {categories?.map((category, count) => (
                                    <div
                                        key={category._id}
                                        className="bg-white rounded-3xl lg:rounded-none shadow-sm hover:bg-[#19a49113] lg:shadow-inherit border border-gray-100"
                                    >
                                        <div className="flex flex-col md:flex-row items-center justify-start md:justify-between gap-1 rounded-3xl lg:rounded-none py-5 mx-auto duration-300">
                                            <h5 className="w-full text-lg font-semibold text-center line-clamp-1 truncate">
                                                {count + 1}
                                            </h5>
                                            <div className="w-full text-lg font-semibold text-center lg:text-start line-clamp-1 truncate">
                                                <Image
                                                    src={category?.category_image}
                                                    alt="category"
                                                    priority
                                                    width={100}
                                                    height={100}
                                                    className="rounded-full p-1 mx-auto size-16"
                                                />
                                            </div>
                                            <h5 className="w-full text-lg font-semibold text-center line-clamp-1 truncate">
                                                {category?.category_name}
                                            </h5>
                                            <div className="w-full flex justify-center gap-3">
                                                <button onClick={() => handleUpdate(category?._id, category?.category_name, category?.category_image)} className="p-2 text-2xl bg-green-200 text-green-700 rounded-md hover:bg-green-300 hover:text-green-800">
                                                    <GrDocumentUpdate />
                                                </button>
                                                <button onClick={() => handleDelete(category?._id)}
                                                    className="p-2 text-2xl bg-red-200 text-red-700 rounded-md hover:bg-red-300  hover:text-red-800"
                                                >
                                                    <MdDeleteOutline />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="add_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="border-2 border-gray-300 rounded-lg px-3 pb-3 flex flex-col gap-3">
                        <h3 className="font-light text-center pt-2 text-[#016961]">Add Category</h3>
                        <input
                            className="border border-[#016961] bg-teal-50/40 h-10 w-full px-2 text-xs rounded-lg focus:outline-none"
                            placeholder="Category name"
                            id="addCategory"
                            type="text"
                            required
                        />
                        {/* image div start*/}
                        <div
                            for="imageFile"
                            className="w-full h-full border flex justify-center items-center border-[#016961] rounded-lg shadow-md"
                        >
                            {!selectFile ? (
                                <input
                                    type="text"
                                    readOnly
                                    placeholder="No Image selected"
                                    alt="Image Preview"
                                    style={{
                                        height: '200px',
                                        width: '100%'
                                    }}
                                    className="text-center bg-teal-50/40"
                                />

                            ) : (
                                <Image
                                    src={preview}
                                    width={300}
                                    height={300}
                                    alt="Image Preview"
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                    }}
                                    className="rounded-lg"
                                />
                            )}

                        </div>
                        <div>
                            <label
                                for="imageFile"
                                className="border border-[#016961] bg-teal-50/40 py-1 flex justify-center items-center gap-3 rounded-lg text-center text-xs md:text-sm  cursor-pointer"
                            >
                                <BsUpload /> <span> Upload Here</span>
                                <input
                                    type="file"
                                    id="imageFile"
                                    onChange={addOnSelectFile}
                                    required
                                    hidden
                                />
                            </label>
                        </div>
                        {/* image div end */}
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleAdd} className="btn">Submit</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="border-2 border-gray-300 rounded-lg px-3 pb-3 flex flex-col gap-2">
                        <h3 className="text-sm font-light pt-2 text-center">Update Category</h3>
                        <input
                            className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg focus:outline-none"
                            name="updateCategory"
                            id="updateCategory"
                            type="text"
                            required
                        />
                        <div
                            for="imageFile"
                            className="w-full h-full border flex justify-center items-center border-[#016961] rounded-lg shadow-md"
                        >
                            <Image
                                src={preview}
                                width={300}
                                height={300}
                                id="updateImage"
                                alt="Image Preview"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                }}
                                className="rounded-lg"
                            />
                        </div>
                        <label
                            for="updateImageFile"
                            className="border border-[#016961] bg-teal-50/40 py-1 flex justify-center items-center gap-3 rounded-lg text-center text-xs md:text-sm  cursor-pointer"
                        >
                            <BsUpload /> <span> Upload Here</span>
                            <input
                                type="file"
                                id="updateImageFile"
                                onChange={updateOnSelectFile}
                                required
                                hidden
                            />
                        </label>
                    </div>
                    <div className="modal-action gap-5">
                        <form method="dialog">
                            <button onClick={handleSubmit} className="btn">Submit</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Categories;