"use client"

import UserNavLeft from '@/components/UserDashboard/UserNavLeft';
import UserNavTop from '@/components/UserDashboard/UserNavTop';

const layout = ({ children }) => {

    return (
        <div>
            <UserNavLeft></UserNavLeft>
            <UserNavTop></UserNavTop>
            <div id='content'>
                {/*  MAIN */}
                <main className=''>
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
                {/* MAIN */}
                <div className='min-h-[90vh] '>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;