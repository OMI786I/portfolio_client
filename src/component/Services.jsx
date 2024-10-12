import React from "react";

const Services = () => {
  return (
    <div className="my-12">
      <div className="flex justify-around items-center">
        <h1 className=" p-2 text-5xl text-center font-bold bg-gradient-to-r from-green-900 to-green-400 bg-clip-text text-transparent my-6">
          Here is what I am good at
        </h1>

        <div className="flex flex-col justify-center items-center gap-4">
          {/* HTML & CSS */}
          <div>
            <h1 className="text-lg font-semibold">HTML & CSS</h1>
            <div className="flex items-center gap-2">
              <progress
                className="progress w-56 progress-success"
                value="90"
                max="100"
              ></progress>
              <span className="font-medium text-lg">90%</span>{" "}
            </div>
          </div>

          {/* JavaScript */}
          <div>
            <h1 className="text-lg font-semibold">JavaScript</h1>
            <div className="flex items-center gap-2">
              <progress
                className="progress w-56 progress-success"
                value="75"
                max="100"
              ></progress>
              <span className="font-medium text-lg">75%</span>{" "}
            </div>
          </div>

          {/* React */}
          <div>
            <h1 className="text-lg font-semibold">React</h1>
            <div className="flex items-center gap-2">
              <progress
                className="progress w-56 progress-success"
                value="80"
                max="100"
              ></progress>
              <span className="font-medium text-lg">80%</span>{" "}
            </div>
          </div>

          {/* Node.js */}
          <div>
            <h1 className="text-lg font-semibold">Node.js</h1>
            <div className="flex items-center gap-2">
              <progress
                className="progress w-56 progress-success"
                value="85"
                max="100"
              ></progress>
              <span className="font-medium text-lg">85%</span>{" "}
            </div>
          </div>

          {/* Express.js */}
          <div>
            <h1 className="text-lg font-semibold">Express.js</h1>
            <div className="flex items-center gap-2">
              <progress
                className="progress w-56 progress-success"
                value="80"
                max="100"
              ></progress>
              <span className="font-medium text-lg">80%</span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <h1 className=" p-2 text-5xl text-center font-bold bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent my-6">
          My Quality Services
        </h1>

        <p className="text-2xl text-center">These are the services I offer</p>
      </div>
    </div>
  );
};

export default Services;
