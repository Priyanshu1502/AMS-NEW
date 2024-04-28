import React from "react";
import TopProfile from "../components/TopProfile";
import Experience from "../components/Exprience";
import SeePost from "../components/SeePost";
import Skill from "../components/Skill";
import Education from "../components/Education";

const Profile = () => {
  return (
    <div className="bg-[#e3e3e3] lg:w-full lg:flex lg:flex-col lg:gap-0 lg:max-h-screen md:w-full  md:gap-0 sm:w-full sm:flex-col sm:flex lg:pb-6 pb-6 md:pb-6 sm:pb-6 sm:gap-3">
      <div className="bg-[#e3e3e3]">
        <TopProfile />
      </div>
      <div className="bg-[#e3e3e3]">
        <SeePost />
      </div>
      <div className="bg-[#e3e3e3]">
        <Skill />
      </div>
      <div className="bg-[#e3e3e3]">
        <Education />
      </div>
      <div className="bg-[#e3e3e3]">
        <Experience />
      </div>
    </div>
  );
};

export default Profile;
