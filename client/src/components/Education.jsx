import React from "react";
import { Button, Divider } from "@mui/material";
import Data from "../assets/ProfileData";

const Education = () => {
  return (
    <div className=" mt-4 bg-white rounded-3xl w-[75%] ml-52 h-auto">
      {Data.map((education) => (
        <div key={education.id} className="mt-5">
          <div className="ml-8 pt-6 text-3xl">Education</div>
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
              Add Education
            </Button>
          </div>
          <div className="ml-8 w-[94%] flex flex-row pb-6">
            <img
              src="/utu.png"
              alt="logo"
              className="w-14 h-14 rounded-full"
            ></img>
            <div className="ml-3">
              <div className="text-lg">{education.education1}</div>
              <div className="text-sm">
                {education.degree1} - {education.degreein1}
              </div>
              <div className="text-sm text-gray-400">
                {education.started1} - {education.Endedin1}
              </div>
            </div>
          </div>
          <Divider
            sx={{
              width: "94%",
              marginLeft: "2rem",
            }}
          />
          <div className="ml-8 w-[94%] flex flex-row pb-6 mt-6">
            <img
              src="/institute.avif"
              alt="logo"
              className="w-14 h-14 rounded-full"
            ></img>
            <div className="ml-3">
              <div className="text-lg">{education.education2}</div>
              <div className="text-sm">
                {education.degree2} - {education.degreein2}
              </div>
              <div className="text-sm text-gray-400">
                {education.started2} - {education.Endedin2}
              </div>
            </div>
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
              See all Educations...
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
