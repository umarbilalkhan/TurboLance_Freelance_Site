import { React, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
  completedDate,
}) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-4 cursor-pointer duration-200 hover:bg-gray-200">
      <h3 className="text-2xl font-bold mb-2">{clientName}</h3>
      <p className="text-gray-700 mb-2">{proposalDescription}</p>
      <p className="text-sm font-semibold text-red-500">
        Accepted: {formatDate(acceptedDate)}
      </p>
      {completedDate !== acceptedDate ? (
        <p className="text-sm text-green-500 font-semibold">
          Completed: {formatDate(completedDate)}
        </p>
      ) : (
        <p className="text-sm text-blue-500 font-semibold">Status: Ongoing</p>
      )}
    </div>
  );
};

const ProposalDashboard = () => {
  const [acceptedProposals, setacceptedProposals] = useState([]);
  const [completedProposals, setcompletedProposals] = useState([]);
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
      setacceptedProposals(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    try {
      const response = await axios.get("/DevProposalsCompleted", {
        params: {
          demail: email,
        },
      });
      setcompletedProposals(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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
            <div className="flex flex-col md:flex-row justify-between mx-10">
              {/* Accepted acceptedProposals */}
              <div className="w-[90vw] md:w-[40vw]">
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
                  />
                ))}
              </div>
              <div className="w-[10vw]"></div>
              {/* Completed acceptedProposals */}
              <div className="w-[90vw] md:w-[40vw]">
                <h2 className="text-xl font-semibold mb-4 bg-green-500 rounded p-5 text-white">
                  Completed Proposals
                </h2>
                {completedProposals.map((proposal, index) => (
                  <ProposalCard
                    key={index}
                    clientName={proposal.cfname + " " + proposal.clname}
                    proposalDescription={proposal.cpdescription}
                    acceptedDate={proposal.entryDate}
                    completedDate={proposal.completedDate}
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

export default ProposalDashboard;
