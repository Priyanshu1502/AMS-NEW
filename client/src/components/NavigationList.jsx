import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

const handleClick = (e) => {
  e.preventDefault();
};

const NavigationList = () => {
  return (
    <>
      {/* <ul className="flex flex-row item-center gap-[4vw]">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Connections">Connections</NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat</NavLink>
        </li>
        <li>
          <NavLink to="/Notifications">Notifications</NavLink>
        </li>
        <li>
          <NavLink to="/Profile">Profile</NavLink>
        </li>
      </ul> */}
      <Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "4.5rem",
            backgroundColor: "#34ebe1 ",
            overflow: "hidden",
          }}
        >
          <ListItem onClick={handleClick}>
            <NavLink to="/home">
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/cnpvyndp.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem onClick={handleClick}>
            <NavLink to="/connections">
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/kkvxgpti.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Connections" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem onClick={handleClick}>
            <NavLink to="/chat">
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/fdxqrdfe.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Chat" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem onClick={handleClick}>
            <NavLink to="/notifications">
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/vspbqszr.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem onClick={handleClick}>
            <NavLink to="/profile">
              <ListItemButton>
                <ListItemIcon>
                  <lord-icon
                    src="https://cdn.lordicon.com/kthelypq.json"
                    trigger="morph"
                    state="morph-home-2"
                  ></lord-icon>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default NavigationList;
