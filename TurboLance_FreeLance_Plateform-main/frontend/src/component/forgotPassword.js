import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Password sent to your email!", {
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
      url: "/ForgotPassword",
      data: {
        email: email,
      },
    });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="max-w-md w-full px-6 py-8 shadow-md rounded-lg"
          style={{ boxShadow: "0px 1px 500px 10px #142D55" }}
        >
          <h1 className="text-center text-3xl font-bold mt-6 text-gray-300">
            Forgot Password
          </h1>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-blue-200 bg-transparent placeholder:text-gray-600 border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Email"
              />
            </div>
            <div className="text-right">
              <Link
                to="/signin"
                className="text-blue-600 text-sm hover:underline"
              >
                Remember your password? Sign in
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-6"
              >
                Send Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
