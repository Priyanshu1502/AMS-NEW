import React from "react";
import Data from "../assets/ProfileData";
import { Button, Divider } from "@mui/material";

const Skill = () => {
  return (
    <div className=" lg:ml-52 mt-4 lg:mt-4 lg:mr-0 lg:mb-0 sm:mr-2 sm:ml-2 md:mt-4 sm:mt-4 ml-2 mr-2 z-0 bg-white lg:w-[100%] rounded-3xl lg:max-w-[72rem] sm:max-w-screen-sm">
      {Data.map((skills) => (
        <div key={skills.id} className="mt-5">
          <div className="lg:ml-8 ml-5 pt-6 text-3xl">Skills</div>
          <div className="lg:ml-[60rem] lg:mt-[-2.3rem] ml-56 mt-[-2.5rem] pb-10 ">
            <Button
              variant="outlined"
              sx={{
                borderTopRightRadius: "1rem",
                borderTopLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                borderBottomLeftRadius: "1rem",
              }}
            >
              Add Skill
            </Button>
          </div>
          <div className="ml-8 w-[94%]">
            <div className="pb-6 text-lg mt-[-1rem]">{skills.skill1}</div>
            <Divider />
            <div className="pb-5 text-lg mt-6">{skills.skill2}</div>
          </div>
          <div className="border-t-2 mt-2 flex items-center justify-center">
            <Button
              variant="plain"
              sx={{
                width: "71.3rem",
                borderBottomRightRadius: "1rem",
                borderBottomLeftRadius: "1rem",
              }}
            >
              See all Experiences...
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;