import React from "react";
import { FaDownload } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="px-20">
      <div>
        <h3 className="text-3xl font-bold text-green-950">I am Omi</h3>
        <h1 className="text-7xl font-bold bg-gradient-to-r from-green-900 to-green-400 bg-clip-text text-transparent my-6">
          Web Developer
        </h1>
        <p className="text-2xl">
          I'm a passionate web developer with expertise in building responsive,
          user-friendly websites and web applications. Skilled in HTML, CSS,
          JavaScript, React, Node.js, Express & Mongodb. I focus on clean,
          efficient code and seamless user experiences. I enjoy working
          collaboratively and staying updated with the latest industry trends to
          create modern, impactful digital solutions.
        </p>
        <div className="my-10 flex">
          <button
            type="button"
            className="text-green-600 bg-white hover:bg-green-800 outline outline-green-600 outline-1
            focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
            hover:text-white
             duration-150 flex items-center gap-2
            "
          >
            Download CV <FaDownload />
          </button>

          <button className="btn">Linkedin</button>
          <button className="btn">Github</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
