import React from "react";
import RightSideBar from "../components/RightSideBar";
import Post from "../components/Post";
import LeftSideBar from "../components/LeftSideBar";

const Home = () => {
  return (
    <div className="bg-[#e4e4e4] w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
      <div className="lg:w-[22%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
        <LeftSideBar />
      </div>
      <div className="">
        <Post />
      </div>
    </div>
  );
};

export default Home;
