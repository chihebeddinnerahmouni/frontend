import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { NurseDataContext } from "../../../Layout/nurse profile/NurseWorkLayout";
import { useContext } from "react";

const WaitForReaquest = () => {

  const navigate = useNavigate();
  const { setIsTaken } = useContext(NurseDataContext);
  
  const aaa = () => { 
    navigate("/Nurse-recieving");
    setIsTaken(true);
  }

  return (
    <>
    <div className="main w-full pt-12 px-8 flex flex-col items-center ">
        <div className="content flex flex-col items-center mt-20">
          <FontAwesomeIcon icon={faCheck} className="text-darkGreen4 text-[200px]" />
          <h1 className="text-2xl text-darkGreen4 my-6">Waiting for Request</h1>
          <div className="loader"></div>
        </div>
      <button>
        <p className="" onClick={aaa}>arrived request</p>
      </button>
    </div> // end of main

    <div className="request">
        
    </div>
    </>
  );
};

export default WaitForReaquest;
