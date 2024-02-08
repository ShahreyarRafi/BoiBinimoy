"use client"

import UserNavLeft from '@/components/UserDashboard/UserNavLeft';

const layout = ({ children }) => {

    return (
        <div className='bg-teal-50'>
            <UserNavLeft></UserNavLeft>
            <div id='content'>
                {/*  MAIN */}
                <main className=''>
                    {/* MAIN */}
                    <div className='min-h-[90vh]'>
                        {children}
                    </div>
                    {/* <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="/dashboard">Dashboard</a>
                                </li>
                                <li><i className='bx bx-chevron-right' ></i></li>
                                <li>
                                    <a className="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </main>

            </div>
        </div>
    );
};

export default layout;