import React, { useState } from "react";
import Data from "../assets/Data";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const PostCard = () => {
  const drawerBleeding = 56;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isLiked, setIsLiked] = useState(false);
  const onLike = () => {
    setIsLiked(!isLiked);
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const showComments = () => setOpenDrawer(!openDrawer);

  return (
    <div>
      {Data.map((post) => (
        <div key={post.id} className="w-full h-auto mb-6">
          {/* pp and username, time */}
          <div className="w-full h-auto flex items-center justify-between mb-2">
            <div className="flex items-center gap-x-2">
              <Link
                to="/"
                className="flex items-center justify-center flex-col flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#2ed68a] to-white">
                  <img
                    src={post.profileImg}
                    alt={post.profileImg}
                    className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text-black text-sm font-medium">
                  {post.username}
                </p>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <p className="text-black text-sm font-medium">{post.time}</p>
              </div>
            </div>
            <div className="">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                open={open}
                onClose={handleClose}
                anchorEl={anchorEl}
              >
                <MenuItem onClick={handleClose}>
                  <lord-icon
                    src="https://cdn.lordicon.com/vihyezfv.json"
                    trigger="hover"
                  ></lord-icon>
                  Report
                </MenuItem>
              </Menu>
            </div>
          </div>
          {/* feed img */}
          <div className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-black rounded overflow-hidden mb-3">
            <img
              src={post.postImg}
              alt={post.caption}
              className="w-full object-center rounded h-full "
            />
          </div>
          {/* User actions: like, comments etc */}
          <div className="w-full h-auto flex item-center justify-between ">
            <div className="flex flex-row item-center gap-x-4 justify-between">
              <div>
                {isLiked ? (
                  <FavoriteBorderIcon onClick={onLike} />
                ) : (
                  <FavoriteIcon onClick={onLike} />
                )}
              </div>
              <div>
                <CommentIcon onClick={showComments} />
                {openDrawer ? (
                  <SwipeableDrawer
                    anchor="bottom"
                    open={openDrawer}
                    onOpen={() => setOpenDrawer(true)}
                    onClose={() => setOpenDrawer(false)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    ModalProps={{
                      keepMounted: false,
                    }}
                  >
                    <div className="p-6 bg-white text-black w-[60%] h-[100%]">
                      {post.comment}
                    </div>
                  </SwipeableDrawer>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          {/*captions with username*/}
          {/* comments */}
        </div>
      ))}
    </div>
  );
};

export default PostCard;
