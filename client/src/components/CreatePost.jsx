import React, { useState, useEffect } from "react";
import Data from "../assets/ProfileData";
import { Button, Divider } from "@mui/material";
import Modal from "@mui/joy/Modal";
import axios from "axios";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EventIcon from "@mui/icons-material/Event";
import CreatePostModal from "./CreatePostModal";

const CreatePost = () => {
  const [post, setPost] = useState(false);
  const [description, setDescription] = useState([]);

  const postSetter = () => {
    setPost(!post);
  };

  // useEffect(() => {
  //   try {
  //     axios
  //       .post(
  //         "/api/v1/posts/",
  //         { postImg: post, description },
  //         { withCredentials: true }
  //       ) // by using withCredentials cookies are added.
  //       .then((res) => {
  //         // console.log(res.data.data);
  //         return res.data.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         navlink(`/`);
  //       })
  //       .then((data) => {
  //         // console.log(username);
  //         // return setUsername(data.username), setAvatar(data.avatar);
  //         setCoverImage(data);
  //       });
  //   } catch (err) {
  //     return console.log(err);
  //   }
  // }, []);

  return (
    <div className="bg-white lg:w-[85%] shadow-lg mt-4 rounded lg:pt-0 pt-2">
      {Data.slice(1, 2).map((profile) => (
        <div>
          <div className="flex flex-row mt-4 ml-6 mb-2 border-gray ">
            <img
              src={profile.profileImg}
              alt="profileImg"
              className="w-12 h-12 rounded-full"
            ></img>
            <div className="ml-4">
              <input
                placeholder="Create a post"
                className=" cursor-pointer lg:w-[34rem] h-12 border-gray-400 border-[1px] sm:w-[10rem] w-[16rem]"
                onClick={postSetter}
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
              <CreatePostModal setPost={setPost} />
            </Modal>
          </div>
          <div className="flex flex-row justify-between ml-20 mr-28 mb-2">
            <Button
              varient="outlined"
              startIcon={<PermMediaIcon />}
              sx={{
                color: "black",
                width: "15rem",
              }}
              // onClick={setPost(true)}
            >
              Media
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button
              varient="outlined"
              startIcon={<EventIcon />}
              sx={{
                color: "black",
                width: "15rem",
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
