import React from 'react';
import Image from 'next/image';
import placeholder from './img/people.png'
import './style.css'

const UserNavTop = () => {
    return (
        <>
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
                    <label for="switch-mode" className="switch-mode"></label>
                    <a href="#" className="notification">
                        <i className='bx bxs-bell' ></i>
                        <span className="num">8</span>
                    </a>
                    <a href="#" className="profile">
                        <Image src={placeholder} alt='profile' />
                    </a>
                </nav>
                {/*  NAVBAR */}
            </section>
        </>
    );
};

export default UserNavTop;