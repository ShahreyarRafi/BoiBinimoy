"use client"

import AddBook from "@/components/AddBook/AddBook";

const page = () => {
    return (
        <div>
            {/*  MAIN */}
            <main class='min-h-[100svh]'>
                <div class="head-title">
                    <div class="left">
                        <h1>Dashboard</h1>
                        <ul class="breadcrumb">
                            <li>
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li><i class='bx bx-chevron-right' ></i></li>
                            <li>
                                <a class="active" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div class="w-full h-[75svh] flex items-center justify-center">
                    <h1 class="text-xl font-medium">Additional dashboard items will appear here</h1>
                </div> */}

                <div class="w-full h-[75svh]">
                    <AddBook></AddBook>
                </div>
            </main>
            {/* MAIN */}
        </div>
    );
};

export default page;