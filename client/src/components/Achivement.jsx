import { React, useState } from "react";
import Data from "../assets/ProfileData";
import { Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

const Achivement = () => {
  const [img, setImg] = useState(false);

  return (
    <div className=" lg:ml-52 mt-4 lg:mt-4 lg:mr-0 lg:mb-0 sm:mr-2 sm:ml-2 md:mt-4 sm:mt-4 ml-2 mr-2 z-0 bg-white lg:w-[100%] rounded-3xl lg:max-w-[72rem] sm:max-w-screen-sm">
      {Data.map((achiv) => (
        <div key={achiv.id} className="mt-5">
          <div className="lg:ml-8 ml-5 pt-6 text-3xl">Achivement</div>
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

          <div className="lg:ml-8 w-[94%] ml-4 flex flex-row pb-6">
            <img
              src={achiv.sampleImg1}
              alt="logo"
              className="w-14 h-14 rounded-full"
            ></img>
            <div className="ml-3">
              <div className="text-lg">{achiv.achivement1}</div>
              <div className="text-sm">{achiv.para1}</div>

              <div className="text-sm text-gray-400">
                {achiv.achivDateStart1} - {achiv.achivDateEnd1}
              </div>
            </div>
          </div>
          <Divider
            sx={{
              width: "94%",
              marginLeft: "2rem",
            }}
          />
          <div className="lg:ml-8 ml-4 w-[94%] flex flex-row pb-6 mt-6">
            <img
              src={achiv.sampleImg2}
              alt="logo"
              className="w-14 h-14 rounded-full"
            ></img>
            <div className="ml-3">
              <div className="text-lg">{achiv.achivement2}</div>
              <div className="text-sm">{achiv.para2}</div>
              <div className="text-sm text-gray-400">
                {achiv.achivDateStart2} - {achiv.achivDateEnd2}
              </div>
            </div>
          </div>
          <NavLink to="/profile/achivement">
            <div className="border-t-2 mt-2 flex items-center justify-center">
              <Button
                variant="plain"
                sx={{
                  width: "71.3rem",
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              >
                See all Achivements...
              </Button>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Achivement;
