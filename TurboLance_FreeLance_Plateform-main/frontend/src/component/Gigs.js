import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FiSearch } from "react-icons/fi";
import profilePic from "../img/profile-pic.png";
import starim from "../img/star.png";
import androidDeveloper from "../img/gig-background.png";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

function Gigs() {
  const [orignalDevs, setorignalDevs] = useState([]);
  const [devs, setDevs] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/Gigs");
      setorignalDevs(response.data);
      setDevs(response.data);
      setTimeout(() => {
        setShowSpinner(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateGigs = () => {
    const searchQuery = document
      .getElementById("gigSearch")
      .value.toLowerCase();
    const filteredDevs = orignalDevs.filter(
      (dev) =>
        dev.fname.toLowerCase().includes(searchQuery) ||
        dev.lname.toLowerCase().includes(searchQuery) ||
        dev.tagline.toLowerCase().includes(searchQuery) ||
        dev.hourlyRate.includes(searchQuery) ||
        dev.skills.some((skill) => skill.toLowerCase().includes(searchQuery))
    );
    setDevs(filteredDevs);
  };

  return (
    <>
      <Navbar />
      <div className="">
        <div className="flex justify-center pt-20">
          <input
            onChange={updateGigs}
            id="gigSearch"
            type="text"
            className="border-2 w-[15rem] md:w-[20rem] lg:ml-[5rem] px-4 py-2 rounded-tl-md rounded-bl-md focus:outline-none"
            placeholder="Smart Search"
          />
          <button
            onClick={updateGigs}
            className="w-[8rem] bg-blue-900 text-white rounded-tr-md rounded-br-md hover:bg-blue-950 duration-500 flex items-center justify-center"
          >
            <FiSearch className="mr-2" />
            Search
          </button>
        </div>
        {showSpinner && (
          <div className="flex items-center justify-center h-[90vh]">
            <Spinner className="h-12 w-12" color="black" />
          </div>
        )}
        {!showSpinner && (
          <section className="flex justify-around items-center flex-wrap px-10 py-20">
            {devs.length === 0 ? (
              <div className="flex items-center justify-center text-4xl font-bold text-gray-300">
                No Developer found at the Moment!
              </div>
            ) : (
              devs.map((dev, index) => (
                <Link
                  key={index}
                  to={
                    dev.logedin === "TurboLance"
                      ? `/UsrDashboard`
                      : `/DeveloperProfile?fname=${dev.fname}&lname=${dev.lname}&email=${dev.email}&tagline=${dev.tagline}&hourlyRate=${dev.hourlyRate}&skills=${dev.skills}&logedin=${dev.logedin}`
                  }
                >
                  <div className="bg-white cursor-pointer w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
                    <img
                      src={androidDeveloper}
                      className="h-[11rem] w-full rounded-t-md"
                      alt="Android Developer"
                    />
                    <div className="flex items-center space-x-5 pt-5 px-5">
                      <img
                        src={profilePic}
                        className="w-[2.5rem]"
                        alt="Profile"
                      />
                      <h1 className="font-bold text-2xl">
                        {dev.fname + " " + dev.lname}
                      </h1>
                    </div>
                    <p className="px-5 py-2 font-semibold">{dev.tagline}</p>
                    <div className="flex items-center space-x-2 px-5 pt-1">
                      {dev.skills.map((skill, index) =>
                        skill.length > 8 ? (
                          <div
                            key={index}
                            className="text-sm truncate text-ellipsis rounded-full bg-blue-100 text-blue-900 px-5 py-[0.1rem] font-bold"
                          >
                            {skill}
                          </div>
                        ) : (
                          <div
                            key={index}
                            className="text-sm rounded-full bg-blue-100 text-blue-900 px-5 py-[0.1rem] font-bold"
                          >
                            {skill}
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex items-center space-x-1 px-5 py-5">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src={starim}
                          className="w-[1.5rem]"
                          alt="Star"
                        />
                      ))}
                    </div>
                    <hr className="bg-gray-300 h-[0.15rem] mx-5" />
                    <div className="flex justify-between items-center font-bold">
                      <p className="py-3 pl-5">Hourly Rate</p>
                      <p className="px-8 mr-5 text-xl text-red-900 bg-red-100 rounded-full">
                        {"$" + dev.hourlyRate}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Gigs;
