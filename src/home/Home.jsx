import React from "react";
import Banner from "../component/Banner";
import Services from "../component/Services";
import RecentProject from "../component/RecentProject";
import MissionVision from "../component/MissionVision";
import Blogs from "../component/Blogs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <RecentProject />
      <MissionVision />
      <Blogs />
    </div>
  );
};

export default Home;
