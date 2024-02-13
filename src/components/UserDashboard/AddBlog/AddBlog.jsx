"use client"

import Link from "next/link";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { BsUpload } from "react-icons/bs";
import axios from 'axios';
import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import Image from "next/image";
import { useForm } from "react-hook-form";
import useImageURL from "@/Hooks/ImageURL/useImageURL";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useImagePreview from "@/Hooks/ImagePreview/useImagePreview";

const AddBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const { imageUrl, uploadImage } = useImageURL(selectedFile);
    const axiosSecure = useAxiosSecure();

    // create a preview as a side effect, whenever selected file is changed
    const onSelectFile = (e) => {
        const files = e.target.files;

        if (!files || files.length === 0) {
            setSelectedFile(undefined);
            setPreview(undefined);
            return;
        }

        const selectedImage = files[0];
        setSelectedFile(selectedImage);

        const objectUrl = URL.createObjectURL(selectedImage);
        setPreview(objectUrl);
    };

    // blogs submitting function
    const handleBlogSubmit = async (data) => {
        console.log("clicked");
        const { form, title, body, category } = data;
        const uploadedImageUrl = await uploadImage();

        const newBlog = { form, title, body, cover_image: uploadedImageUrl, user_name: user?.displayName, user_email: user?.email, category };

        axiosSecure.post("/api/v1/blogs", newBlog)
            .then((response) => {
                // Handle the success response
                console.log("Response:", response.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your blog has been published.",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch((error) => {
                // Handle errors
                console.error("Error:", error);
            });
    }

    return (
        <div className=" text-[#016961] min-h-screen">
            <div className="container mx-auto">
                <div className="border-2 border-[#016961] rounded-lg px-3 bg-teal-50">
                    <h1 className="text-2xl font-bold py-5 md:py-3 text-center md:text-start">Add Blog</h1>
                    <form onSubmit={handleSubmit(handleBlogSubmit)}>
                        {/* basic information div */}
                        <div className=" border-2 border-[#016961] rounded-lg px-3 pb-3">
                            {/* title */}
                            <h3 className="text-sm font-light py-2">Blog Title:</h3>
                            <input
                                className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"

                                {...register("title")}
                                placeholder="Blog Title"
                                type="text"
                                required
                            />
                        </div>

                        {/* blog information and image div */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-3">
                            {/* book description div */}
                            <div className="border-2 col-span-1 lg:col-span-2 border-[#016961] rounded-lg h-full w-full px-2 pb-1">
                                {/* title */}
                                <h3 className="text-sm font-light py-2">Blog Description:</h3>
                                {/* blog description div name:description*/}
                                <div>
                                    <textarea
                                        className="w-full p-2 text-xs bg-transparent border-2 border-[#016961] rounded-lg focus:outline-none"

                                        {...register("description")}
                                        placeholder="Blog Description"
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
                                    {
                                        !selectedFile ? <label
                                            for="imageFile"
                                            className="border px-3 py-1 flex justify-center items-center gap-3 rounded-lg text-center text-sm  cursor-pointer"
                                        >
                                            <BsUpload /> <span> Upload Here</span>
                                        </label> : <Image src={preview} width={500} height={500} alt="Image Preview" />
                                    }
                                    <input
                                        type="file"
                                        id="imageFile"
                                        {...register("cover_image")}
                                        onChange={onSelectFile}
                                        hidden
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Blog tag */}
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="border-2 border-[#016961] rounded-lg h-full w-full px-2 mt-3 pb-3">
                                <h3 className="text-sm font-light py-2">
                                    Blog Category:
                                </h3>

                                <div className="grid grid-cols-1 gap-3">
                                    {/* blog Tags name:tags*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"

                                        {...register("category")}
                                        placeholder="Blog Category"
                                        type="text"
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

                                        {...register("tags")}
                                        placeholder="Blog Tags"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* go to home and submit buttons */}
                        <div className="flex justify-center md:justify-end text-xs items-center my-4 gap-3">
                            <Link href="/dashboard">
                                <button className="px-3 py-2 border-2 border-[#016961] rounded-lg uppercase">
                                    <span className="flex items-center gap-1">
                                        <SlArrowLeft /> <span>Go to Dashboard</span>
                                    </span>
                                </button>
                            </Link>
                            <button
                                type="submit"
                                className="px-3 py-2 border-2 border-[#016961] rounded-lg uppercase"
                            >
                                <span className="flex items-center gap-1">
                                    <span>Submit</span> <SlArrowRight />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddBlog;