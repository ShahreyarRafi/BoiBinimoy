import Link from "next/link";
import React from "react";

const Navlinks = () => {
  const navlinks = (
    <>
      <Link className=" py-2 px-3 font-semibold" href="/">
        <li>Home</li>
      </Link>
      <Link className=" py-2 px-3 font-semibold" href="/buyBooks">
        <li>All Books</li>
      </Link>
      <Link className=" py-2 px-3 font-semibold" href="/blogs">
        <li>Blogs</li>
      </Link>
      <Link className=" py-2 px-3 font-semibold" href="/aboutus">
        <li>About</li>
      </Link>
      <Link className=" py-2 px-3 font-semibold" href="/contact">
        <li>Contact</li>
      </Link>
      <Link className=" py-2 px-3 font-semibold" href="/dashboard">
        <li>Dashboard</li>
      </Link>
      <Link
        className="border-2 border-white rounded-full py-2 px-3 font-semibold"
        href="/joinUs"
      >
        <li>Join Now</li>
      </Link>
    </>
  );
  return (
    <div>
      <ul className="flex justify-around text-xs uppercase">{navlinks}</ul>
    </div>
  );
};

export default Navlinks;
