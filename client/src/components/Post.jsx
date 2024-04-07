import React from "react";
import PostCard from "./PostCard";

const Post = () => {
  return (
    <>
      <div className=" lg:w-[83%] md:w-[83%] sm:w-full min-h-screen lg:py-0 md:py-7 sm:py-4 py-3 px-3 flex items-start">
        <div className="lg:w-full md:w-full sm:w-full w-full h-auto relative">
          {/* feed*/}
          <div className="w-full h-auto flex items-center justify-center mt-6">
            <div className="bg-white rounded p-10 lg:w-[73%] md:w-[73%] sm:w-[80%] h-auto">
              <PostCard />
            </div>
          </div>
        </div>
        {/* <div className="w-[25%] h-auto lg:block md:hidden sm:hidden hidden"></div> */}
      </div>
    </>
  );
};

export default Post;
