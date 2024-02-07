"use client";

import useAllUser from "@/Hooks/api/useAllUser";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  // All user data
  const [allUser] = useAllUser();
  // console.log(allUser);

  // specific user
  const currentUser = allUser.filter((data) => data?.email === user?.email);
  // console.log(currentUser);

  return (
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
              {/* {currentUser.map((userData) => (
                <div key={userData._id}>
                  <h6 className="text-lg font-bold">
                    Wellcome, {userData.name} !
                  </h6>
                </div>
              ))} */}
              <h6 className="text-lg font-bold">Wellcome, User frist name!</h6>
            </div>
            <div>
              <button className="text-xl md:text-2xl">
                <IoMdAdd />
              </button>
            </div>
          </div>

          {/* User profile and profile information */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
            {/* user profile */}
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-40 h-40 mb-2 rounded-full shadow"
              alt=""
              width={500}
              height={500}
            />
            {/* profile information */}
            <div className="text-center md:text-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">User Name</h2>
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
        <div className="w-full border-2 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold pb-2 text-[#016961]">
              Personal Info
            </h3>
            <button className="text-xl md:text-2xl">
              <CiEdit />
            </button>
          </div>
          <div className="space-y-5 mt-3">
            {/* user name */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                Full Name
              </p>
              <p className="text-lg">User name</p>
            </div>

            {/* user Email */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                Email
              </p>
              <p className="text-lg">user.name@gmail.com</p>
            </div>

            {/* user Email */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                Phone
              </p>
              <p className="text-lg">01800-000000</p>
            </div>

            {/* user dob */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                Dath Of Birth
              </p>
              <p className="text-lg">Not set yet</p>
            </div>

            {/* user gander */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                Gender
              </p>
              <p className="text-lg">Not set yet</p>
            </div>

            {/* user Profession */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                Profession
              </p>
              <p className="text-lg">Not set yet</p>
            </div>
          </div>
        </div>

        {/* Address information */}
        <div className="w-full border-2 rounded-lg p-3 text-[#016961]">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold pb-2 text-[#016961]">
              Address Info
            </h3>
            <button className="text-xl md:text-2xl">
              <CiEdit />
            </button>
          </div>

          <div className="space-y-5 mt-3">
            {/* user City */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded text-xs text-[#016961] px-2">
                City
              </p>
              <p className="text-lg">Not set yet</p>
            </div>

            {/* user Street */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded  text-xs text-[#016961]  px-2">
                Street
              </p>
              <p className="text-lg">Not set yet</p>
            </div>

            {/* user Country */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded  text-xs text-[#016961]  px-2">
                Country
              </p>
              <p className="text-lg">Not set yet</p>
            </div>

            {/* user Address */}
            <div className="relative py-3 px-5 border-2 w-full rounded-md">
              <p className="absolute top-[-8px] ring-0 bg-gray-200 rounded  text-xs text-[#016961]  px-2">
                Address
              </p>
              <p className="text-lg">Not set yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;