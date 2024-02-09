"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const currentPath = usePathname();

  const navlinks = (
    <div className="md:flex items-center justify-around gap-10">
      <Link className={currentPath === "/" && "active-link"} href="/">
        <li>Home</li>
      </Link>
      <Link
        className={currentPath === "/buyBooks" && "active-link"}
        href="/buyBooks"
      >
        <li>All Books</li>
      </Link>
      <Link className={currentPath === "/blogs" && "active-link"} href="/blogs">
        <li>Blogs</li>
      </Link>
      <Link
        className={currentPath === "/aboutus" && "active-link"}
        href="/aboutus"
      >
        <li>About</li>
      </Link>
      <Link
        className={currentPath === "/contact" && "active-link"}
        href="/contact"
      >
        <li>Contact</li>
      </Link>
      <Link
        className={` ${currentPath === "/dashboard" && "active-link"}`}
        href="/dashboard"
      >
        <li>Dashboard</li>
      </Link>
      <Link
        className={currentPath === "/addBook" && "active-link"}
        href="/addBook"
      >
        <li>Add Book</li>
      </Link>
      <Link
        className="border-2 border-white rounded-full py-2 px-3"
        href="/joinUs"
      >
        <li>Join Now</li>
      </Link>
    </div>
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
