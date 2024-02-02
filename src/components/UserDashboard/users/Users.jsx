"use client"

import useAllUser from "@/Hooks/api/useAllUser";
import UserCard from "@/components/Shared/UserCard";

const Users = () => {
    const [allUser] = useAllUser()

    return (
        <div>
            <div className="grid grid-cols-5 gap-5 p-10">
                {
                    allUser?.map(user => <UserCard key={user?._id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default Users;