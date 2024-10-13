import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer bg-success text-neutral-content p-10">
      <nav>
        <Link
          to="servicesSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <button className=" font-bold p-2 duration-200 hover:border-b-green-600 ">
            Services
          </button>
        </Link>
      </nav>
      <nav>
        <Link
          to="recentProjectSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <button className="font-bold p-2 duration-200 hover:border-b-green-600 ">
            Recent Projects
          </button>
        </Link>
      </nav>
      <nav>
        <Link
          to="missionVisionSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <button className="font-bold p-2 duration-200 hover:border-b-green-600 ">
            Mission & Vision
          </button>
        </Link>
      </nav>
      <nav>
        <Link
          to="blogsSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <button className="font-bold p-2 duration-200 hover:border-b-green-600 ">
            Blogs
          </button>
        </Link>
      </nav>
      <nav>
        <Link
          to="contactSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <button className="font-bold p-2 duration-200 hover:border-b-green-600 ">
            Contact
          </button>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
