"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import placeholder from "./img/people.png";
import "./style.css";
import { AuthContext } from "@/providers/AuthProvider";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
 

  const [componentsMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    setComponentMounted(true);
  }, []);

  useEffect(() => {
    if (componentsMounted) {
      initializeDashboard();
    }
  }, [componentsMounted]);

  function initializeDashboard() {
    console.log("UserDashboard component mounted");

    const allSideMenu = document.querySelectorAll(
      "#sidebar .side-menu.top li a"
    );

    allSideMenu.forEach((item) => {
      const li = item.parentElement;

      item.addEventListener("click", function () {
        allSideMenu.forEach((i) => {
          i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
      });
    });

    // TOGGLE SIDEBAR
    const menuBar = document.querySelector("#content nav .bx.bx-menu");
    const sidebar = document.getElementById("sidebar");

    menuBar.addEventListener("click", function () {
      sidebar.classList.toggle("hide");
    });

    const searchButton = document.querySelector(
      "#content nav form .form-input button"
    );
    const searchButtonIcon = document.querySelector(
      "#content nav form .form-input button .bx"
    );
    const searchForm = document.querySelector("#content nav form");

    searchButton.addEventListener("click", function (e) {
      if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle("show");
        if (searchForm.classList.contains("show")) {
          searchButtonIcon.classList.replace("bx-search", "bx-x");
        } else {
          searchButtonIcon.classList.replace("bx-x", "bx-search");
        }
      }
    });

    if (window.innerWidth < 768) {
      sidebar.classList.add("hide");
    } else if (window.innerWidth > 576) {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
      searchForm.classList.remove("show");
    }

    window.addEventListener("resize", function () {
      if (this.innerWidth > 576) {
        searchButtonIcon.classList.replace("bx-x", "bx-search");
        searchForm.classList.remove("show");
      }
    });

    const switchMode = document.getElementById("switch-mode");

    switchMode.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    });
  }

  return (
    <>
      {/*  SIDEBAR */}
      <section id="sidebar">
        <a href="/" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">BoiBinimoy</span>
        </a>

        <div className="text-center ">
          <li className="active">
            <Image
              src={user?.photoURL}
              alt="user"
              priority
              width={100}
              height={100}
              style={{
                width: "50px",
                height: "50px",
              }}
              className=" rounded-full"
            />
          </li>
        </div>

        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/addBook">
              <i className="bx bxs-book-add"></i>
              <span className="text">Add Book</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">My Store</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-message-dots"></i>
              <span className="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-group"></i>
              <span className="text">Team</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/users">
              <i className="bx bxs-group"></i>
              <span className="text">Users</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/userProfile">
              <i className="bx bxs-group"></i>
              <span className="text">Profile</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog"></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
      {/*  SIDEBAR */}

            {/*  CONTENT */}
            <section id="content">
                {/*  NAVBAR */}
                <nav>
                    <i className='bx bx-menu'></i>
                    <a href="#" className="nav-link">Categories</a>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden />
                    <label for="switch-mode" className="switch-mode"></label>
                    <a href="#" className="notification">
                        <i className='bx bxs-bell' ></i>
                        <span className="num">8</span>
                    </a>
                    <a href="#" className="profile">
                        <Image src={placeholder} alt='' />
                    </a>
                </nav>
                {/*  NAVBAR */}

                {/*  MAIN */}
                <main className='min-h-[100svh]'>
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i className='bx bx-chevron-right' ></i></li>
                                <li>
                                    <a className="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-[75svh] flex items-center justify-center">
                        <h1 className="text-xl font-medium">Additional dashboard items will appear here</h1>
                    </div>
                </main>
                {/* MAIN */}
            </section>
        </>
    );
};

export default UserDashboard;
