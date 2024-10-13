import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const params = useParams();
  const [data, setData] = useState();
  console.log(params.id);

  //http://localhost:5000/blogs/670b4da2c4d551de493ed827

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${params.id}`)
      .then((response) => response.json())

      .then((data) => setData(data));
  }, [params.id]);

  console.log(data);
  if (!data) {
    return (
      <span className="loading loading-spinner loading-lg text-center"></span>
    );
  }
  return (
    <div>
      <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <div>
          <img src={data.image} className="h-56 w-full object-center" />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">{data.title}</h1>

        {/* Blog Date */}
        <p className="text-sm text-gray-500 mb-4">Published on: {data.date}</p>

        {/* Blog Description */}
        <p className="text-lg text-gray-700 mb-8">{data.description}</p>

        {/* Blog Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Steps</h2>

          <div id="blog-steps">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4"
              >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  {step.title}
                </div>
                <div className="collapse-content">
                  <p>{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Blogs Button */}
        <div className="mt-6">
          <button
            className="btn btn-success text-white"
            onClick={() => window.history.back()}
          >
            Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
