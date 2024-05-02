import React from "react";
import Data from "../assets/ProfileData";
import { Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

const BottomProfile = () => {
  return (
    <div className=" lg:ml-52 mt-4 lg:mt-4 lg:mr-0 lg:mb-0 sm:mr-2 sm:ml-2 md:mt-4 sm:mt-4 ml-2 mr-2 z-0 bg-white lg:w-[100%] rounded-3xl lg:max-w-[72rem] sm:max-w-screen-sm">
      {Data.map((exp) => (
        <div key={exp.id} className="mt-5">
          <div className="lg:ml-8 ml-5 pt-6 text-3xl">Experience</div>
          <div className="lg:ml-[60rem] lg:mt-[-2.3rem] ml-52 mt-[-2.3rem] pb-10 ">
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
          <div className="lg:ml-8 ml-4 w-[94%] flex flex-row pb-6">
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
          <div className="lg:ml-8 w-[94%] ml-4 flex flex-row pb-6 mt-6">
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
          <NavLink to="/profile/experience">
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
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default BottomProfile;
