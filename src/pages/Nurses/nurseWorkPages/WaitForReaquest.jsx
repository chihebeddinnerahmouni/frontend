import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { NurseDataContext } from "../../../Layout/nurse profile/NurseWorkLayout";
import { useContext } from "react";
import RecievingRequest from "./RecievingRequest";
import WaitUserConfirmation from "./WaitUserConfirmation";
import RejectedByUserPage from "./RejectedByUserPage";



const WaitForReaquest = () => {

  const { setIsTaken, isTaken, isWork, setRequestData, isRejected, setIsRejected, requestData, isPending, setIsPending } = useContext(NurseDataContext);
  const [isChoosen, setIsChoosen] = useState(false);
  //const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    window.socket.on('newRequest', (message, requestData) => {
      setIsTaken(true);
      setRequestData(requestData);
    });

    window.socket.on('u are choosen', (message, data) => { 
      setIsTaken(true);
      setRequestData(data);
      setIsChoosen(true);
    })
  }, []);
  


  return (
    <>
    <div className={`main w-full flex-grow pt-12 px-8 flex flex-col items- ${isTaken ? 'bg-[#888888]' : ''}`} style={isTaken ? {filter: "blur(3px) brightness(70%)", pointerEvents: "none"} : {}}>
        <div className="content flex flex-col items-center mt-20">
          <FontAwesomeIcon icon={faCheck} className="text-darkGreen4 text-[200px]" />
          <h1 className="text-2xl text-darkGreen4 my-6">Waiting for Request</h1>
          <div className="loader"></div>
        </div>
    </div>


      
     {/*</div> {isTaken && !isPending && !isRejected ?
      <div className={`request w-[80%] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2`} >
        <RecievingRequest />
      </div>: null}
      
      {isTaken && isPending && !isRejected?
      <div className="waitUserConfirmation w-[80%] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <WaitUserConfirmation />
      </div> : null}
      
      {isTaken && !isPending && isRejected ?
      <div className="userrejectedYou w-[80%] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <RejectedByUserPage />
      </div> : null}*/ }

      {isTaken &&
        <div className="w-[80%] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">      
          {isPending ?
            <WaitUserConfirmation />
           : isRejected ? 
            <RejectedByUserPage />
              : <RecievingRequest isChoosen={isChoosen} setIsChoosen={setIsChoosen} />}     
      </div>}


    </>
  );
};

export default WaitForReaquest;
