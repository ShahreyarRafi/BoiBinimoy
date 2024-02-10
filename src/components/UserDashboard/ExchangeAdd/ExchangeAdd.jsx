"use client";

import Link from "next/link";
import React from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { BsUpload } from "react-icons/bs";
import Swal from 'sweetalert2'

const ExchangeAdd = () => {

    const axios = require('axios').default;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const coverType = form.coverType.value;
        const bookCondition = form.bookCondition.value;
        const whatYouWant = form.whatYouWant.value;
        const bookCategory = form.bookCategory.value;
        const title = form.title.value;
        const writer = form.writer.value;
        const language = form.language.value;
        const pages = form.pages.value;
        const publisher = form.publisher.value;
        const publicationYear = form.publicationYear.value;
        const edition = form.edition.value;
        const originally_published_in = form.originally_published_in.value;
        const owner = form.owner.value;
        const email = form.email.value;
        const stockLimit = form.stockLimit.value;
        const tags = form.tags.value;
        const awards = form.awards.value;
        const description = form.description.value;

        // const newBook
        const newBook = {
            coverType,
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
            originally_published_in,
            owner,
            email,
            stockLimit,
            tags,
            awards,
            description,
            exchange_status: 'available'
        };

        axios.post('https://boi-binimoy-server.vercel.app/api/v1/exchangableBooks', newBook)
            .then(response => {
                // Handle the success response
                console.log('Response:', response.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    };

    return (
        <div className="bg-teal-50 text-[#016961] min-h-screen">
            <div className="container mx-auto px-3 md:px-5 lg:px-0">
                <div className="border-2 border-[#016961] rounded-lg px-3">
                    <h1 className="text-2xl font-bold py-5 md:py-3 text-center md:text-start">Add Book</h1>

                    <form onSubmit={handleSubmit}>
                        {/* basic information div */}
                        <div className=" border-2 border-[#016961] rounded-lg px-3 pb-3">
                            {/* title */}
                            <h3 className="text-sm font-light py-2">Basic Information:</h3>
                            {/* information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                                {/* product type name:coverType*/}
                                <select
                                    className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                    name="coverType"
                                >
                                    <option selected value="">
                                        Cover type
                                    </option>
                                    <option value="newPhysicalBook">New Physical Book</option>
                                    <option value="oldPhysicalBook">Old Physical Book</option>
                                    <option value="pdfFormatBook">PDF Format Book</option>
                                    <option value="audioFormatBook">Audio Format Book</option>
                                </select>

                                {/* product conditions name:bookCondition*/}
                                <select
                                    className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                    name="bookCondition"
                                >
                                    <option selected value="">
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
                                    className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                    name="whatYouWant"
                                >
                                    <option selected value="">
                                        What you want?
                                    </option>
                                    <option value="exchange">Exchange</option>
                                    <option value="sale">Sale</option>
                                    <option value="exchangeOrSale">Exchange or Sale</option>
                                </select>

                                {/* book category name:bookCategory*/}
                                <select
                                    className="h-10 w-full text-xs px-2 bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                    name="bookCategory"
                                >
                                    <option selected value="">
                                        Book Category
                                    </option>
                                    <option value="self-help">Self-Help</option>
                                    <option value="biography/memoir">Biography/Memoir</option>
                                    <option value="history">History</option>
                                    <option value="science">Science</option>
                                    <option value="trueCrime">True Crime</option>
                                    <option value="travel">Travel</option>
                                    <option value="food&cooking">Food & Cooking</option>
                                    <option value="health&wellness">Health & Wellness</option>
                                    <option value="business&economics">
                                        Business & Economics
                                    </option>
                                    <option value="humor">Humor</option>
                                    <option value="crimeFiction">Crime Fiction</option>
                                    <option value="graphicNovels">Graphic Novels</option>
                                    <option value="literaryFiction">Literary Fiction</option>
                                    <option value="horror">Horror</option>
                                    <option value="historicalFiction">Historical Fiction</option>
                                    <option value="youngAdult(YA)">Young Adult (YA)</option>
                                    <option value="scienceFiction">Science Fiction</option>
                                    <option value="fantasy">Fantasy</option>
                                    <option value="mystery/thriller">Mystery/Thriller</option>
                                </select>
                            </div>
                        </div>

                        {/* book information and image div */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-3">
                            {/* book information div */}
                            <div className="border-2 col-span-1 lg:col-span-2 border-[#016961] rounded-lg h-full w-full px-2 pb-3">
                                {/* title */}
                                <h3 className="text-sm font-light py-2">Book Information:</h3>
                                {/* information */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                    {/* book title  name:title*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="title"
                                        placeholder="Book Title"
                                        type="text"
                                        required
                                    />

                                    {/* book author  name:writer*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="writer"
                                        placeholder="Book Author"
                                        type="text"
                                        required
                                    />

                                    {/* book language  name:language*/}
                                    <select
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="language"
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
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="pages"
                                        placeholder="Book Page Count"
                                        type="number"
                                        required
                                    />

                                    {/* book publisher name:publisher*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="publisher"
                                        placeholder="Book Publisher"
                                        type="text"
                                        required
                                    />

                                    {/* book publication year name:publicationYear*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="publicationYear"
                                        placeholder="Book Publication Year"
                                        type="number"
                                        required
                                    />

                                    {/* book edition name:edition*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="edition"
                                        placeholder="Book Edition"
                                        type="text"
                                        required
                                    />

                                    {/* Originally Published in name:originally_published_in*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="originally_published_in"
                                        placeholder="Originally Published in"
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>

                            {/* image div */}
                            <div className="border-2 col-span-1 border-[#016961] rounded-lg h-full w-full px-2 pb-3">
                                {/* title */}
                                <h3 className="text-sm font-light py-2">
                                    Upload book cover Image:
                                </h3>
                                {/* iamge */}
                                <div
                                    for="imageFile"
                                    className="w-full h-32 border flex justify-center items-center border-[#016961] rounded-lg"
                                >
                                    <label
                                        for="imageFile"
                                        className="border px-3 py-1 flex justify-center items-center gap-3 rounded-lg text-center text-sm  cursor-pointer"
                                    >
                                        <BsUpload /> <span> Upload Here</span>
                                    </label>
                                    <input
                                        className="h-5 w-full"
                                        type="file"
                                        id="imageFile"
                                        hidden
                                    />
                                </div>

                                {/* 3 image uploade feilds */}
                                <div className="grid grid-cols-3 gap-3 mt-2">
                                    {/* 1 */}
                                    <div
                                        for="imageFile"
                                        className="w-full h-16 border flex justify-center items-center border-[#016961] rounded-lg"
                                    >
                                        <label
                                            for="imageFile"
                                            className="border px-3 py-1 gap-3 rounded-lg text-center text-sm  cursor-pointer"
                                        >
                                            <BsUpload />
                                        </label>
                                        <input
                                            className="h-5 w-full"
                                            type="file"
                                            id="imageFile"
                                            hidden
                                        />
                                    </div>
                                    {/* 2 */}
                                    <div
                                        for="imageFile"
                                        className="w-full h-16 border flex justify-center items-center border-[#016961] rounded-lg"
                                    >
                                        <label
                                            for="imageFile"
                                            className="border px-3 py-1 gap-3 rounded-lg text-center text-sm  cursor-pointer"
                                        >
                                            <BsUpload />
                                        </label>
                                        <input
                                            className="h-5 w-full"
                                            type="file"
                                            id="imageFile"
                                            hidden
                                        />
                                    </div>
                                    {/* 3 */}
                                    <div
                                        for="imageFile"
                                        className="w-full h-16 border flex justify-center items-center border-[#016961] rounded-lg"
                                    >
                                        <label
                                            for="imageFile"
                                            className="border px-3 py-1 gap-3 rounded-lg text-center text-sm  cursor-pointer"
                                        >
                                            <BsUpload />
                                        </label>
                                        <input
                                            className="h-5 w-full"
                                            type="file"
                                            id="imageFile"
                                            hidden
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-3">
                            {/* owner information  div*/}
                            <div className="border-2 border-[#016961] rounded-lg h-full w-full px-2 pb-3">
                                {/* title */}
                                <h3 className="text-sm font-light py-2">Owner Information:</h3>

                                {/* information div */}
                                <div className="grid grid-cols-1 gap-3">
                                    {/* owner name name:owner*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="owner"
                                        placeholder="Book Owner Name"
                                        type="text"
                                        required
                                    />

                                    {/* owner location name:email*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="email"
                                        placeholder="Book Owner Email"
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>

                            {/* other information */}
                            <div className="border-2 border-[#016961] rounded-lg h-full w-full px-2 pb-3">
                                {/* title */}
                                <h3 className="text-sm font-light py-2">Other Information:</h3>

                                {/* information */}
                                <div className="grid grid-cols-1 gap-3">
                                    {/* book Stock Limit name:stockLimit*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="stockLimit"
                                        placeholder="Book Stock"
                                        type="number"
                                        required
                                    />
                                </div>
                            </div>

                            {/* optional information */}
                            <div className="border-2 border-[#016961] rounded-lg h-full w-full px-2 pb-3">
                                {/* title */}
                                <h3 className="text-sm font-light py-2">
                                    Optional Information:
                                </h3>

                                {/* information */}
                                <div className="grid grid-cols-1 gap-3">
                                    {/* book Tags name:tags*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="tags"
                                        placeholder="Book Tags"
                                        type="text"
                                    />

                                    {/* book awards name:awards*/}
                                    <input
                                        className="h-10 w-full px-2 text-xs bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="awards"
                                        placeholder="Book Awards"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* book description div name:description*/}
                        <div className="my-3">
                            <textarea
                                className="w-full p-2 text-xs bg-transparent border-2 border-[#016961] rounded-lg focus:outline-none"
                                name="description"
                                placeholder="Book Description"
                                cols="30"
                                rows="10"
                                required
                            ></textarea>
                        </div>

                        {/* go to home and submit buttons */}
                        <div className="flex justify-center md:justify-end text-xs items-center mb-4 gap-3">
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
            </div>
        </div>
    );
};

export default ExchangeAdd;