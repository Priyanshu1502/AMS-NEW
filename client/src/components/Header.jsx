import { Button } from "@mui/material";
import Navlinks from "./NavigationList";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import ProfileAvatar from "./ProfileAvatar";
import Drawer from "./Drawer";

const Header = () => {
  const navlink = useNavigate();
  const [toggle, setToggle] = useState(true);
  const toggleNavbar = () => {
    setToggle(!toggle);
  };
  async function submit() {
    try {
      await axios.post("/api/v1/users/logout", { withCredentials: true }) // by using withCredentials cookies are added.
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            alert('You Loggedout successfully.');
            navlink(`/`)
          }
        })
    } catch(err) {
      if(err.response.status === 401){
        alert("Invalid User Credentials!")
      }
    };
  }

  return (
    <div className="bg-white shadow-xl sticky top-0 z-[100]">
      <nav className=" flex justify-between items-center w-[92%] mx-auto">
        <div className="">
          <img src="/icon.ico" alt="logo" className="h-12" />
        </div>
        <div className="hidden sm:w-[150%] md:left-0 md:w-auto md:flex items-center px-5">
          <Navlinks />
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <Button variant="contained" color="primary" onClick={submit}>
              LOgout
            </Button>
          </div>
          <div className="">
            <Drawer />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
