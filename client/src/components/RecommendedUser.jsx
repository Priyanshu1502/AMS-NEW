import { Avatar, Button } from "@mui/material";
import React from "react";
import Data from "../assets/Data";
import { useState } from "react";

const RecommendedUser = () => {
  const [isfollowed, setIsFollowed] = useState(false);

  const onFollow = (id) => {
    setIsFollowed();
  };

  return (
    <div className="mt-7 pb-4 w-[90%] px-8 h-auto bg-white rounded sticky">
      <div className="border-b p-2">You Might also Know</div>
      {Data.map((friend) => (
        <div key={friend.key}>
          <div className="grid grid-flow-col grid-cols-3 p-2">
            <div className="borded-b rounded borded-black">
              <Avatar src={friend.profileImg} />
            </div>
            <p className="flex self-baseline">{friend.username}</p>
            <div className="ml-7">
              {isfollowed ? (
                <Button
                  variant="outlined"
                  sx={{ width: "0.4rem", fontSize: "11px" }}
                >
                  Followed
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ width: "0.4rem", fontSize: "11px" }}
                >
                  Follow
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedUser;
