"use client";
import React from 'react';

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { AuthContext } from '@/providers/AuthProvider';
import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import Swal from 'sweetalert2';
import useOneUser from '@/Hooks/api/useOneUser';
import { useRouter } from 'next/navigation';
// import palesholderImage from "../../../../public/placeholder.png"
import { IoIosCamera } from "react-icons/io";

const ParsonalInfo = () => {


    const axiosSecure = useAxiosSecure()

    const [currentUser] = useOneUser()

    console.log(currentUser);
    const router = useRouter();


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone_number = form.phone_number.value;
        const date_of_birth = form.date_of_birth.value;
        const gender = form.gender.value;
        const profession = form.profession.value;
        const street = form.street.value;
        const upozela = form.upozela.value;
        const district = form.district.value;
        const division = form.division.value;
        const country = form.country.value;
        const zip_code = form.zip_code.value;
        // const image = form.image.value;



        const updateUserInformation = {

            name, phone_number, date_of_birth, gender, profession,
            location: {
                street, upozela, district, division, country, zip_code
            }
        }

        console.log(updateUserInformation);


        axiosSecure.patch(`api/v1/users/${currentUser._id}`, updateUserInformation)
            .then(res => {
                console.log("update data ", res.data);
                // Assuming your API returns the updated user document
                const updatedUser = res.data;
                if (updatedUser) {
                    Swal.fire(' Profile Update successfully');
                    router.push('/dashboard/profile')
                } else {
                    console.error("Update failed: User not found or update unsuccessful");
                    Swal.fire('Update failed. Please try again.');
                }
            })
            .catch(error => {
                console.error("Error occurred during update:", error);
                Swal.fire('Update failed. Please try again.');
            });

    }



    return (
        <div>
            <div className="rounded-lg h-full pb-5 mb-10 bg-teal-50 shadow-lg">
                <div className="relative bg-[#016961] rounded-t-lg">
                    {/* bottom curve */}
                    <div className="absolute inset-x-0 bottom-0 ">
                        <svg
                            viewBox="0 0 224 12"
                            fill="currentColor"
                            className="w-full -mb-1 text-teal-50"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                        </svg>
                    </div>

                    {/* Information section */}
                    <div className="text-white px-4 lg:px-8 pb-20">
                        {/* wellcome and edit btton */}
                        <div className="flex justify-between items-center py-3">
                            <div>

                                <h6 className="text-lg font-bold">Wellcome, User frist name!</h6>
                            </div>
                            <div>
                                <button className="text-xl md:text-2xl">
                                    <IoMdAdd />
                                </button>
                            </div>
                        </div>

                        {/* User profile and profile information */}


                        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5 relative">
                            {/* user profile */}


                            <div className='absolute mr-[70px]  text-3xl '>

                                <input
                                    type="file"
                                    id="fileInput"
                                    name = "image"
                                    style={{ display: 'none' }}
                                    // onChange={handleFileChange}
                                />

                                <button
                                    onClick={() => {
                                        document.getElementById('fileInput').click();
                                    }}
                                    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                                >
                                    <IoIosCamera /> 
                                </button>

                               



                            </div>
                            <Image
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                className="object-cover w-40 h-40 mb-2 rounded-full shadow"
                                alt=""
                                width={500}
                                height={500}
                            />


                            {/* profile information */}
                            <div className="text-center md:text-start">

                                <p className="font-sans text-xs md:text-sm font-normal text-gray-100 pt-2 pb-1">
                                    30k Exchange | 15k Sell | 34k Post
                                </p>
                                <p className="max-w-sm font-light">user.name@gmail.com</p>
                                <p className="max-w-sm font-light">01800-000000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* personal information and contact Address */}
                <div className="max-w-4xl mx-auto space-y-5 mt-3 px-5 py-3 text-[#016961]">
                    {/* personal information */}

                    <form onSubmit={handleSubmit}>
                        <div className="w-full border-2 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-bold pb-2 text-[#016961]">
                                    Personal Info
                                </h3>
                                {/* <Link href="/dashboard/parsonalInfo"> <button className="text-xl md:text-2xl">
                                <CiEdit />
                            </button></Link> */}
                            </div>
                            <div className="space-y-5 mt-3">
                                {/* user name */}

                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                                        Full Name
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="name"
                                        placeholder="Full Name"
                                        type="text"
                                        required

                                    />

                                </div>


                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                                        Phone
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="phone_number"
                                        placeholder="Phone Number"
                                        type="number"
                                        required

                                    />
                                </div>

                                {/* user dob */}
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                                        Dath Of Birth
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="date_of_birth"
                                        placeholder=" Date Of Birth "
                                        type="date"
                                        required
                                    />
                                </div>



                                {/* user gander */}
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                                        Gender
                                    </p>
                                    <select
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] text-gray-400 rounded-lg focus:outline-none"
                                        name="gender"
                                    >
                                        <option selected value="gender">
                                            Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>

                                    </select>
                                </div>

                                {/* user Profession */}
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                                        Profession
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="profession"
                                        placeholder="Profession"
                                        type="text"
                                        required
                                    />

                                </div>

                            </div>
                        </div>


                        {/* Address information */}
                        <div className="w-full border-2 rounded-lg p-3 text-[#016961]">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-bold pb-2 text-[#016961]">
                                    Address Information
                                </h3>
                                {/* <button className="text-xl md:text-2xl">
                                <CiEdit />
                            </button> */}
                            </div>

                            <div className="space-y-5 mt-3">


                                {/* user City */}
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                                        Street
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="street"
                                        placeholder="Street"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                                        Zip Code
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="zip_code"
                                        placeholder="Zip Code"
                                        type="number"
                                        required
                                    />
                                </div>

                                {/* user Street */}
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded  text-xs text-[#016961]  px-2">
                                        Upozela / Thana
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="upozela"
                                        placeholder=" Upozela / Thana "
                                        type="text"
                                        required
                                    />
                                </div>

                                {/* user Country */}
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded  text-xs text-[#016961]  px-2">
                                        District
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="district"
                                        placeholder="District"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded  text-xs text-[#016961]  px-2">
                                        Division
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="division"
                                        placeholder="Division"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">
                                    <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded  text-xs text-[#016961]  px-2">
                                        Country
                                    </p>
                                    <input
                                        className="h-10 w-full px-2  text-xs lg:text-sm bg-transparent border border-[#016961] rounded-lg focus:outline-none"
                                        name="country"
                                        placeholder="Country"
                                        type="text"
                                        required
                                    />
                                </div>

                                {/* user Address */}
                                <div className="relative py-3 px-5 border-2 w-full rounded-md">

                                    <button type='submit' className="text-lg"> Submit </button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ParsonalInfo;







