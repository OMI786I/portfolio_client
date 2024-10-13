import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className=" px-1 md:px-20 pt-24 grid md:grid-cols-2 grid-cols-1 items-center justify-center ">
        <div>
          <h3 className="lg:text-3xl text-3xl font-bold text-green-950">
            I am Omi
          </h3>
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-green-900 to-green-400 bg-clip-text text-transparent my-6">
            Web Developer
          </h1>

          <div className="hover:rotate-3 duration-150 flex md:hidden justify-self-center w-full my-5 ">
            <img
              src="/assets/banner_image.png"
              className="rounded-xl w-full"
            ></img>
          </div>

          <p className=" text-xl lg:text-2xl">
            I'm a passionate web developer with expertise in building
            responsive, user-friendly websites and web applications. Skilled in
            HTML, CSS, JavaScript, React, Node.js, Express & Mongodb. I focus on
            clean, efficient code and seamless user experiences. I enjoy working
            collaboratively and staying updated with the latest industry trends
            to create modern, impactful digital solutions.
          </p>
        </div>
        <div className="hover:rotate-3 duration-150 hidden md:flex justify-self-center ">
          <img src="/assets/banner_image.png" className="rounded-xl"></img>
        </div>
      </div>
      <div className="my-10 md:px-20 flex flex-col md:flex-row gap-3 md:gap-8 items-center">
        <a
          href="/Resume_Tahid.pdf"
          download
          className="text-green-600 bg-white hover:bg-green-800 outline outline-green-600 outline-1
  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg px-8 py-4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
  hover:text-white duration-150 flex items-center gap-3"
        >
          Download CV <FaDownload />
        </a>
        <div className="flex gap-4">
          {" "}
          <Link
            to={"https://www.linkedin.com/in/touhid-sohrawardy-omi-741832332/"}
          >
            <button
              type="button"
              className="text-green-600 bg-white hover:bg-green-800 outline outline-green-600 outline-1
          focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm w-12 h-12 flex items-center justify-center hover:text-white duration-150
          "
            >
              <LiaLinkedin className="text-xl" />
            </button>
          </Link>
          <Link to={"https://github.com/OMI786I"}>
            <button
              type="button"
              className="text-green-600 bg-white hover:bg-green-800 outline outline-green-600 outline-1
      focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm w-12 h-12 flex items-center justify-center hover:text-white duration-150
      "
            >
              <BsGithub className="text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
