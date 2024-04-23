import React from "react";
import TopProfile from "../components/TopProfile";
import BottomProfile from "../components/BottomProfile";
import SeePost from "../components/SeePost";

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
        <BottomProfile />
      </div>
    </div>
  );
};

export default Profile;
