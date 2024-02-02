"use client"

import useAllUser from "@/Hooks/api/useAllUser";

const Users = () => {
    const [allUser] = useAllUser()
  console.log(allUser);
    return (
        <div>
            <h1> users {allUser.length} </h1>
        </div>
    );
};

export default Users;