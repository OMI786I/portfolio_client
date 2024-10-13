import React from "react";
import { BsEye } from "react-icons/bs";
import { BsBullseye } from "react-icons/bs";
const MissionVision = () => {
  return (
    <div className="mx-4">
      <h1 className="text-3xl md:text-5xl text-center font-bold bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent my-6 p-3">
        My Mission and vision
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <div className="bg-green-600  p-10 rounded-xl relative overflow-hidden -z-20">
          <h1 className="text-3xl text-white">My</h1>
          <h1 className="text-4xl text-green-800 my-1 font-bold">Vision</h1>
          <p className="text-white">
            My Vision is to create innovative, accessible, and impactful digital
            solutions that drive the future of the web, enhancing user
            experiences while fostering sustainability and inclusivity.
          </p>
          <div className="absolute right-10 bottom-0 -z-10 ">
            <BsEye className="text-9xl text-green-800" />
          </div>
        </div>
        <div className="bg-green-600  p-10 rounded-xl relative overflow-hidden -z-20">
          <h1 className="text-3xl text-white">My</h1>
          <h1 className="text-4xl text-green-800 my-1 font-bold">Mission</h1>
          <p className="text-white">
            My mission is to build efficient, user-friendly websites and
            applications that solve problems, enhance user experiences, and stay
            aligned with modern web standards and technologies.
          </p>
          <div className="absolute right-5 top-3 -z-10 ">
            <BsBullseye className="text-9xl text-green-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
