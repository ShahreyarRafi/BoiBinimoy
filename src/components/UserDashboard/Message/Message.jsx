"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch, IoSearchCircle } from "react-icons/io5";

export default function Message() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/v1/users");
      const data = await res.json();
      setUsers(data);
    };
  }, []);
  return (
    <div className="max-w-[1800px] mx-3 bg text-white rounded-lg p-5 h-[86vh] mb-10">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-teal-700 p-2">
              <IoSearch />
            </span>
            <input
              type="text"
              name="text"
              className="px-3 py-2 text-teal-700"
              placeholder="Search..."
            />
          </div>

          <div>
            {users.map((item) => (
              <div>
                <img src={item.profile} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
