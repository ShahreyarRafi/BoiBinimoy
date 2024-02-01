import Link from "next/link";
import React from "react";

const Navlinks = () => {
  const navlinks = (
    <>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/buyBooks">
        <li>All Books</li>
      </Link>
      <Link href="/blogs">
        <li>Blogs</li>
      </Link>
      <Link href="/aboutus">
        <li>About</li>
      </Link>
      <Link href="/contact">
        <li>Contact</li>
      </Link>
      <Link href="/category">
        <li>Category</li>
      </Link>
      <Link href="/dashboard">
        <li>Dashboard</li>
      </Link>
      <Link href="/register">
        <li>Register</li>
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
