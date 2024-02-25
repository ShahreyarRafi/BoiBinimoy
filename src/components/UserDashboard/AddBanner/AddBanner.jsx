"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { BsUpload } from "react-icons/bs";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import useImageURL from "@/Hooks/ImageURL/useImageURL";
import Image from "next/image";

const AddBanner = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const [selectedFile, setSelectedFile] = useState();
  const [preview1, setPreview1] = useState();
  const [selectedFile2, setSelectedFile2] = useState();
  const [preview2, setPreview2] = useState();
  const { uploadImage } = useImageURL(selectedFile);
  const { uploadImage : thumbnel_image } = useImageURL(selectedFile2);

  // create a preview1 as a side effect, whenever selected file is changed
  const onSelectFile = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setPreview1(undefined);
      return;
    }
    const selectedImage = files[0];
    setSelectedFile(selectedImage);
    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview1(objectUrl);
  };
  // create a preview1 as a side effect, whenever selected file is changed
  const onSelectFile2 = (e) => {
    const files = e.target.files;
    console.log('files', files);
    if (!files || files.length === 0) {
      setSelectedFile2(undefined);
      setPreview2(undefined);
      return;
    }
    const selectedImage = files[0];
    setSelectedFile2(selectedImage);
    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview2(objectUrl);
  };

  // post banner data
  const onSubmit = async (data) => {
    console.log(data);

    axiosSecure
      .post("/api/v1/banner", data)
      .then((response) => {
        // Handle the success response
        console.log("Response:", response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your banner has been published.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });

    // try {
    //   const response = await axios.post("/api/v1/banner", data);
    //   console.log("Response:", response.data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="text-[#016961] min-h-screen pb-10">
      <div className="container mx-auto">
        <div className="border-2 border-[#016961] rounded-lg px-3 bg-teal-50">
          <h1 className="text-2xl font-bold py-5 md:py-3 text-center md:text-start">
            Add Banner
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Cover Informations div */}
            <div className="border-2 border-[#016961] rounded-lg p-3">
              <h3 className="text-lg font-semibold pb-3">
                Cover Informations:
              </h3>
              <div className="flex flex-col lg:flex-row items-center gap-3 ">
                <input
                  className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("title")}
                  placeholder="Cover Title"
                  type="text"
                  required
                />
                <input
                  className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("author")}
                  placeholder="Cover Book Author"
                  type="text"
                  required
                />
                <input
                  className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("topic")}
                  placeholder="Cover Topic"
                  type="text"
                  required
                />
              </div>
              {/* SEE MORE and Buy Now button links */}
              <div className="flex flex-col lg:flex-row items-center gap-3 pt-3">
                <input
                  className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("seeMoreLink")}
                  placeholder="SEE MORE button link"
                  type="url"
                  required
                />
                <input
                  className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("buyNowLink")}
                  placeholder="Buy Now button link"
                  type="url"
                  required
                />
              </div>
              {/* Description and image upload */}
              <div className="flex  flex-col lg:flex-row gap-3 pt-3">
                <div className="w-full">
                  <textarea
                    className="w-full p-3 text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                    {...register("description")}
                    placeholder="Banner Cover Description"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="w-full lg:w-2/5 border flex justify-center items-center border-[#016961] rounded-lg">
                {
                  !selectedFile ?   <label
                  for="cover_image"
                  className="border px-3 py-1 flex justify-center items-center gap-3 rounded-lg text-center text-sm cursor-pointer"
                >
                  <BsUpload /> <span> Upload Here</span>
                </label> :   <Image
                      src={preview1}
                      width={500}
                      height={500}
                      alt="Image Preview1"
                    />

                }
                  <input
                    type="file"
                    id="cover_image"
                    {...register("cover_image")}
                    onChange={onSelectFile}
                    hidden
                  />
                </div>
              </div>
            </div>

            {/* Thumbnail information */}
            <div className="border-2 border-[#016961] rounded-lg p-3 mt-3">
              <h3 className="text-lg font-semibold pb-3">
                Thumbnail information:
              </h3>
              <div>
                <input
                  className="h-10 w-full px-2 text-sm bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("thumbnail_title")}
                  placeholder="Thumbnail Title"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-3 pt-3">
                <div className="w-full">
                  <textarea
                    className="w-full p-3 text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                    {...register("thumbnail_description")}
                    placeholder="Thumbnail Description"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="w-full lg:w-2/5 border flex justify-center items-center border-[#016961] rounded-lg">
                  {!selectedFile2 ? (
                    <label
                      for="thumbnailImageFile"
                      className="border px-3 py-1 flex justify-center items-center gap-3 rounded-lg text-center text-sm cursor-pointer"
                    >
                      <BsUpload /> <span> Upload Here</span>
                    </label>
                  ) : (
                    <Image
                      src={preview2}
                      width={500}
                      height={500}
                      alt="Image Preview2"
                    />
                  )}
                  <input
                    type="file"
                    id="thumbnailImageFile"
                    {...register("thumbnail_img")}
                    onChange={onSelectFile2}
                    hidden
                  />
                </div>
              </div>
            </div>

            {/* Go to home and submit buttons */}
            <div className="flex flex-col md:flex-row justify-center md:justify-end text-xs items-center my-4 gap-3">
              <Link href="/dashboard">
                <button className="px-3 py-2 border-2 border-[#016961] rounded-lg uppercase">
                  <span className="flex items-center gap-1">
                    <SlArrowLeft /> <span>GO to Dashboard</span>
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
      </div>
    </div>
  );
};

export default AddBanner;
