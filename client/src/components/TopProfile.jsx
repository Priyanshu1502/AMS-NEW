import React from "react";
import Data from "../assets/Data";

const TopProfile = () => {
  return (
    <div className="w-full">
      {Data.map((profile) => (
        <div key={profile.id}>
          <img src={profile.backgroundImg} alt="background-img"></img>
        </div>
      ))}
    </div>
  );
};

export default TopProfile;
