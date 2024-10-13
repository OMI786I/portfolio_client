import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())

      .then((data) => setData(data));
  }, []);

  console.log(data);
  console.log(currentSlide);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleSlideChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  if (!data) {
    return (
      <span className="loading loading-spinner loading-lg text-center"></span>
    );
  } else
    return (
      <div className="p-5">
        <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent my-6 p-3">
          Recent Blogs
        </h1>

        <p className="text-2xl">
          As a blog writer, I share insights and knowledge with a global
          audience, educating and inspiring readers. Blogging helps you build
          connections, offer value, and grow as a thought leader while shaping
          your personal or professional brand.
        </p>

        <div>
          <div>
            <div>
              <Carousel
                additionalTransfrom={0}
                autoPlay
                autoPlaySpeed={3000}
                arrows={true}
                centerMode={false}
                className="w-full my-6"
                containerClass="w-full"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
                beforeChange={handleSlideChange}
              >
                {data
                  ? data.map((res) => (
                      <Link key={res._id} to={"/"}>
                        <div className=" lg:w-[300px] xl:w-[400px] rounded-xl border p-3">
                          <div className="overflow-hidden">
                            <img
                              src={res.image}
                              className="w-96 h-80 hover:scale-110 duration-500"
                            />
                          </div>
                          <div className="">
                            <p className="text-red-600 my-2">{res.topic}</p>
                            <h1 className="text-2xl my-2">{res.title}</h1>
                            <p className="text-gray-600">
                              Posted by{" "}
                              <span className="text-red-600">{res.author}</span>{" "}
                              {res.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                  : "loading..."}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;
