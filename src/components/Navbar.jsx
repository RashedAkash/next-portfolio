"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";



const Navbar = () => {
  
   const [sticky, setSticky] = useState(false);
   const pathname = usePathname();
   useEffect(() => {
     const handleScroll = () => {
       const offset = window.scrollY;
       if (offset > 0) {
         setSticky(true);
       } else {
         setSticky(false);
       }
     };
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.addEventListener("scroll", handleScroll);
     };
   }, []);
  return (
    <div className=" fixed top-0 left-0 right-0 max-w-screen-xl mx-auto z-20  ">
      <div
        className={`navbar ${
          sticky
            ? "shadow-xl transition-all  bg-base-100 duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className={`link ${
                    pathname === "/" ? "text-pink-700" : "text-[#777]"
                  } no-underline`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/about" ? "text-pink-700" : "text-[#777]"
                  } no-underline`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/projects" ? "text-pink-700" : "text-[#777]"
                  } no-underline`}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            Rashed <span className=" text-pink-700"> Hossain </span>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium ">
            <li>
              <Link
                className={`link ${
                  pathname === "/" ? "text-pink-700" : "text-[#777]"
                } no-underline`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/about" ? "text-pink-700" : "text-[#777]"
                } no-underline `}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/projects" ? "text-pink-700" : "text-[#777]"
                } no-underline`}
                href="/projects"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            className=" font-semibold no-underline bg-pink-700 text-white px-6 py-2 rounded-3xl"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
