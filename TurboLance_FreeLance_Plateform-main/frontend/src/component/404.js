// 404.js
import React, { useState } from "react";
import errim from "../img/404.png";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";

function Error() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <img src={errim} className="w-[20rem] md:w-[35rem]" />
        <p className="text-lg text-blue-200 py-10">
          The page you are loking for does'nt exists!
        </p>
        <Link to="/">
          <button className="bg-blue-800 text-white w-[9rem] py-[0.4rem] rounded-md font-[400] hover:bg-blue-700 duration-500">
            <div className="flex items-center justify-center text-lg">
              Go Back <div className="pr-3"></div>{" "}
              <FaArrowUp className="animate-pulse" />
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Error;
