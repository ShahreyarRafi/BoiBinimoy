

"use client";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import './joinUs.css'

const SocialLogin = () => {
  const { googleLogin, facebookLogin, twitterSignIn } = useContext(AuthContext);
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
        email: res?.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL,
      };


      console.log(" information", userInfo);

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
        <button
          onClick={() => handleSocialLogin(facebookLogin)}
          className="social-icon">
          <i><FaFacebookF /></i>

        </button>
        <button
          onClick={() => handleSocialLogin(twitterSignIn)}
          className="social-icon">
          <i><FaTwitter /></i>
        </button>

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
// import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
// import { AuthContext } from "@/providers/AuthProvider";
// import { useRouter } from "next/navigation";
// import { useContext } from "react";
// import { FcGoogle } from "react-icons/fc";
// import Swal from "sweetalert2";
// import './joinUs.css'

// const SocialLogin = () => {
//   const { googleLogin, facebookLogin, twitterSignIn } = useContext(AuthContext);
//   const router = useRouter();
//   const axiosPublic = useAxiosPublic();

//   const handleSocialLogin = async (user) => {
//     try {
//       const res = await user();
//       console.log("Login response:", res);

//       if (res.user) {
//         Swal.fire("User logged in successfully");

//         //  user email cheack
//         let email = res.user.email;
//         if (!email) {
//           // user email not found hole ai email nite parbe
//           email = prompt("Please enter your email:");
//         }

//         if (email) {
//           const userInfo = {
//             email: email,
//             name: res.user.displayName,
//             image: res.user.photoURL,
//           };

//           console.log("User information", userInfo);

//           const response = await axiosPublic.post("/api/v1/users", userInfo);
//           console.log(response.data);
//           Swal.fire('Sign up successful');
//           router.push('/');
//         } else {
//           Swal.fire('Email not provided!');
//         }
//       }
//     } catch (error) {
//       console.error("Error during social login:", error);
//       Swal.fire("An error occurred during social login.");
//     }
//   };

//   return (
//     <div>
//       <div className="social-media">
//         <button
//           onClick={() => handleSocialLogin(facebookLogin)}
//           className="social-icon">
//           <i><FaFacebookF /></i>
//         </button>

//         <button
//           onClick={() => handleSocialLogin(twitterSignIn)}
//           className="social-icon">
//           <i><FaTwitter /></i>
//         </button>

//         <button className="social-icon" onClick={() => handleSocialLogin(googleLogin)}>
//           <FaGoogle />
//         </button>
//         <a href="#" className="social-icon">
//           <i><FaLinkedinIn /></i>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SocialLogin;
