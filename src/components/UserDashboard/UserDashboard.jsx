"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import placeholder from './img/people.png'
import './style.css'

const UserDashboard = () => {

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
        console.log('UserDashboard component mounted');

        const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

        allSideMenu.forEach((item) => {
            const li = item.parentElement;

            item.addEventListener('click', function () {
                allSideMenu.forEach((i) => {
                    i.parentElement.classList.remove('active');
                });
                li.classList.add('active');
            });
        });

        // TOGGLE SIDEBAR
        const menuBar = document.querySelector('#content nav .bx.bx-menu');
        const sidebar = document.getElementById('sidebar');

        menuBar.addEventListener('click', function () {
            sidebar.classList.toggle('hide');
        })

        const searchButton = document.querySelector('#content nav form .form-input button');
        const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
        const searchForm = document.querySelector('#content nav form');

        searchButton.addEventListener('click', function (e) {
            if (window.innerWidth < 576) {
                e.preventDefault();
                searchForm.classList.toggle('show');
                if (searchForm.classList.contains('show')) {
                    searchButtonIcon.classList.replace('bx-search', 'bx-x');
                } else {
                    searchButtonIcon.classList.replace('bx-x', 'bx-search');
                }
            }
        });

        if (window.innerWidth < 768) {
            sidebar.classList.add('hide');
        } else if (window.innerWidth > 576) {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
        }

        window.addEventListener('resize', function () {
            if (this.innerWidth > 576) {
                searchButtonIcon.classList.replace('bx-x', 'bx-search');
                searchForm.classList.remove('show');
            }
        });

        const switchMode = document.getElementById('switch-mode');

        switchMode.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        });

    }


    return (
        <>
            {/*  SIDEBAR */}
            <section id="sidebar">
                <a href="#" class="brand">
                    <i class='bx bxs-smile'></i>
                    <span class="text">BoiBinimoy</span>
                </a>
                <ul class="side-menu top">
                    <li class="active">
                        <a href="#">
                            <i class='bx bxs-dashboard' ></i>
                            <span class="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-shopping-bag-alt' ></i>
                            <span class="text">My Store</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-doughnut-chart' ></i>
                            <span class="text">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-message-dots' ></i>
                            <span class="text">Message</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-group' ></i>
                            <span class="text">Team</span>
                        </a>
                    </li>
                </ul>
                <ul class="side-menu">
                    <li>
                        <a href="#">
                            <i class='bx bxs-cog' ></i>
                            <span class="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="logout">
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>
            {/*  SIDEBAR */}



            {/*  CONTENT */}
            <section id="content">
                {/*  NAVBAR */}
                <nav>
                    <i class='bx bx-menu'></i>
                    <a href="#" class="nav-link">Categories</a>
                    <form action="#">
                        <div class="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden />
                    <label for="switch-mode" class="switch-mode"></label>
                    <a href="#" class="notification">
                        <i class='bx bxs-bell' ></i>
                        <span class="num">8</span>
                    </a>
                    <a href="#" class="profile">
                        <Image src={placeholder} alt='' />
                    </a>
                </nav>
                {/*  NAVBAR */}

                {/*  MAIN */}
                <main class='min-h-[100svh]'>
                    <div class="head-title">
                        <div class="left">
                            <h1>Dashboard</h1>
                            <ul class="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i class='bx bx-chevron-right' ></i></li>
                                <li>
                                    <a class="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full h-[75svh] flex items-center justify-center">
                        <h1 class="text-xl font-medium">Additional dashboard items will appear here</h1>
                    </div>
                </main>
                {/* MAIN */}
            </section>
        </>
    );
};

export default UserDashboard;
