import React, { useState } from "react";
import Data from "../assets/ProfileData";
import { Button, Divider } from "@mui/material";
import Modal from "@mui/joy/Modal";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import EventIcon from "@mui/icons-material/Event";
import CreatePostModal from "./CreatePostModal";

const CreatePost = () => {
  const [post, setPost] = useState(false);

  return (
    <div className="bg-white w-[85%] shadow-lg mt-4 rounded">
      {Data.map((profile) => (
        <div>
          <div className="flex flex-row mt-4 ml-6 mb-2 border-gray">
            <img
              src={profile.profileImg}
              alt="profileImg"
              className="w-12 h-12 rounded-full"
            ></img>
            <div className="ml-4">
              <input
                placeholder="Create a post"
                className="w-[35rem] h-12 border-gray-400 border-[1px]"
                onClick={() => {
                  setPost(!post);
                }}
              ></input>
            </div>
            <Modal
              open={post}
              onClose={() => setPost(false)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CreatePostModal />
            </Modal>
          </div>
          <div className="flex flex-row justify-between ml-28 mr-28 mb-2">
            <Button
              varient="outlined"
              startIcon={<PermMediaIcon />}
              sx={{
                color: "black",
              }}
            >
              Media
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button
              varient="outlined"
              startIcon={<EventIcon />}
              sx={{
                color: "black",
              }}
            >
              Event
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreatePost;
