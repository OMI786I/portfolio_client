import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentProject = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-5">
      <div>
        <h1 className="text-3xl md:text-5xl text-center font-bold bg-gradient-to-r from-green-900 to-green-400 bg-clip-text text-transparent my-6 p-3">
          My recent projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 my-12 ">
          {data.map((res) => (
            <div
              key={res.id}
              className="card card-compact bg-base-100 w-full md:w-80 xl:w-[300px] 2xl:w-96 shadow-xl"
            >
              <figure>
                <img src={res.image} className="w-80" alt="Shoes" />
              </figure>
              <div className="card-body bg-success text-white">
                <h2 className="card-title">{res.title}</h2>
                <p>{res.description}</p>
                <Link to={res.link}>
                  {" "}
                  <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Visit</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
