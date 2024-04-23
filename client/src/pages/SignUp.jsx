import { CheckBox } from "@mui/icons-material";
import { FormControlLabel, TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const handleChange = {};

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto ">
        <div className=" flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-green-200 rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start p-12 bg-no-repeat bg-cover bg-center bg-[url('/alumni.jpg')]">
            <h1 className=" lg:text-3xl mb-3 ">Welcome</h1>
            <div className="hidden lg:block">
              <p className="text-md">
                Our dear alumni's you are wholeheartedly welcomed to our website
                that is just one registration ahead.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 py-16 px-12">
            <h1 className="text-3xl mb-4">Register</h1>
            <p className="">
              Create your account. It's free and only takes a minute.
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5 mt-2">
                <TextField
                  id="outlined-basic"
                  type="text"
                  label="First Name"
                  variant="outlined"
                  color="success"
                  onChange
                  sx={{
                    backgroundColor: "#fff",
                    // borderStyle: "none",
                    // borderBlock: "0px",
                    // borderColor: "#2ED68A",
                    // width: "100%",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  type="text"
                  label="Last Name"
                  variant="outlined"
                  color="success"
                  sx={{
                    backgroundColor: "#fff",
                    // borderStyle: "none",
                    // borderBlock: "0px",
                    // borderColor: "#2ED68A",
                    // width: "100%",
                  }}
                />
              </div>
              <div className="mt-5">
                <TextField
                  id="outlined-basic"
                  type="email"
                  label="Email"
                  variant="outlined"
                  color="success"
                  sx={{
                    backgroundColor: "#fff",
                    // borderStyle: "none",
                    // borderBlock: "0px",
                    // borderColor: "#2ED68A",
                    width: "100%",
                  }}
                />
              </div>
              <div className="mt-5">
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  color="success"
                  autoComplete="current-password"
                  sx={{
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                />
              </div>
              <div className="mt-5">
                <TextField
                  id="outlined-password-input"
                  label="Confirm Password"
                  type="password"
                  color="success"
                  autoComplete="current-password"
                  sx={{
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                />
              </div>
              <div className="mt-5">
                <FormControlLabel
                  required
                  control={<CheckBox />}
                  label="I accept the Terms of Use and Privacy Policy"
                />
              </div>
              <div className="mt-5">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2ED68A",
                    width: "95%",
                    // padding: "0.5rem",
                    marginLeft: "0.5rem",
                    ":hover": {
                      color: "white",
                      backgroundColor: "#1EBC7C",
                    },
                  }}
                >
                  Register
                </Button>
                <div className="flex justify-center items-center mt-3">
                  <p>Already have an account?</p>
                  <div>
                    <NavLink to="/">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#2ED68A",
                          width: "95%",
                          // padding: "0.5rem",
                          marginLeft: "0.5rem",
                          ":hover": {
                            color: "white",
                            backgroundColor: "#1EBC7C",
                          },
                        }}
                      >
                        LogIn
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
