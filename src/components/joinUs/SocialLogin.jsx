"use client";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


const SocialLogin = () => {
  const { googleLogin, facebookLogin, twitterSignIn } = useContext(AuthContext);
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const handleSocialLogin = async (user) => {
    try {
      const res = await user();

      if (res.user) {
        Swal.fire("User logged in successfully");
      }

      const userInfo = {
        email: res?.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL,
      };

      const response = await axiosPublic.post("/api/v1/users", userInfo);
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

