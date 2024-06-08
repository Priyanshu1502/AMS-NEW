import React from "react";
import Activity from "../assets/Activity";
import { Button, Divider } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { NavLink } from "react-router-dom";

const SeePost = (props) => {
  console.log(props);
  return (
    <div className=" lg:ml-52 mt-4 lg:mt-4 lg:mr-0 lg:mb-0 sm:mr-2 sm:ml-2 md:mt-4 sm:mt-4 ml-2 mr-2 z-0 bg-white lg:w-[100%] rounded-3xl lg:max-w-[72rem] sm:max-w-screen-sm">
      <div className="lg:ml-8 pt-6 ml-5 text-3xl">Activity</div>
      {/* <div className="ml-8">{activity.followers} followers</div> */}
      <div className="lg:ml-[60rem] lg:mt-[-2rem] pb-4 ml-52 mt-[-3rem]">
        <Button
          variant="outlined"
          sx={{
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            borderBottomLeftRadius: "1rem",
          }}
        >
          Create a Post
        </Button>
      </div>
      {Activity.map((activity) => (
        <div key={activity.id} className="">
          <div className="lg:ml-8 ml-3">
            <NavLink to="#">
              <div className="flex flex-row">
                {activity.name} posted this
                <div className="w-1 h-1 bg-black rounded-full m-3"></div>
                <div>{activity.timeStamp}</div>
              </div>
              <div className="flex flex-row rounded-xl border-grey-300 border-2 w-[96%]">
                <img
                  src={activity.postImg}
                  alt="postImg"
                  className="w-20 h-20 rounded-xl p-2 "
                />
                <div className="mt-1 ml-1">
                  {activity.postTitle}
                  <div>{activity.caption}</div>
                </div>
              </div>
            </NavLink>
            <div className="flex justify-between w-[95%] lg:ml-2 mt-2">
              <div className=" ">
                <ThumbUpIcon fontSize="2" /> {activity.likes}
              </div>
              <div className="">{activity.comments} comments</div>
            </div>
          </div>
        </div>
      ))}
      <NavLink to="/profile/activity">
        <div className="border-t-2 mt-2 flex items-center justify-center">
          <Button
            variant="plain"
            sx={{
              width: "71.3rem",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          >
            See all posts...
          </Button>
        </div>
      </NavLink>
    </div>
  );
};

export default SeePost;
