import React from "react";
import Banner from "../component/Banner";
import Services from "../component/Services";
import RecentProject from "../component/RecentProject";
import MissionVision from "../component/MissionVision";
import Blogs from "../component/Blogs";
import ContactForm from "../component/ContactForm";

const Home = () => {
  return (
    <div>
      <div id="bannerSection">
        <Banner />
      </div>
      <div id="servicesSection">
        <Services />
      </div>
      <div id="recentProjectSection">
        <RecentProject />
      </div>
      <div id="missionVisionSection">
        <MissionVision />
      </div>
      <div id="blogsSection">
        <Blogs />
      </div>
      <div id="contactSection">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
