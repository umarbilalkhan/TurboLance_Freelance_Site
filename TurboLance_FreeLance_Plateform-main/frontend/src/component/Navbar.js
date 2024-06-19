// Navbar.js
import React, { useState } from "react";
import logoimg from "../img/Logo2.png";
import ProfilePic from "../img/profile-pic.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileDropDown";

function Navbar() {
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisibility(!isMobileNavVisible);
  };

  return (
    <>
      <nav className="bg-white py-2 px-8 lg:block hidden sticky top-0 drop-shadow-lg z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <img src={logoimg} alt="img" className="w-[10rem]"></img>
            </Link>
          </div>
          <ul className="flex items-center space-x-8">
            <li onClick={toggleMobileNav}>
              <Link
                to="/"
                className="text-blue-900 hover:text-blue-700 text-lg font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Gigs"
                className="text-blue-900 hover:text-blue-700 text-lg font-semibold"
              >
                Explore Community
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-blue-900 hover:text-blue-700 text-lg font-semibold"
              >
                Contact
              </Link>
            </li>
            <div className="flex items-center text-blue-900">
              <MdLightMode className="text-2xl cursor-pointer hover:animate-spin" />
            </div>

            <ProfileMenu />

            <div>
              <Link to="/Signin">
                <button className="bg-white text-blue-900 mx-[0.3rem] w-[6.5rem] py-[0.3rem] border-blue-800 border-[0.13rem] rounded-md font-semibold hover:bg-slate-100 duration-300">
                  Signin
                </button>
              </Link>
              <Link to="/Signup">
                <button className="bg-blue-800 text-white ml-1 w-[6.5rem] py-[0.45rem] rounded-md font-semibold hover:bg-blue-700 duration-300">
                  Signup
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
      <div className="lg:hidden sticky top-0">
        <nav className="bg-white py-2 px-5 sticky top-0 drop-shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <img src={logoimg} alt="img" className="w-[10rem]" />
              </Link>
            </div>
            <div className="flex items-center text-blue-900">
              <MdLightMode className="text-2xl cursor-pointer" />
              <div className="px-1"></div>
              {/* <Link to="/Dashboard">
                <img src={ProfilePic} className="w-[3.5rem]" />
              </Link> */}
              <ProfileMenu />
              <HiMenuAlt3
                onClick={toggleMobileNav}
                className="text-3xl text-blue-900 cursor-pointer"
              />
            </div>
          </div>
        </nav>
        <div
          className={`flex sticky top-0 justify-center md:w-[44vw] h-[70%] py-10 bg-gray-100 ${
            isMobileNavVisible ? "" : "hidden"
          } lg:hidden`}
        >
          <ul className="flex items-center space-y-5 flex-col">
            <li onClick={toggleMobileNav}>
              <Link
                to="/"
                className="text-blue-900 hover:text-blue-700 text-lg font-semibold"
              >
                Home
              </Link>
            </li>
            <hr className="md:w-[40vw] w-[100vw] border-gray-300" />
            <li onClick={toggleMobileNav}>
              <Link
                to="/Gigs"
                className="text-blue-900 hover:text-blue-700 text-lg font-semibold"
              >
                Explore Community
              </Link>
            </li>
            <hr className="md:w-[40vw] w-[100vw] border-gray-300" />
            <li onClick={toggleMobileNav}>
              <Link
                to="/Contact"
                className="text-blue-900 hover:text-blue-700 text-lg font-semibold"
              >
                Contact
              </Link>
            </li>
            <hr className="md:w-[40vw] w-[100vw] border-gray-300" />
            <div className="flex flex-col">
              <Link to="/Signin">
                <button className="bg-white text-blue-900 mx-[0.3rem] w-[20rem] py-[0.3rem] border-blue-800 border-[0.13rem] rounded-md font-semibold hover:bg-slate-100 duration-300">
                  Signin
                </button>
              </Link>
              <Link to="/Signup">
                <button className="mt-[0.5rem] bg-blue-800 text-white ml-1 w-[20rem] py-[0.45rem] rounded-md font-semibold hover:bg-blue-700 duration-300">
                  Signup
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
