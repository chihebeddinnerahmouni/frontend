import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import NurseWorkPageTop from '../../components/nurseProfile/NurseWork/NurseWorkPageTop';
import NurseButtomNav from '../../components/nurseProfile/NurseButtomNav';
import NurseInfosPage from "../../pages/Nurses/NurseInfosPage";


export const NurseDataContext = createContext();


const NurseWorkLayout = ({ children }) => {
  const [nurseData, setNurseData] = useState();
  const [isWork, setIsWork] = useState(false);
  const [isTaken, setIsTaken] = useState(false);


  console.log("isWork", isWork);
  console.log("isTaken", isTaken);

    return (
      <>
        <NurseDataContext.Provider value={{ nurseData, setNurseData, /*setNurseData, requestData*/ isWork ,setIsWork, isTaken, setIsTaken}}>
        <div className="bg-creme2 min-h-screen w-full">
      {children.type !== NurseInfosPage && <NurseWorkPageTop />}
            <main>
              <div className="main">
                {children}
              </div>
            </main>
      <NurseButtomNav />
          </div>
         </NurseDataContext.Provider>
          
        </>
  )
}

export default NurseWorkLayout
