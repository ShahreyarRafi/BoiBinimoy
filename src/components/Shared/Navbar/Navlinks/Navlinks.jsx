import Link from "next/link";
import React from "react";

const Navlinks = () => {
  const navlinks = (
    <>
      <Link className=" py-2 px-3 font-bold" href="/">
        <li>Home</li>
      </Link>
      <Link className=" py-2 px-3 font-bold" href="/buyBooks">
        <li>All Books</li>
      </Link>
      <Link className=" py-2 px-3 font-bold" href="/blogs">
        <li>Bologs</li>
      </Link>
      <Link className=" py-2 px-3 font-bold" href="/aboutus">
        <li>About</li>
      </Link>
      <Link className=" py-2 px-3 font-bold" href="/contact">
        <li>Contact</li>
      </Link>
      <Link className=" py-2 px-3 font-bold" href="/dashboard">
        <li>Dashboard</li>
      </Link>
      <Link className=" py-2 px-3 font-bold" href="/addBook">
        <li>Add Book</li>
      </Link>
      <Link
        className="border-2 border-white rounded-full py-2 px-3 font-bold"
        href="/joinUs"
      >
        <li>Join Now</li>
      </Link>
    </>
  );
  return (
    <>
      <ul className="flex justify-around text-xs uppercase py-1">{navlinks}</ul>
    </>
  );
};

export default Navlinks;
