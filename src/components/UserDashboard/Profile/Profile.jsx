"use client";

import useAllUser from "@/Hooks/api/useAllUser";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { IoIosCamera } from "react-icons/io";
import placeHolder from "../../../../public/placeholder.png"



const Profile = () => {

  const { user } = useContext(AuthContext);
  // console.log(user?.email);

  // All user data
  const [allUser] = useAllUser();
  console.log(allUser);

  // specific user
  // const currentUser = allUser?.filter((data) => data?.email === user?.email);
  // console.log(currentUser?.email);

  const currentUser = allUser?.filter((data) => data?.email === user?.email);
  console.log(currentUser.length > 0 ? currentUser[0]?.email : undefined);
  console.log(currentUser);

  return (
    <section>
      {currentUser.map((userData) => (

        <div key={userData._id}>

          <div className="max-w-5xl mx-auto rounded-lg mb-10 bg-teal-50 shadow-lg">
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

                  </div>
                  <div>
                    <a href="/dashboard/parsonalInfo">
                      <button className="text-xl md:text-2xl">
                        <CiEdit />
                      </button>
                    </a>
                  </div>
                </div>

                {/* User profile and profile information */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
                  {/* user profile */}

                  
                  <div className="">
                    {user?.photoURL ? (
                      <Image
                        src={user?.photoURL}
                        alt="Profile"
                        className="h-full w-full rounded-full mx-auto"
                      />
                    ) : (
                      <Image
                        src={placeHolder}
                        alt="Placeholder"
                        className="h-full  w-full rounded-full bg-gray-300 mx-auto"
                      />
                    )}
                  </div>




                  {/* <Image
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-40 h-40 mb-2 rounded-full shadow relative "
                    alt=""
                    width={500}
                    height={500}

                  /> */}
                  <div>
                    <IoIosCamera className="absolute md:left-[445px]  text-4xl  text-gray-900  "></IoIosCamera>

                  </div>
                  {/* profile information */}
                  <div className="text-center md:text-start">
                    <h2 className="text-xl md:text-2xl lg:text-3xl">
                      {userData?.name}
                    </h2>
                    <p className="font-sans text-xs md:text-sm font-normal text-gray-100 pt-2 pb-1">
                      30k Exchange | 15k Sell | 34k Post
                    </p>
                    <p className="max-w-sm font-light">
                      {userData?.email}
                    </p>
                    <p className="max-w-sm font-light">01800-000000</p>
                  </div>
                </div>
              </div>
            </div>



            <div className="text-center">
              {/* <a href="/dashboard/parsonalInfo"><button > Personal Info </button></a> */}
            </div>



            {/* personal information and contact Address */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10">
              {/* personal information */}
              <div className="text-center md:text-start">
                <h3 className="text-2xl font-bold pb-2">Personal Info</h3>
                <div>
                  {/* user name */}
                  <div className="py-3">
                    <p className="text-[#016961] text-xs font-bold">Full Name</p>
                    <p className="text-lg">Muhammad Minhajul Alam</p>
                  </div>

                  {/* user dob */}
                  <div className="py-3">
                    <p className="text-[#016961] text-xs font-bold">Dath Of Birth</p>
                    <p className="text-lg">27 june, 2001</p>
                  </div>

                  {/* user gander */}
                  <div className="py-3">
                    <p className="text-[#016961] text-xs font-bold">Gender</p>
                    <p className="text-lg">Male</p>
                  </div>
                  {/* user Profession */}
                  <div className="py-3">
                    <p className="text-[#016961] text-xs font-bold">Profession</p>
                    <p className="text-lg">Student</p>
                  </div>
                </div>
              </div>

              <hr className="w-[1px] h-40 bg-black hidden md:block" />

              {/* Address information */}
              <div className="text-center md:text-start">
                <h3 className="text-2xl font-bold pb-2">Address Info</h3>
                <div>
                  {/* user City */}
                  <div className="py-3">
                    <p className="text-[#016961] text-xs font-bold">City</p>
                    <p className="text-lg">Dhaka</p>
                  </div>

                  {/* user Street */}
                  <div className="py-3">
                    <p className="text-[#016961] text-xs font-bold">Street</p>
                    <p className="text-lg">Notun bazar</p>
                  </div>

                  {/* user Country */}
                  <div className="py-3">
                    <p className="text-[#016961] text-xs font-bold">Country</p>
                    <p className="text-lg">Bangladesh</p>
                  </div>
                  {/* user Address */}
                  <div className="py-3">
                    <p className="text-[#016961] text-xs font-bold">Address</p>
                    <p className="text-lg">Notun bazar, pani sottor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}

    </section>
  );
};

export default Profile;
