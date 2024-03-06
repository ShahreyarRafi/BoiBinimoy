"use client";

import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { auth } from "@/utils/firebase.config";
import Cookies from "js-cookie";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  Github Login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfiole = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //   loging  Account
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logOut account
  const logOut = async () => {
    Cookies.remove("token", { path: "/", secure: false, sameSite: "Strict" });
    console.log("token removed");
    localStorage.removeItem("email")
    return signOut(auth);
  };

  // using Obseverb    ata  user ke  deka suna kore

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      localStorage.setItem("email", user?.email);
      if (user?.email) {
        const userEmail = { email: user?.email };
        axiosPublic
          .post("/jwt", userEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("totken data: ", res.data);
          });
      }

      // console.log("token: ",res.data)
    });
    return () => {
      unSubcribe();
    };
  }, [axiosPublic]);

  // console.log(user);

  console.log("current user --> : ", user);

  const authentication = {
    googleLogin,
    githubLogin,
    createUser,
    user,
    signin,
    logOut,
    loading,
    handleUpdateProfile,
    updateUserProfiole,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;