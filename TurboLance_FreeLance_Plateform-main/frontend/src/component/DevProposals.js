import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Signin from "../img/signin.png";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

import axios from "axios";
import Footer from "./Footer";

function DevProposals() {
  const [proposals, setProposals] = useState([]);
  const [compproposals, setcompProposals] = useState([]);
  const [accproposals, setaccProposals] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchEmail();
  }, []);

  const fetchEmail = async () => {
    try {
      const response = await axios.get("/GetEmail");
      setEmail(response.data);
      fetchData(response.data); // Call fetchData with the email
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async (email) => {
    try {
      const response = await axios.get("/DevProposalsPending", {
        params: {
          demail: email,
        },
      });
      setProposals(response.data);
      // setTimeout(() => {
      //   setShowSpinner(false);
      // }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response = await axios.get("/DevProposalsCompleted", {
        params: {
          demail: email,
        },
      });
      setcompProposals(response.data);
      setTimeout(() => {
        setShowSpinner(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response = await axios.get("/DevProposalsAccepted", {
        params: {
          demail: email,
        },
      });
      setaccProposals(response.data);
      setTimeout(() => {
        setShowSpinner(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateStatus = async () => {
    setShowSpinner(true);
    try {
      const response = await axios.post("/DevProposalStatusUpdate", {
        cemail: proposals[0].cemail,
        demail: email,
        cpdescription: proposals[0].cpdescription,
      });
      fetchEmail();
      setTimeout(() => {
        setShowSpinner(false);
      }, 1000);
    } catch (error) {
      console.error("Error updating proposal:", error);
    }
  };

  const deleteProposal = async () => {
    setShowSpinner(true);
    try {
      const response = await axios.post("/DevProposalDelete", {
        cemail: proposals[0].cemail,
        demail: email,
        cpdescription: proposals[0].cpdescription,
      });
      fetchEmail();
      setTimeout(() => {
        setShowSpinner(false);
      }, 1000);
    } catch (error) {
      console.error("Error deleting proposal:", error);
    }
  };

  return (
    <>
      <Navbar />
      {email === "TurboLance" ? (
        <div className="flex md:my-24 justify-center md:justify-evenly mt-24 items-center flex-col md:flex-row">
          <img src={Signin} className="w-[50%] h-[50%] md:w-[30%] md:h-[30%]" />
          <div className="text-gray-50 px-8 h-[70vh] text-5xl font-bold mt-20 md:mt-0 md:flex md:items-center md:justify-center">
            Signin First!
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center space-x-4 py-6 md:px-2 md:pl-10">
            <div class="relative inline-flex">
              <Link to="/WorkingProposals">
                <button
                  class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-blue-900 text-white shadow-md active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Working Projects
                </button>
              </Link>
              {accproposals.length > 0 ? (
                <span class="absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[24px] min-h-[24px]">
                  {accproposals.length}
                </span>
              ) : (
                ""
              )}
            </div>

            <div class="relative inline-flex">
              <Link to="/ProposalDashboard">
                <button
                  class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-yellow-500 text-gray-800 shadow-md focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Project History
                </button>
              </Link>
              {compproposals.length + accproposals.length > 0 ? (
                <span class="absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[24px] min-h-[24px]">
                  {compproposals.length + accproposals.length}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <p className="text-4xl text-gray-200 text-center font-bold mt-20">
            Project Proposals
          </p>
          {showSpinner && (
            <div className="flex items-center justify-center h-[90vh]">
              <Spinner className="h-12 w-12" color="black" />
            </div>
          )}
          {!showSpinner && proposals.length > 0 ? (
            proposals.map((proposal, index) => (
              <div
                key={index}
                className="max-w-5xl mx-5 bg-white rounded-lg shadow-md overflow-hidden md:mx-auto my-10"
              >
                <div className="border-t border-gray-200">
                  <div className="px-6 py-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {proposal.cfname + " " + proposal.clname}
                    </h2>
                    <p className="text-gray-700">{proposal.cpdescription}</p>
                  </div>
                  <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-center">
                    <button
                      onClick={updateStatus}
                      className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out "
                    >
                      Accept
                    </button>
                    <button
                      onClick={deleteProposal}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded transition duration-300 ease-in-out  ml-4"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center font-bold text-3xl bg-red-500 py-5 mt-10 mb-24">
              No proposals found!
            </div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default DevProposals;
