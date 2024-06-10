import React, { useState, useEffect, createContext } from "react";
import NurseButtomNav from "../../components/nurseProfile/NurseButtomNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const NurseDataContext = createContext();

const NurseLayout = ({ children }) => {
  const [nurseData, setNurseData] = useState();

    const token = localStorage.getItem("token");
useEffect(() => {
    axios
      .get("http://localhost:3000/nurses/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNurseData(response.data);
      })
      .catch((error) => {
        console.log("from prifile error ", error);
      });
  }, []); 

  return (
    <NurseDataContext.Provider value={{ nurseData, setNurseData }}>
      <div className="main relative">
        <main>
          {children}
        </main>
        <NurseButtomNav />
      </div>
    </NurseDataContext.Provider>
  );
};

export default NurseLayout;
