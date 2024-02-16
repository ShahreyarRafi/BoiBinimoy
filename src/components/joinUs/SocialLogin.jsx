

"use client";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const handleSocialLogin = async (user) => {
    try {
      const res = await user();
      console.log("Google login response:", res.user);
      
      if (res.user) {
        Swal.fire("User logged in successfully");
      }

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL,
      };


      console.log(" information" ,userInfo);

      const response = await axiosPublic.post("/api/v1/users", userInfo);
                    console.log(response.data)
                    Swal.fire('Sign up successfull')
                    router.push('/')
    } catch (error) {
      console.error("Error during social login:", error);
      Swal.fire("An error occurred during social login.");
    }
  };

  return (
<div>
<div className="social-media">
    <a href="#" className="social-icon">
        <i><FaFacebookF /></i>
    </a>
    <a href="#" className="social-icon">
        <i><FaTwitter /></i>
    </a>
    <button className="social-icon"
        onClick={() => handleSocialLogin(googleLogin)}
        >
        <FaGoogle />
    </button>
    <a href="#" className="social-icon">
        <i><FaLinkedinIn /></i>
    </a>
</div>
</div>
  );
};

export default SocialLogin;




















// "use client";

// import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
// import { AuthContext } from "@/providers/AuthProvider";
// import { useRouter } from "next/navigation";
// import { useContext } from "react";
// import { FcGoogle } from "react-icons/fc";
// import Swal from "sweetalert2";

// const SocialLogin = () => {
//   const { googleLogin } = useContext(AuthContext);
//   const router = useRouter();
//   const axiosPublic = useAxiosPublic()

//   const handleSocialLogin = (user) => {
//     user().then((res) => {
//       console.log(res.user);
//       if (res.user) {
//         Swal.fire("User logged in successfully",)
//       };

//       const userInfo = {
//         email: res.user?.email,
//         name: res.user?.displayName,
//         image: res.user?.photoURL
//       }

//       axiosPublic.post("/api/v1/users", userInfo)
//         .then(res => {
//           console.log(res.data);
//           router.push("/");

//         })

//     }).catch(error => {
//       Swal.fire(error);

//     });
//   };

//   return (
//     <>

//       <div className=" flex-col flex items-center justify-center px-10">
//         <button
//           onClick={() => handleSocialLogin(googleLogin)}
//           className="border-2 border-black rounded-full py-2 w-full flex items-center justify-center font-bold gap-1"
//         >
//           <span className=" text-xl">
//             <FcGoogle></FcGoogle>
//           </span>
//           <span className="text-fuchsia-600 font-semibold ">
//             Login With Google
//           </span>
//         </button>
//       </div>
    
//     </>
//   );
// };

// export default SocialLogin;
