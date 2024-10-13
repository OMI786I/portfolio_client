import {
  FcCommandLine,
  FcDocument,
  FcEditImage,
  FcGlobe,
} from "react-icons/fc";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Building responsive and scalable websites using modern technologies like HTML, CSS, JavaScript, React, and backend technologies like Node.js and Express.",
      icon: <FcCommandLine />,
    },
    {
      id: 2,
      name: "Web Design",
      description:
        "Designing visually appealing, user-friendly, and modern web layouts, including UI/UX design, prototyping, and wireframing using tools like Figma, Adobe XD, and Sketch.",
      icon: <FcGlobe />,
    },
    {
      id: 3,
      name: "Graphic Design",
      description:
        "Creating unique and professional graphics for brands, including logos, brochures, banners, and social media graphics using Adobe Photoshop, Illustrator, and InDesign.",
      icon: <FcEditImage />,
    },
    {
      id: 4,
      name: "Technical Writing",
      description:
        "Providing detailed and clear technical documentation, user manuals, API documentation, and tutorials for software products and services.",
      icon: <FcDocument />,
    },
  ];

  return (
    <div className="my-12">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <h1 className=" p-2 text-3xl lg:text-5xl text-center font-bold bg-gradient-to-r from-green-900 to-green-400 bg-clip-text text-transparent my-6">
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
        <h1 className=" p-2 text-3xl md:text-5xl text-center font-bold bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent my-6">
          My Quality Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6 p-5">
          {" "}
          {services.map((res) => (
            <div
              key={res.id}
              className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 
                       hover:bg-green-600 group transition duration-300"
            >
              <span className="text-7xl group-hover:text-white transition duration-300">
                {" "}
                {res.icon}
              </span>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-white transition duration-300">
                {res.name}
              </h5>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-white transition duration-300">
                {res.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
