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
      <Banner />
      <Services />
      <RecentProject />
      <MissionVision />
      <Blogs />
      <ContactForm />
    </div>
  );
};

export default Home;
