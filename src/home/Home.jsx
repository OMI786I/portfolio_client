import React from "react";
import Banner from "../component/Banner";
import Services from "../component/Services";
import RecentProject from "../component/RecentProject";
import MissionVision from "../component/MissionVision";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <RecentProject />
      <MissionVision />
    </div>
  );
};

export default Home;
