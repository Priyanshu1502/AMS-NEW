import React from "react";
import TopProfile from "../components/TopProfile";
import Experience from "../components/Exprience";
import SeePost from "../components/SeePost";
import Skill from "../components/Skill";
import Education from "../components/Education";

const Profile = () => {
  return (
    <div className="bg-white w-full flex flex-col max-h-screen">
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
