import React from "react";
import Data from "../assets/ProfileData";
import { Button, Divider } from "@mui/material";

const BottomProfile = () => {
  return (
    <div className=" mt-4 bg-white rounded-3xl w-[75%] ml-52 h-auto mb-6">
      {Data.map((exp) => (
        <div key={exp.id} className="mt-5">
          <div className="ml-8 pt-6 text-3xl">Experience</div>
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
              Add Experience
            </Button>
          </div>
          <div className="ml-8 w-[94%] flex flex-row pb-6">
            <img
              src="/THDC.png"
              alt="logo"
              className="w-14 h-14 rounded-full object-cover"
            ></img>
            <div className="ml-3">
              <div className="text-lg">{exp.Experience1}</div>
              <div className="text-sm flex flex-row">
                {exp.CompanyName1}
                <div className="bg-[#a3a3a3] h-1 w-1 rounded-full m-2"></div>
                {exp.Role1}
              </div>
              <div className="text-sm text-gray-400">
                {exp.started1} - {exp.Endedin1}
              </div>
              <div className="text-sm text-gray-400">
                {exp.state}, {exp.country}
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
              src="/google.webp"
              alt="logo"
              className="w-14 h-14 rounded-full object-cover"
            ></img>
            <div className="ml-3">
              <div className="text-lg">{exp.Experience2}</div>
              <div className="text-sm flex flex-row">
                {exp.CompanyName2}
                <div className="bg-[#a3a3a3] h-1 w-1 rounded-full m-2"></div>
                {exp.Role2}
              </div>
              <div className="text-sm text-gray-400">
                {exp.started2} - {exp.Endedin2}
              </div>
              <div className="text-sm text-gray-400">
                {exp.state}, {exp.country}
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

export default BottomProfile;
