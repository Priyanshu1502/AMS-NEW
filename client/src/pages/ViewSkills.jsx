import React from "react";
import Data from "../assets/ProfileData";
import { NavLink } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";

const ViewSkills = () => {
  return (
    <div className="ml-[10rem] mt-12 w-[78%]">
      {Data.map((skill) => (
        <div key={skill.id} className="bg-white ">
          <div className="ml-3 mt-2 flex flex-row justify-between">
            <div className="mt-1">
              <NavLink to="/profile">
                <IconButton
                  size="12"
                  sx={{
                    color: "#2ed68a",
                    borderRadius: "45%",
                    height: "2rem",
                    width: "2rem",
                    ":hover": {
                      backgroundColor: "#BBF7D0",
                    },
                  }}
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>
              </NavLink>
            </div>
            <div className="text-3xl">Skills</div>
            <div className="mt-1">
              <IconButton
                size="12"
                sx={{
                  color: "#2ed68a",
                  borderRadius: "45%",
                  height: "2rem",
                  width: "2rem",
                  ":hover": {
                    backgroundColor: "#BBF7D0",
                  },
                }}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewSkills;
