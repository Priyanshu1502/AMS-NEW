import {
  Divider,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import React, { useEffect } from "react";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import axios from "axios";
import { response } from "express";

const LeftSideBar = (userDetail) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [getImage, setGetImage] = React.useState([]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const UserDetail = () => {
    return userDetail;
  };

  useEffect(() => {
    axios
      .get("/api/")
      .then((response) => {
        setGetImage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="flex flex-col bg-white rounded">
      {getImage.map((image) => (
        <React.Fragment>
          <div className="flex flex-col justify-center items-center rounded">
            <img
              src="banner.jpg"
              alt="background-img"
              className="z-0 rounded-t-lg w-96 h-28"
            />{" "}
            <img
              src="userpic.jpg"
              alt="profile-pic"
              className=" z-10 rounded-[50%] w-20 h-20 border-4 mt-[-3rem] aspect-square"
            />
          </div>
          <div className="flex justify-center item-center px-3 pb-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <Divider />
          <div>
            <Box
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Friends" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemIcon>
                    <GroupsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Groups" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemIcon>
                    <BookmarkAddedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Saved" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemIcon>
                    <EmojiEventsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Events" />
                </ListItemButton>
              </List>
            </Box>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LeftSideBar;
