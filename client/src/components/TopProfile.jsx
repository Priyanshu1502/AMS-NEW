import React, { useState } from "react";
import Data from "../assets/ProfileData";
import {
  Avatar,
  Button,
  Modal,
  ModalDialog,
  DialogTitle,
  Divider,
  ModalClose,
  DialogContent,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import LinkIcon from "@mui/icons-material/Link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {
  Accordion,
  AccordionSummary,
  Autocomplete,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Countries from "../assets/Countries";
import States from "../assets/States";

const TopProfile = () => {
  const [background, setBackground] = useState(false);
  const [profilePic, setProfilePic] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const selectCountries = {
    options: Countries,
    getOptionLabel: (option) => option.name,
  };
  const selectStates = {
    options: States,
    getOptionLabel: (option) => option.name,
  };

  return (
    <div className="w-full">
      {Data.map((profile) => (
        <div
          key={profile.id}
          className="ml-52 mt-4 z-0 bg-white w-[75%] pb-4 rounded-t-3xl"
        >
          {background ? (
            <img
              src={profile.backgroundImg}
              alt="background-img"
              className="rounded-t-3xl w-[72rem] h-[20rem]"
            ></img>
          ) : (
            <div className="">
              <img
                src="/Simple Shiny.svg"
                alt="background"
                className="rounded-t-3xl w-[72rem] h-[20rem]"
              ></img>
            </div>
          )}
          <div className="mt-[-6rem] ml-16">
            <Avatar
              sx={{
                width: "9rem",
                height: "9rem",
                border: "2px solid white",
                fontSize: "3rem",
              }}
              src="#"
              alt={profile.name}
            />
          </div>
          <h1 className="mt-6 text-3xl ml-20">{profile.name}</h1>
          <p className="ml-20">{profile.bio}</p>
          <div className="flex item-center ml-20">
            {profile.district},{profile.state},{profile.country}
            <div className="bg-[#a3a3a3] h-1 w-1 rounded-full ml-2 mt-3"></div>
            <Button
              variant="plain"
              color="neutral"
              onClick={() => setOpen(true)}
              sx={{
                width: "8rem",
                padding: "none",
                ":hover": { background: "none" },
                marginLeft: "-0.6rem",
                marginTop: "-.2rem",
              }}
            >
              Contact Info.
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <ModalDialog>
                <DialogTitle>{profile.name}</DialogTitle>
                <Divider />
                <DialogContent>Contact Info</DialogContent>
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>
                      <LinkIcon
                        sx={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      Profile Link
                    </FormLabel>
                    <h1 className="ml-7">{profile.link}</h1>
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <LocalPhoneIcon
                        sx={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      Phone
                    </FormLabel>
                    <h1 className="ml-7">{profile.phone}</h1>
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <AlternateEmailIcon
                        sx={{ marginRight: "10px", fontSize: "16px" }}
                      />
                      Email
                    </FormLabel>
                    <h1 className="ml-7">{profile.email}</h1>
                  </FormControl>
                </Stack>
              </ModalDialog>
            </Modal>
          </div>
          <div className="ml-20 mt-2">
            <Button
              varient="contained"
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit Profile
            </Button>
          </div>
          <Modal
            open={edit}
            onClose={() => {
              setEdit(false);
            }}
          >
            <ModalDialog sx={{ maxHeight: "30rem", overflow: "scroll" }}>
              <DialogTitle>Edit Your Profile</DialogTitle>
              <DialogContent>Change things about yourself.</DialogContent>
              <Divider />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
              >
                <Stack spacing={2}>
                  <Accordion
                    sx={{
                      width: "32rem",
                    }}
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Profile
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input autoFocus />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Bio</FormLabel>
                        <Input autoFocus />
                      </FormControl>
                      <FormControl>
                        <FormLabel>District</FormLabel>
                        <Input autoFocus />
                      </FormControl>
                      <FormControl>
                        <FormLabel>State</FormLabel>
                        <Autocomplete
                          {...selectStates}
                          disableClearable
                          size="small"
                          renderInput={(params) => (
                            <TextField {...params} varient="standard" />
                          )}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Autocomplete
                          {...selectCountries}
                          disableClearable
                          size="small"
                          renderInput={(params) => (
                            <TextField {...params} varient="standard" />
                          )}
                        />
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      Education
                    </AccordionSummary>
                  </Accordion>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default TopProfile;
