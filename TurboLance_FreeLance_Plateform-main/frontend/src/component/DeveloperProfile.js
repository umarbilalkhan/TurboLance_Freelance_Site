import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import profilePic from "../img/profile-pic.png";
import { ToastContainer, toast } from "react-toastify";
import starim from "../img/star.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { Textarea } from "@material-tailwind/react";

function DevProfile() {
  const location = useLocation();
  const [dev, setDev] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const params = new URLSearchParams(location.search);
  const fname = params.get("fname");
  const lname = params.get("lname");
  const tagline = params.get("tagline");
  const hourlyRate = params.get("hourlyRate");
  const skillsString = params.get("skills");
  const cemail = params.get("logedin");
  const demail = params.get("email");
  const skills = skillsString ? skillsString.split(",") : [];

  useEffect(() => {
    if (location.state && location.state.dev) {
      setDev(location.state.dev);
    }

    async function fetchData() {
      try {
        const response = await axios.get("/DeveloperProfile", {
          params: {
            test: "hgh",
          },
        });
        // Handle response data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    }
    fetchData();
  }, [location.state]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const getTruncatedFileName = () => {
    if (selectedFile) {
      return selectedFile.name.length > 12
        ? `${selectedFile.name.substring(0, 10)}...`
        : selectedFile.name;
    }
    return "Select File";
  };
  const notify = async (event) => {
    event.preventDefault();
    let Projectdescription =
      document.getElementById("Projectdescription").value;

    if (Projectdescription !== "") {
      toast.success("Project proposal sent successfully!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      await axios({
        method: "post",
        url: "/DeveloperProfile",
        data: {
          cemail: cemail,
          cfname: fname,
          clname: lname,
          demail: demail,
          cpdescription: Projectdescription,
        },
      });
    } else {
      toast.error("Enter project description!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly py-24">
        {
          <div className="bg-gray-50 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-full md:w-3/4 lg:w-1/2">
            <div className="flex border-b border-lighter py-4">
              <img
                src={profilePic}
                className="w-[3.3rem] h-[3.15rem]"
                alt="Profile"
              />
              <div className="pl-5">
                <p className="font-bold text-2xl">
                  {fname} {lname}
                </p>
                <p className="text-sm text-grey-dark">{tagline}</p>
              </div>
            </div>
            <div className="py-4">
              <h2 className="font-bold text-lg">Skills</h2>
              <div className="flex flex-wrap mt-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="text-sm mr-3 truncate text-ellipsis rounded-full bg-blue-100 text-blue-900 px-5 py-[0.1rem] font-bold"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between border-t border-lighter py-4">
              <div>
                <p className="font-bold text-lg">Hourly Rate</p>
                <p className="font-bold text-center text-lg text-red-900 bg-red-100 rounded-full">
                  ${hourlyRate}
                </p>
              </div>
              <div>
                <p className="font-bold text-lg">Rating</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={starim}
                      className="w-[1.5rem]"
                      alt="Star"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
        <div className="md:flex md:flex-col">
          <h1 className="text-white text-3xl font-bold text-center pt-20 md:pt-0">
            Project Proposal
          </h1>
          <div className="flex items-center justify-center pt-10">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              {getTruncatedFileName()}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[40rem]">
          <Textarea
            id="Projectdescription"
            color="green"
            label="Project Description"
            className="text-white"
          />
        </div>
        <button
          onClick={notify}
          className="mb-20 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-10 mt-5 rounded transition duration-300 ease-in-out  ml-4"
        >
          Send to developer
        </button>
      </div>

      <Footer />
    </>
  );
}

export default DevProfile;
