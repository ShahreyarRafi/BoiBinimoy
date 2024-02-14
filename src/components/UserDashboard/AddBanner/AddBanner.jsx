"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { BsUpload } from "react-icons/bs";
import Image from "next/image";
import useImageURL from "@/Hooks/ImageURL/useImageURL";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const AddBanner = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const { imageUrl, uploadImage } = useImageURL(selectedFile);
  const axiosSecure = useAxiosSecure();

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

  const handleBannerSubmit = async (data) => {
    const {
      coverTitle,
      coverAuther,
      coverTopic,
      seeMoreLink,
      buyNowLink,
      coverDescription,
      thambnailTitle,
      thambnailDescription,
    } = data;
    const uploadedImageUrl = await uploadImage();

    const addedBanner = {
      coverTitle,
      coverAuther,
      coverTopic,
      btnUrl: [seeMoreLink, buyNowLink],
      coverDescription,
      thambnailTitle,
      thambnailDescription,
      coverImage: uploadedImageUrl,
      userName: user?.displayName,
      userEmail: user?.email,
    };

    console.log(addedBanner);

    axiosSecure
      .post("/url", addedBanner)
      .then((response) => {
        console.log("Response:", response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Banner has been published.",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className=" text-[#016961] min-h-screen pb-10">
      <div className="container mx-auto">
        <div className="border-2 border-[#016961] rounded-lg px-3 bg-teal-50">
          <h1 className="text-2xl font-bold py-5 md:py-3 text-center md:text-start">
            Add Banner
          </h1>
          <form onSubmit={handleSubmit(handleBannerSubmit)}>
            {/* Cover Informations div */}
            <div className="border-2 border-[#016961] rounded-lg p-3">
              {/* title */}
              <h3 className="text-lg font-semibold pb-3">
                Cover Informations:
              </h3>

              {/* title, auther and topic */}
              <div className="flex flex-col lg:flex-row items-center gap-3 ">
                <input
                  className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("coverTitle")}
                  placeholder="Cover Title"
                  type="text"
                  required
                />
                <input
                  className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("coverAuther")}
                  placeholder="Cover Book Auther"
                  type="text"
                  required
                />
                <input
                  className="h-10 w-full px-2 text-xs bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("coverTopic")}
                  placeholder="Cover Topic"
                  type="text"
                  required
                />
              </div>

              {/* button links */}
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

              {/* description and image upload */}
              <div className="flex  flex-col lg:flex-row gap-3 pt-3">
                {/* descripthion */}
                <div className="w-full">
                  <textarea
                    className="w-full p-3 text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                    {...register("coverDescription")}
                    placeholder="Banner Cover Description"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </div>

                {/* image */}
                <div
                  for="imageFile"
                  className="w-2/5 border flex justify-center items-center border-[#016961] rounded-lg"
                >
                  {!selectedFile ? (
                    <label
                      for="imageFile"
                      className="border px-3 py-1 flex justify-center items-center gap-3 rounded-lg text-center text-sm  cursor-pointer"
                    >
                      <BsUpload /> <span> Upload Here</span>
                    </label>
                  ) : (
                    <Image
                      src={preview}
                      width={200}
                      height={200}
                      alt="Image Preview"
                    />
                  )}
                  <input
                    type="file"
                    id="imageFile"
                    {...register("coverImage")}
                    onChange={onSelectFile}
                    hidden
                  />
                </div>
              </div>
            </div>

            {/* thumbnail information */}
            <div className="border-2 border-[#016961] rounded-lg p-3 mt-3">
              {/* title */}
              <h3 className="text-lg font-semibold pb-3">
                Thumbnail information:
              </h3>

              <div>
                {/* thambnail title */}
                <input
                  className="h-10 w-full px-2 text-sm bg-transparent border rounded-lg border-[#016961] focus:outline-none"
                  {...register("thambnailTitle")}
                  placeholder="Thambnail Title"
                  type="text"
                  required
                />
              </div>

              {/* thambnail descripthion */}
              <div className="flex flex-col lg:flex-row gap-3 pt-3">
                {/* descripthion */}
                <div className="w-full">
                  <textarea
                    className="w-full p-3 text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                    {...register("thambnailDescription")}
                    placeholder="Banner Description"
                    cols="30"
                    rows="10"
                    required
                  />
                </div>

                {/* image */}
                <div
                  for="imageFile"
                  className="w-2/5 border flex justify-center items-center border-[#016961] rounded-lg"
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
                    {...register("thambnailImage")}
                    hidden
                  />
                </div>
              </div>
            </div>

            {/* go to home and submit buttons */}
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
