"use client";

import React, { useContext, useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { BsUpload } from "react-icons/bs";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "@/Hooks/Axios/useAxiosSecure";
import Swal from "sweetalert2";
import Image from "next/image";
import { AuthContext } from "@/providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=7365e777963cf7664292cb83647a9d98`;

const AddBook = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const { user } = useContext(AuthContext);
  const owner_email = user?.email;
  console.log(owner_email);

  const { data: categories = [], isPending, refetch } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/category`);
      return res.data;
    },
  });

  // create a preview as a side effect, whenever selected file is changed
  const onSelectFile = (e) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setPreview(undefined);
      return;
    }

    console.log("image file: ", files);
    const selectedImage = files[0];
    setSelectedFile(selectedImage);

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);
  };

  const onSubmit = async (data) => {
    const {
      bookType,
      bookCondition,
      whatYouWant,
      bookCategory,
      title,
      writer,
      language,
      pages,
      publisher,
      publicationYear,
      edition,
      price,
      owner,
      location,
      stockLimit,
      tags,
      awards,
      description,
    } = data;
    const imageFile = { image: data.image1[0] };

    const url = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = url?.data?.data?.display_url || "";

    const newBook = {
      bookType,
      owner_email,
      bookCondition,
      whatYouWant,
      bookCategory,
      title,
      writer,
      language,
      pages,
      publisher,
      publicationYear,
      edition,
      price,
      cover_image: image,
      owner,
      location,
      stockLimit,
      tags,
      awards,
      description,
    };

    const res = await axiosSecure.post("/api/v1/buy-books", newBook);

    if (res?.data) {
      reset();
      Swal.fire("Book upload successful");
    }
  };

  return (
    <div className="container mx-auto pb-10">
      <div className="border border-[#016961] rounded-lg text-[#016961] bg-50-50 p-5">
        <h1 className="text-3xl font-bold py-5 md:py-3 text-center md:text-start">
          Add Your Book
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* basic information start */}
          <div>
            <h3 className="pb-2">Basic Information:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* product type name:bookType*/}
              <select
                className="h-11 w-full px-2 text-xs md:text-sm text-gray-400 bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("bookType")}
              >
                <option selected value="bookType">
                  Book type
                </option>
                <option value="newPhysicalBook">New Physical Book</option>
                <option value="oldPhysicalBook">Old Physical Book</option>
                <option value="pdfFormatBook">PDF Format Book</option>
                <option value="audioFormatBook">Audio Format Book</option>
              </select>

              {/* product conditions name:bookCondition*/}
              <select
                className="h-11 w-full px-2 text-xs md:text-sm text-gray-400 bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("bookCondition")}
              >
                <option selected value="bookCondition">
                  Book Condition
                </option>
                <option value="good">Good</option>
                <option value="veryGood">Very Good</option>
                <option value="notSoGoodorBad">Not So Good or Bad</option>
                <option value="bad">Bad</option>
                <option value="veryBad">Very Bad</option>
              </select>

              {/* what you wants name:whatYouWant*/}
              <select
                className="h-11 w-full px-2 text-xs md:text-sm text-gray-400 bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("whatYouWant")}
              >
                <option selected hidden value="want">
                  What you want?
                </option>
                <option value="exchange">Exchange</option>
                <option value="sale">Sale</option>
                <option value="exchangeOrSale">Exchange or Sale</option>
              </select>

              {/* book category name:bookCategory*/}
              <select
                className="h-11 w-full text-xs md:text-sm text-gray-400 px-2 bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("bookCategory")}
              >
                <option selected hidden value="category">
                  Book Category
                </option>
                {
                  categories?.map(category => <option key={category?._id} value={category?.category_name}>{category?.category_name}</option>)
                }
              </select>
            </div>
          </div>
          {/* basic information end */}

          {/* book information start */}
          <div>
            <h3 className="pb-2">Book Information:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* book title  name:title*/}
              <input
                className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("title")}
                placeholder="Book Title"
                type="text"
                required
              />

              {/* book author  name:writer*/}
              <input
                className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("writer")}
                placeholder="Book writer"
                type="text"
                required
              />

              {/* book language  name:language*/}
              <select
                className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] text-gray-400 rounded-lg focus:outline-none shadow-md"
                {...register("language")}
              >
                <option selected value="">
                  Book Language
                </option>
                <option value="english">English</option>
                <option value="bangla">Bangla</option>
                <option value="arabic">Arabic</option>
              </select>

              {/* book page count  name:pages*/}
              <input
                className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("pages")}
                placeholder="Book Page Count"
                type="number"
                required
              />

              {/* book publisher name:publisher*/}
              <input
                className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("publisher")}
                placeholder="Book Publisher"
                type="text"
                required
              />

              {/* book publication year name:publicationYear*/}
              <input
                className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("publicationYear")}
                placeholder="Book Publication Year"
                type="number"
                required
              />

              {/* book edition name:edition*/}
              <input
                className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("edition")}
                placeholder="Book Edition"
                type="text"
                required
              />

              {/* book price name:price*/}
              <input
                className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                {...register("price")}
                placeholder="Book Price"
                type="number"
                required
              />
            </div>
          </div>
          {/* book information end */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* other information start */}
            <div>
              <h3 className="pb-2">Other Information:</h3>
              <div className="grid grid-cols-1 gap-3">
                {/* book Stock Limit name:stockLimit*/}
                <input
                  className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                  {...register("stockLimit")}
                  placeholder="Book Stock"
                  type="number"
                  required
                />
                {/* book Stock Limit name:stockLimit*/}
                <input
                  className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                  {...register("stockLimit")}
                  placeholder="Book Stock"
                  type="number"
                  required
                />
              </div>
            </div>
            {/* other information end */}

            {/* optional information start */}
            <div>
              <h3 className="pb-2">Optional Information:</h3>
              <div className="grid grid-cols-1 gap-3">
                {/* book Tags name:tags*/}
                <input
                  className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                  {...register("tags")}
                  placeholder="Book Tags"
                  type="text"
                />

                {/* book awards name:awards*/}
                <input
                  className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
                  {...register("awards")}
                  placeholder="Book Awards"
                  type="text"
                />
              </div>
            </div>
            {/* optional information end */}

            {/* image section start */}
            <div>
              <h3 className="pb-2">Uploade book cover Image:</h3>
              <div className="w-full h-[100px] border flex justify-center items-center border-[#016961] rounded-lg bg-teal-50/40 shadow-md"
              >
                {!selectedFile ? (
                  <label htmlFor="imageFile"
                    className="w-full h-full flex justify-center items-center gap-3 text-center text-xs md:text-sm cursor-pointer rounded-lg"
                  >
                    <BsUpload /> <span> Upload</span>
                  </label>
                ) : (
                  <Image
                    src={preview}
                    width={500}
                    height={500}
                    alt="Image Preview"
                  />
                )}
                <input
                  className="h-5 w-full"
                  type="file"
                  id="imageFile"
                  onChange={onSelectFile}
                  {...register("image1")}
                  hidden
                />
              </div>
            </div>
            {/* image section end */}
          </div>

          {/* book description section start */}
          <div>
            <textarea
              className="w-full p-2 text-xs md:text-sm bg-teal-50/40 border border-[#016961] rounded-lg focus:outline-none shadow-md"
              {...register("description")}
              placeholder="Book Description"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          {/* book description section end */}

          {/* button section start*/}
          <div className="flex justify-end md:justify-end items-center gap-3 pb-5">
            <button
              type="submit"
              className="px-3 py-2 border border-[#016961] rounded-lg uppercase bg-teal-50/40 shadow-md hover:shadow-none"
            >
              <span className="flex items-center gap-1 text-xs md:text-sm">
                <span>Publish</span> <SlArrowRight />
              </span>
            </button>
          </div>
          {/* button section end*/}
        </form>
      </div>
    </div>
  );
};

export default AddBook;
