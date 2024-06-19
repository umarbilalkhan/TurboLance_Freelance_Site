import React from "react";
import Navbar from "./Navbar";
import logoimg from "../img/Logo3.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = (e) => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let msg = document.getElementById("msg").value;

    let validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    let errMsg = "";

    if (!name) errMsg = "Please enter full name";
    else if (name.length < 3) errMsg = "Please enter valid full name";
    else if (!validEmail) errMsg = "Please enter valid email";
    else if (!subject) errMsg = "Please enter subject";
    else if (subject.length < 6) errMsg = "Please enter correct subject";
    else if (!msg) errMsg = "Please enter message";
    else if (msg.length < 6) errMsg = "Please enter valid message";

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
      toast.success("Message sent successfully", {
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
    e.preventDefault();
    axios({
      method: "post",
      url: "/Contact",
      data: {
        name: name,
        email: email,
        subject: subject,
        message: msg,
      },
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("msg").value = "";
  };
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex justify-center items-center h-[100vh] sm:pt-2 my-24">
        <div
          className="max-w-md w-full px-6 py-8 shadow-md rounded-lg"
          style={{ boxShadow: "0px 1px 500px 10px #142D55" }}
        >
          <img
            src={logoimg}
            alt="logo"
            className="flex justify-center items-center px-14"
          />
          <div>
            <h1 className="text-center text-3xl font-bold mt-6 text-gray-300">
              Contact Us
            </h1>
            <p className="text-center pt-1 text-gray-300">We're here for you</p>
          </div>
          <form className="mt-8 space-y-4" onSubmit={notify}>
            <div>
              <input
                id="name"
                type="text"
                className="border-blue-200 bg-transparent text-gray-300 border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Full Name"
              />
            </div>

            <div>
              <input
                id="email"
                type="email"
                className="border-blue-200 bg-transparent text-gray-300 border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                id="subject"
                type="text"
                className="border-blue-200 bg-transparent text-gray-300 border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                id="msg"
                rows="5"
                className="border-blue-200 bg-transparent text-gray-300 border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400 resize-none"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button
                onClick={notify}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-6"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-300 text-sm">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
