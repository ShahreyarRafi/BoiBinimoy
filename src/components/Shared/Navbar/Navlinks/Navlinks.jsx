import Link from "next/link";
import React from "react";

const Navlinks = () => {
  const navlinks = (
    <>
      <Link className=" py-2 px-3" href="/">
        <li>Home</li>
      </Link>
      <Link className=" py-2 px-3" href="/buyBooks">
        <li>All Books</li>
      </Link>
      <Link className=" py-2 px-3" href="/blogs">
        <li>Blogs</li>
      </Link>
      <Link className=" py-2 px-3" href="/aboutus">
        <li>About</li>
      </Link>
      <Link className=" py-2 px-3" href="/contact">
        <li>Contact</li>
      </Link>
      <Link className=" py-2 px-3" href="/dashboard">
        <li>Dashboard</li>
      </Link>
      <Link className=" py-2 px-3" href="/addBook">
        <li>Add Book</li>
      </Link>
      <Link
        className="border-2 border-white rounded-full py-2 px-3"
        href="/joinUs"
      >
        <li>Join Now</li>
      </Link>
    </>
  );
  return (
    <div>
      <ul className="flex flex-col md:flex-row justify-around sm:text-xs lg:text-sm uppercase py-1">
        {navlinks}
      </ul>
    </div>
  );
};

export default Navlinks;
