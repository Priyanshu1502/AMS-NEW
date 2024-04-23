import React from "react";
import Data from "../assets/FriendData";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";

const FriendCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="flex p-6 items-center flex-wrap gap-5 rounded shadow-xl">
      {Data.map((friend) => (
        <div className="shadow-xl p-3">
          <Card
            key={friend.key}
            sx={{
              maxWidth: 345,
              boxShadow: "none",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={friend.backgroundImg}
                alt="background-img"
                sx={{ height: "12rem", objectFit: "fill", width: "20rem" }}
              />
              <Avatar
                src={friend.profileImg}
                sx={{
                  marginTop: "-3rem",
                  marginLeft: "1rem",
                  width: "5rem",
                  height: "5rem",
                  border: "3px solid",
                  borderColor: "black",
                  backgroundColor: "#B4B4B8",
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {friend.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {friend.role}
                </Typography>
              </CardContent>
            </CardActionArea>

            {/* {isFollowed ? (
            <div className="flex justify-center">
              <Button variant="contained" sx={{ marginLeft: "3rem" }}>
                Follow
              </Button>
            </div>
          ) : (
            <div>
              <Button variant="outlined">Unfollow</Button>
            </div>
          )} */}
          </Card>

          <div className="flex justify-center items-center">
            {isFollowed ? (
              <Button variant="contained">Follow</Button>
            ) : (
              <Button variant="outlined" sx={{ width: "10rem" }}>
                Following
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendCard;
