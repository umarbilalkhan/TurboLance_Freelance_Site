import { React, useState } from "react";
import logoim from "../img/Logo3.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [developer, setDeveloper] = useState(false);
  let fName = "";
  let lName = "";
  let email = "";
  let password = "";
  let client = false;
  const navigate = useNavigate();

  let check = () => {
    setDeveloper(document.getElementById("developer").checked);
  };

  let unCheck = () => {
    setDeveloper(document.getElementById("developer").checked);
  };

  const notify = async (e) => {
    e.preventDefault();

    fName = document.getElementById("firstName").value;
    lName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    let career = "";
    if (developer) {
      career = document.getElementById("career").value;
    }
    let validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    password = document.getElementById("password").value;
    let conPassword = document.getElementById("confirm-password").value;
    client = document.getElementById("client").checked;
    setDeveloper(document.getElementById("developer").checked);
    let errMsg = "";

    if (!fName) errMsg = "Please enter first name";
    else if (fName.length < 3) errMsg = "Please enter valid first name";
    else if (!lName) errMsg = "Please enter last name";
    else if (lName.length < 3) errMsg = "Please enter valid last name";
    else if (!validEmail) errMsg = "Please enter valid email";
    else if (!password) errMsg = "Please enter password";
    else if (password.length < 6) errMsg = "Please enter strong password";
    else if (!conPassword) errMsg = "Please enter confirm password";
    else if (conPassword !== password) errMsg = "Password does'nt matched";
    else if (!client && !developer) errMsg = "Please select mode";
    else if (developer && career.length < 3) errMsg = "Please select carrer";

    if (errMsg) {
      toast.error(errMsg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    navigate("/otp", {
      state: {
        data: {
          fName: fName,
          lName: lName,
          email: email,
          password: password,
          userMode: !developer ? "user" : "developer",
          devProfession: !developer ? "" : career,
        },
      },
    });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen my-20">
        <div
          className="max-w-md w-full px-6 py-8 shadow-md rounded-lg"
          style={{ boxShadow: "0px 1px 500px 10px #142D55" }}
        >
          <img
            src={logoim}
            alt="logo"
            className="flex justify-center items-center px-14"
          />
          <h1 className="text-center text-3xl font-bold mt-6 pl-5 text-gray-300">
            Create new account
          </h1>
          <p className="text-center text-gray-300 mt-2">
            Join TurboLance community
          </p>
          <form className="mt-8 space-y-4" onSubmit={notify}>
            <div className="flex">
              <input
                id="firstName"
                type="text"
                className="border-2 w-full px-4 py-2 text-gray-300 border-blue-200 rounded-md focus:outline-none focus:border-blue-400 placeholder:text-gray-600 bg-transparent"
                placeholder="First Name"
              />
              <div className="px-2"></div>
              <input
                id="lastName"
                type="text"
                className="border-2 w-full px-4 py-2 text-gray-300 border-blue-200 rounded-md focus:outline-none focus:border-blue-400 placeholder:text-gray-600 bg-transparent"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                id="email"
                type="text"
                className="border-2 w-full px-4 py-2 text-gray-300 border-blue-200 rounded-md focus:outline-none focus:border-blue-400 placeholder:text-gray-600 bg-transparent"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                className="border-2 w-full px-4 py-2 text-gray-300 border-blue-200 rounded-md focus:outline-none focus:border-blue-400 placeholder:text-gray-600 bg-transparent"
                placeholder="Password"
              />
            </div>
            <div>
              <input
                id="confirm-password"
                type="password"
                className="border-2 w-full px-4 py-2 text-gray-300 border-blue-200 rounded-md focus:outline-none focus:border-blue-400 placeholder:text-gray-600 bg-transparent"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  onClick={unCheck}
                  type="radio"
                  id="client"
                  name="userType"
                  className="cursor-pointer appearance-none border-2 border-blue-200 rounded-full w-6 h-6 checked:bg-blue-800 checked:border-transparent focus:outline-none"
                />
                <label
                  htmlFor="client"
                  className="pl-3 cursor-pointer text-gray-300"
                >
                  Join as a client
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onClick={check}
                  type="radio"
                  id="developer"
                  name="userType"
                  className="cursor-pointer appearance-none border-2 border-blue-200 rounded-full w-6 h-6 checked:bg-blue-800 checked:border-transparent focus:outline-none"
                />
                <label
                  htmlFor="developer"
                  className="pl-3 cursor-pointer text-gray-300"
                >
                  Join as a developer
                </label>
              </div>
            </div>
            {!developer ? (
              <div></div>
            ) : (
              <div>
                <input
                  id="career"
                  type="text"
                  className="border-2 w-full px-4 py-2 text-gray-300 border-blue-200 rounded-md focus:outline-none focus:border-blue-400 placeholder:text-gray-600 bg-transparent"
                  placeholder="Career/Profession"
                />
              </div>
            )}
            <div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-6"
                >
                  Create Account
                </button>
              </div>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-300 text-sm">
              Already have an account?{" "}
              <Link to="/Signin" className="text-blue-600 hover:underline">
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
