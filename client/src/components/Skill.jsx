import React from "react";
import Data from "../assets/ProfileData";
import { Button, Divider } from "@mui/material";

const Skill = () => {
  return (
    <div className=" mt-4 bg-white rounded-3xl w-[75%] ml-52 h-auto">
      {Data.map((skills) => (
        <div key={skills.id} className="mt-5">
          <div className="ml-8 pt-6 text-3xl">Skills</div>
          <div className="lg:ml-[60rem] lg:mt-[-2.3rem] pb-10 ">
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
            <div className="pb-6 text-lg mt-4">{skills.skill2}</div>
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
