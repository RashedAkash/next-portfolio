"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="navbar bg-base-100">
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
                    pathname === "/" ? "text-[#0bbe97]" : "text-[#777]"
                  } no-underline`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/about" ? "text-[#0bbe97]" : "text-[#777]"
                  } no-underline`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/projects" ? "text-[#0bbe97]" : "text-[#777]"
                  } no-underline`}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link
                className={`link ${
                  pathname === "/" ? "text-[#0bbe97]" : "text-[#777]"
                } no-underline`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/about" ? "text-[#0bbe97]" : "text-[#777]"
                } no-underline `}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/projects" ? "text-[#0bbe97]" : "text-[#777]"
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
            className=" text-black no-underline bg-[#27cea4] px-6 py-2 rounded-3xl"
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
