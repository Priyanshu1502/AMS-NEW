import { Button } from "@mui/material";
import Navlinks from "./NavigationList";
import { useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import Drawer from "./Drawer";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const toggleNavbar = () => {
    setToggle(!toggle);
  };

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
            <Button variant="contained" color="primary">
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
