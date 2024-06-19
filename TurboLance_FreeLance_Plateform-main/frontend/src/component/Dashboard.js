import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import DevDashboard from "./DevDashboard";
import UsrDashboard from "./UsrDashboard";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/DevDashboard");
        setUsers(response.data);
        setTimeout(() => {
          setShowSpinner(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {showSpinner && (
        <div className="flex items-center justify-center h-[90vh]">
          <Spinner className="h-12 w-12" color="black" />
        </div>
      )}
      {!showSpinner && (
        <>
          {users.length > 0 ? <DevDashboard /> : <UsrDashboard />}
          <Footer />
        </>
      )}
    </>
  );
}

export default Dashboard;
