import React, { useState, useEffect } from "react";
// import Button from "./Button";
import Resume from "../Images/SURYA K S-3.pdf";

import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const [bgColor, setbgColor] = useState("");
  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setOpenNav(true);
      setbgColor(
        "bg-white  bg-gradient-to-r hover:from-green-800 hover:to-blue-900 from-pink-800 to-yellow-500"
      );
    } else if (window.scrollY <= 0) {
      setOpenNav(false);
      setbgColor(" md:bg-transparent ");
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={``}>
      <div
        className={`md:h-20 w-full md:flex  justify-around items-center font-bold  ${
          openNav === true
            ? bgColor
            : " bg-gradient-to-r from-pink-500/70 to-yellow-500/70 md:bg-none "
        } text-white pl-5  z-[500] ${
          open ? "relative " : "md:fixed top-0 absolute"
        } `}
      >
        <div>
          <h1 className="cursor-pointer py-5 ">Logo</h1>
        </div>

        {/* {open === true && openNav ? ( */}
        <div
          className={`md:flex md:pb-0 pb-5  md:static left-0 w-full md:w-auto md:pl-0 pl-9   ${
            open ? "top-20  " : "top-[-490px] relative hidden"
          }`}
        >
          <ul className="md:flex py-5">
            <li className="px-5 cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="px-5 cursor-pointer">About</li>
            <li className="px-5 cursor-pointer">Portfolio</li>
            <li className="px-5 cursor-pointer">Contact</li>
            <li className="px-5 cursor-pointer">Blog</li>
          </ul>
          <div
            className={`md:pl-9 px-5 md:mt-2 mt-5 transition-all duration-500 ease-in-out delay-150`}
          >
            <a
              className="bg-green-500 p-4 text-white rounded-xl"
              href={Resume}
              download="SURYA K S"
            >
              Resume
            </a>
          </div>
        </div>
        {/*  ) : null} */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden"
        >
          {open ? (
            <button>
              <IoClose />
            </button>
          ) : (
            <button>
              <HiOutlineMenu />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
