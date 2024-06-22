import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import NurseWorkPageTop from '../../components/nurseProfile/NurseWork/NurseWorkPageTop';
import NurseButtomNav from '../../components/nurseProfile/NurseButtomNav';
import NurseInfosPage from "../../pages/Nurses/NurseInfosPage";


export const NurseDataContext = createContext();


const NurseWorkLayout = ({ children }) => {
 // const [nurseData, setNurseData] = useState();
  const [nurseLocation, setNurseLocation] = useState();
  const [isWork, setIsWork] = useState(false);
  const [isTaken, setIsTaken] = useState(false);
  const [requestData, setRequestData] = useState();
  const [isRejected, setIsRejected] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const nurseData = JSON.parse(localStorage.getItem("userData"));
  if (nurseData) window.socket.emit("ownRoom", nurseData.name);
  


    return (
      <>
        <NurseDataContext.Provider value={{ /*nurseData, setNurseData,*/ /*setNurseData, requestData*/ isWork ,setIsWork, isTaken, setIsTaken, requestData, setRequestData, nurseLocation, setNurseLocation, isRejected, setIsRejected, isPending, setIsPending}}>
            {children.type !== NurseInfosPage && <NurseWorkPageTop />}
            <main>
              <div className={`main bg-creme2 w-full mt-[-50px] min-h-screen flex flex-col` }>
                {children}
              </div>
            </main>
            <NurseButtomNav />
         </NurseDataContext.Provider>
          
        </>
  )
}

export default NurseWorkLayout
