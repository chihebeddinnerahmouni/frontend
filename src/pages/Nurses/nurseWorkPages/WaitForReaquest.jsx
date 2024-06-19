import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { NurseDataContext } from "../../../Layout/nurse profile/NurseWorkLayout";
import { useContext } from "react";
import RecievingRequest from "./RecievingRequest";



const WaitForReaquest = () => {

  const navigate = useNavigate();
  const { setIsTaken, isTaken, isWork } = useContext(NurseDataContext);
 
  window.socket.on('newRequest', (data) => { 
    setIsTaken(true);
    console.log(data);
  });
  
  /*const acceptreq = () => { 
    setIsTaken(true);
  }*/

  return (
    <>
    <div className={`main w-full flex-grow pt-12 px-8 flex flex-col items- ${isTaken ? 'bg-[#888888]' : ''}`} style={isTaken ? {filter: "blur(3px) brightness(70%)", pointerEvents: "none"} : {}}>
        <div className="content flex flex-col items-center mt-20">
          <FontAwesomeIcon icon={faCheck} className="text-darkGreen4 text-[200px]" />
          <h1 className="text-2xl text-darkGreen4 my-6">Waiting for Request</h1>
          <div className="loader"></div>
        </div>
        {/* <button>
        <p className="" onClick={acceptreq}>arrived request</p>
  </button>*/}
    </div>

    <div className={`request ${isTaken ? "" : "hidden"} w-[80%] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2`} >
        <RecievingRequest />
    </div>
    </>
  );
};

export default WaitForReaquest;
