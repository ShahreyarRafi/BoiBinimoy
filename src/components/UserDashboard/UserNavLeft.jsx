"use client"

import { useContext, useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const UserNavLeft = () => {
  const { user, logOut } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);
  const [fetchData, setFetchData] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (fetchData) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://boi-binimoy-server.vercel.app/api/v1/users/${user?.email}`
          );
          setCurrentUser(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
    }
  }, [fetchData, user?.email]);


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
    const allSideMenu = document.querySelectorAll(
      "#sidebar .side-menu.top li a"
    );

    allSideMenu.forEach((item) => {
      const li = item.parentElement;
      if (li) { // Check if li exists
        item.addEventListener("click", function () {
          allSideMenu.forEach((i) => {
            const parentLi = i.parentElement;
            if (parentLi) { // Check if parentLi exists
              parentLi.classList.remove("active");
            }
          });
          li.classList.add("active");
        });
      }
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
      <section id="sidebar">
        <Link href="/" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">BoiBinimoy</span>
        </Link>

        <>
          <ul className="side-menu top">
            <li className={pathname == "/dashboard" ? "active" : ""}>
              <Link href="/dashboard">
                <i className="bx bxs-dashboard"></i>
                <span className="text">Dashboard</span>
              </Link>
            </li>
            <li className={pathname == "/dashboard/addblog" ? "active" : ""}>
              <Link href="/dashboard/addBlog">
                <i className="bx bxs-book-add"></i>
                <span className="text">Add Blog</span>
              </Link>
            </li>
            <li className={pathname == "/dashboard/addbook" ? "active" : ""}>
              <Link href="/dashboard/addbook">
                <i className="bx bxs-book-add"></i>
                <span className="text">Add Book</span>
              </Link>
            </li>
            <li className={pathname == "/dashboard/list-exchange" ? "active" : ""}>
              <Link href="/dashboard/list-exchange">
                <i className="bx bxs-book-add"></i>
                <span className="text">List Book</span>
              </Link>
            </li>
            <li className={pathname == "/dashboard/profile" ? "active" : ""}>
              <Link href="/dashboard/profile">
                <i className="bx bxs-group"></i>
                <span className="text">Profile</span>
              </Link>
            </li>
            <li className={pathname == "/dashboard/users" ? "active" : ""}>
              <Link href="/dashboard/users">
                <i className="bx bxs-group"></i>
                <span className="text">Users</span>
              </Link>
            </li>
            <li className={pathname == "/dashboard/analytics" ? "active" : ""}>
              <Link href="#">
                <i className="bx bxs-doughnut-chart"></i>
                <span className="text">Analytics</span>
              </Link>
            </li>
            <li className={pathname == "/dashboard/message" ? "active" : ""}>
              <Link href="/dashboard/message">
                <i className="bx bxs-message-dots"></i>
                <span className="text">Message</span>
              </Link>
            </li>
          </ul>
        </>

        <ul className="side-menu">
          <li>
            <Link href="#">
              <i className="bx bxs-cog"></i>
              <span className="text">Settings</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <button onClick={logOut}> <span className="text">Logout</span> </button>
            </Link>
          </li>
        </ul>
      </section>

      {/*TOP  CONTENT */}
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
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className='bx bxs-bell' ></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <Image src={currentUser?.image}
              alt='profile'
              priority
              width={300}
              height={300} />
          </a>
        </nav>
        {/*  NAVBAR */}
      </section>
    </>
  );
};

export default UserNavLeft;
