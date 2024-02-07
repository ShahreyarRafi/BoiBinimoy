"use client";
import React from 'react';

import { SlArrowRight, } from "react-icons/sl";


const ParsonalInfo = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

    }


    return (
        <div>
            <div className="max-w-[1800px] mx-auto min-h-screen">
                <div className="px-3 md:px-7 mb-10 text-[#016961]">
                    <div className="border-2 border-[#016961] rounded-lg px-3">
                        <h1 className="text-2xl font-bold py-5 md:py-3 text-center md:text-start">
                            Parsonal Information
                        </h1>

                        <form onSubmit={handleSubmit}>

                            <div className="grid grid-cols-1 md:grid-cols-2  my-3 gap-3">
                                <div className="border-2 col-span-2 border-[#016961] rounded-lg h-full w-full px-2 pb-3">
                                    <h3 className="py-2">Book Information:</h3>
                                    <div className="grid grid-cols-2 gap-3">

                                        <input
                                            className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            type="number"
                                            required
                                            
                                        />

                                        <select
                                            className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] text-gray-400 rounded-lg focus:outline-none"
                                            name="gender"
                                        >
                                            <option selected value="">
                                                Gender
                                            </option>
                                            <option value="english">Male</option>
                                            <option value="bangla">Female</option>

                                        </select>

                                        <input
                                            className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                            name="birthday"
                                            placeholder=" Date Of Birth "
                                            type="date"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* Address Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2  my-3 gap-3">
                                <div className="border-2 col-span-2 border-[#016961] rounded-lg h-full w-full px-2 pb-3">
                                    <h3 className="py-2">Address Information:</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <input
                                            className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                            name="upozela"
                                            placeholder=" Upozela / Thana "
                                            type="text"
                                            required
                                        />

                                        <input
                                            className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                            name="district"
                                            placeholder="District"
                                            type="text"
                                            required
                                        />

                                        <input
                                            className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                            name="division"
                                            placeholder="Division"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>

                            </div>

                            {/* submit buttons */}
                            <div className="flex justify-end md:justify-end text-xs lg:text-base items-center mb-4 gap-3">
                                <button
                                    type="submit"
                                    className="px-3 py-2 border-2 border-[#016961] rounded-lg uppercase"
                                >
                                    <span className="flex items-center gap-1">
                                        <span> Submit </span> <SlArrowRight />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParsonalInfo;