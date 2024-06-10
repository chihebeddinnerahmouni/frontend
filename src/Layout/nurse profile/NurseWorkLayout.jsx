import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import NurseWorkPageTop from '../../components/nurseProfile/NurseWork/NurseWorkPageTop';
import NurseButtomNav from '../../components/nurseProfile/NurseButtomNav';
import NurseInfosPage from "../../pages/Nurses/NurseInfosPage";



export const NurseDataContext = createContext();


const NurseWorkLayout = ({ children }) => {
  const [nurseData, setNurseData] = useState();
  const [requestData, setRequestData] = useState();


  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/nurses/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setNurseData(response.data);
        setRequestData(response.data.patientRequests);
      })
      .catch((error) => {
        console.log("from prifile error ", error);
      });
  }, [children]);


    return (
      <>
        <NurseDataContext.Provider value={{ nurseData, setNurseData, requestData }}>
        <div className="main bg-creme min-h-screen">
      {children.type !== NurseInfosPage && <NurseWorkPageTop />}
            <main>
              {children}
            </main>
      <NurseButtomNav />
          </div>
         </NurseDataContext.Provider>
          
        </>
  )
}

export default NurseWorkLayout
