import React from "react";

import Post from "../components/Post";
import LeftSideBar from "../components/LeftSideBar";
import RecommendedUser from "../components/RecommendedUser";
import axios from "axios";

const Home = () => {
  const userDetail = async () => await axios.get("/api/v1/users/user-info");
  console.log(userDetail);

  return (
    <div className="bg-[#e4e4e4] w-full h-auto flex items-start justify-between lg:gap-x-0 md:gap-x-0 sm:gap-x-8 gap-x-4 relative">
      <div className="lg:w-[35%] md:w-[17%] sm:w-none w-none h-[100vh] ml-6 pt-10 px-3 sticky top-0 left-0 lg:block md:hidden sm:hidden hidden">
        <LeftSideBar userDetail={userDetail} />
      </div>
      <div className="w-full lg:w-[80%] md:w-[90%] sm:w-[80%] sticky">
        <Post userDetail={userDetail} />
      </div>
      <div className="w-[35%] h-auto lg:block md:hidden sm:hidden hidden sticky">
        <RecommendedUser userDetail={userDetail} />
        //COMMENT FOR COMMIT
      </div>
    </div>
  );
};

export default Home;
