import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";

const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(dateString)
    .toLocaleDateString("en-GB", options)
    .replace(/ /g, "-");
};

const ProposalCard = ({
  clientName,
  proposalDescription,
  acceptedDate,
  cemail,
  updateStatus,
}) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-4 duration-200 hover:bg-gray-200">
      <h3 className="text-2xl font-bold mb-2">{clientName}</h3>
      <p className="text-gray-700 mb-2">{proposalDescription}</p>
      <p className="text-sm font-semibold text-red-500">
        Accepted: {formatDate(acceptedDate)}
      </p>
      <button
        onClick={() => {
          updateStatus(cemail, proposalDescription);
        }}
        className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg mt-10 bg-yellow-700 text-gray-900 shadow-md active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        Completed
      </button>
    </div>
  );
};

const WorkingProposals = () => {
  const [acceptedProposals, setAcceptedProposals] = useState([]);
  const [email, setEmail] = useState("");
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    fetchEmail();
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  }, []);

  const fetchEmail = async () => {
    try {
      const response = await axios.get("/GetEmail");
      setEmail(response.data);
      fetchData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async (email) => {
    try {
      const response = await axios.get("/DevProposalsAccepted", {
        params: {
          demail: email,
        },
      });
      setAcceptedProposals(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateStatus = async (cemail, cpdescription) => {
    try {
      const response = await axios.get("/WorkingProposals", {
        params: {
          demail: email,
          cemail: cemail,
          cpdescription: cpdescription,
        },
      });
      fetchEmail();
    } catch (error) {
      console.error("Error deleting proposal:", error);
    }
  };

  return (
    <>
      <Navbar />
      {showSpinner ? (
        <div className="flex items-center justify-center h-[90vh]">
          <Spinner className="h-12 w-12" color="black" />
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10 mb-20">
          <div className="flex flex-col items-center">
            <div className=" flex justify-between mx-10">
              <div className="w-[40vw]">
                <h2 className="text-xl font-semibold mb-4 bg-blue-500 rounded p-5 text-white">
                  Accepted Proposals
                </h2>
                {acceptedProposals.map((proposal, index) => (
                  <ProposalCard
                    key={index}
                    clientName={proposal.cfname + " " + proposal.clname}
                    proposalDescription={proposal.cpdescription}
                    acceptedDate={proposal.entryDate}
                    completedDate={proposal.completedDate}
                    cemail={proposal.cemail}
                    updateStatus={updateStatus} // Pass updateStatus as a prop
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default WorkingProposals;
