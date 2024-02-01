"use client"

import UserNavTop from "@/components/UserDashboard/UserNavTop";
import UserNavLeft from "@/components/UserDashboard/userNavLeft";

const layout = () => {

    return (
        <div>
            <UserNavLeft></UserNavLeft>
            <UserNavTop></UserNavTop>
        </div>
    );
};

export default layout;