import Image from "next/image";
import { CiEdit } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="max-w-5xl mx-auto rounded-lg my-20 bg-teal-50 shadow-lg">
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
              <h6 className="text-lg font-bold">Wellcome, Minhajul!</h6>
            </div>
            <div>
              <button className="text-xl md:text-2xl">
                <CiEdit />
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Minhajul Alam
              </h2>
              <p className="font-sans text-xs md:text-sm font-light text-gray-100 py-1">
                Exchange 30k | Sell 15k | Post 34k
              </p>
              <p className="max-w-sm font-light">
                minhajulalam.muhammad@gmail.com
              </p>
              <p className="max-w-sm font-light">01800-000000</p>
            </div>
          </div>
        </div>
      </div>

      {/* personal information and contact Address */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 py-10">
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
  );
};

export default Profile;
