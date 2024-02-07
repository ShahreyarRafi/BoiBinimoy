import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import useAdmin from "@/Hooks/useAdmin";
import { AuthContext } from "@/providers/AuthProvider";

const UserNavLeft = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

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

      item.addEventListener("click", function () {
        allSideMenu.forEach((i) => {
          i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
      });
      // console.log(li);
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
        <a href="/" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">BoiBinimoy</span>
        </a>

        {isAdmin ? (
          <>
            <ul className="side-menu top">
              <li className="active">
                <a href="/dashboard">
                  <i className="bx bxs-dashboard"></i>
                  <span className="text">Dashboard</span>
                </a>
              </li>
              <li>
                <Link href="/dashboard/addbook">
                  <i className="bx bxs-book-add"></i>
                  <span className="text">Add Book</span>
                </Link>
              </li>


              
              {/* <li>
                <Link href="/dashboard/profile">
                  <i className="bx bxs-group"></i>
                  <span className="text">Profile</span>
                </Link>
              </li> */}


              <li>
                <Link href="/dashboard/users">
                  <i className="bx bxs-group"></i>
                  <span className="text">Users</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="bx bxs-doughnut-chart"></i>
                  <span className="text">Analytics</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="bx bxs-message-dots"></i>
                  <span className="text">Message</span>
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="side-menu top">
              <li className="active">
                <a href="/dashboard">
                  <i className="bx bxs-dashboard"></i>
                  <span className="text">Dashboard</span>
                </a>
              </li>
              <li>
                <Link href="/dashboard/addbook">
                  <i className="bx bxs-book-add"></i>
                  <span className="text">Add Book</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/profile">
                  <i className="bx bxs-group"></i>
                  <span className="text">Profile</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/users">
                  <i className="bx bxs-group"></i>
                  <span className="text">Users</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="bx bxs-doughnut-chart"></i>
                  <span className="text">Analytics</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/message">
                  <i className="bx bxs-message-dots"></i>
                  <span className="text">Message</span>
                </Link>
              </li>
            </ul>
          </>
        )}

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
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default UserNavLeft;
