// Signin
import { React, useEffect } from "react";
import logoim from "../img/Logo3.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Signin() {
  const navigate = useNavigate();
  let users;

  const notify = async (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    let password = document.getElementById("password").value;
    let errMsg = "";

    if (!validEmail) errMsg = "Please enter valid email";
    else if (!password) errMsg = "Please enter password";
    else if (password.length < 6) errMsg = "No record found!";

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
    } else {
      const response = await axios.get("/Signin", {
        params: {
          email: email,
          password: password,
        },
      });
      users = response.data;
      if (users.length === 0) {
        toast.error("No record found!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        navigate("/Dashboard", {});
      }
    }
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="max-w-md w-full px-6 py-8 bg-gray shadow-md rounded-lg"
          style={{ boxShadow: "0px 1px 500px 10px #142D55" }}
        >
          <img src={logoim} alt="logo" className="px-14" />
          <h1 className="text-center text-3xl font-bold mt-6 text-gray-300">
            Login
          </h1>
          <p className="text-center text-gray-300 mt-2">
            Use your TurboLancer Account
          </p>
          <form className="mt-8 space-y-4" onSubmit={notify}>
            <div>
              <input
                id="email"
                type="text"
                className="border-2 w-full px-4 py-2 text-gray-300 border-blue-200 bg-transparent rounded-md focus:outline-none focus:border-blue-400 placeholder:text-gray-600"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                className="border-2 w-full px-4 py-2 text-gray-300 border-blue-200 bg-transparent rounded-md focus:outline-none focus:border-blue-400 placeholder:text-gray-600"
                placeholder="Password"
              />
            </div>
            <div className="text-right">
              <Link
                to="/forgotPassword"
                className="text-blue-600 text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-6"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-300 text-sm">
              Don't have an account?{" "}
              <Link to="/Signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
