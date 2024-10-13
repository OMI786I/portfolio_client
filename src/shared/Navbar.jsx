import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLink = (
    <div className=" flex gap-4  ">
      <Link
        to="servicesSection"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <button className="border-b p-2 duration-200 hover:border-b-green-600 ">
          Services
        </button>
      </Link>

      <Link
        to="recentProjectSection"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <button className="border-b p-2 duration-200 hover:border-b-green-600 ">
          Recent Projects
        </button>
      </Link>

      <Link
        to="missionVisionSection"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <button className="border-b p-2 duration-200 hover:border-b-green-600 ">
          Mission & Vision
        </button>
      </Link>

      <Link
        to="blogsSection"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <button className="border-b p-2 duration-200 hover:border-b-green-600 ">
          Blogs
        </button>
      </Link>

      <Link
        to="contactSection"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <button className="border-b p-2 duration-200 hover:border-b-green-600 ">
          Contact
        </button>
      </Link>
    </div>
  );

  return (
    <div>
      <div className="navbar fixed z-50 bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

        <div className="navbar-end">
          <Link
            to="contactSection"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            {" "}
            <button className="btn btn-success text-white">Hire me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
