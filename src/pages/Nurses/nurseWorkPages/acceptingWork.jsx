import React, { useRef, useContext, useEffect, useState } from "react";
import NurseWorkPageTop from "../../../components/nurseProfile/NurseWork/NurseWorkPageTop";
import map from "../../../assets/images/map.jpg";
import ClientInfos from "../../../components/nurseProfile/NurseWork/ClientInfos";
import ServiceDetails from "../../../components/nurseProfile/NurseWork/ServiceDetails";
import { faRoad, faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import GpsFromTo from "../../../components/nurseProfile/NurseWork/GpsFromTo";
import MapSection from "../../../components/nurseProfile/NurseWork/MapSection";
import { useNavigate } from "react-router-dom";
import { NurseDataContext } from "../../../Layout/nurse profile/NurseWorkLayout";
import axios from "axios";
import RejectedByUserPage from "./RejectedByUserPage";




const AcceptingWork = () => {


  const { requestData, nurseLocation, setRequestData, setIsTaken, isTaken, isRejected, setIsRejected } = useContext(NurseDataContext);
  const navigate = useNavigate();
  if (!requestData) return <></>;

  useEffect(() => {
    window.socket.on('rejected nurse', (data) => { 
      console.log(data);
      setIsTaken(false);
      setIsRejected(true);
    });
  }, []);
  
  

  // work done function
  const finish = () => { 
    axios.put("http://localhost:3000/nurses/profile/service-end",
      {},
      { headers: { Authorization: `bearer ${localStorage.getItem('token')}` } }
    ).then(res => {
      window.socket.emit('nurse end work', {patientName: requestData.patient});
      navigate("/Nurse-endWork");
      setIsTaken(false);
    }).catch(err => { 
      console.log("from acceptingwork axios err :", err);
    });
  }




  return (
    <>
      <div className={`main bg-creme2 flex flex-col w-full min-h-screen relative `} style={ isRejected ? {filter: "blur(3px) brightness(70%)", pointerEvents: "none"} : {}}>
      <MapSection photo={ map } />

      <div className="bg-creme2 z-2 w-full rounded-tl-20 rounded-tr-20 shadow-panelShadow px-6 pt-4 pb-20 flex-grow relative z-20 mt-[280px]">
        <hr className="border-t-[3px] border-darkGreen2 w-[70px] rounded-50 absolute left-[50%] translate-x-[-50%]" />
        <p className="mt-4 text-darkGreen2 font-[700] text-center">{requestData.service}</p>
        <p className="mt-1 mb-5 text-writingGrey font-[600] text-center">{requestData.subService}</p>
        <ClientInfos name={requestData.patient} rate={requestData.patientRate}/>
        <hr className="mt-6 border-1 border-darkGreen4 " />

        <div className="ServiceDetails mt-6 flex items-center justify-between px-2">
          <ServiceDetails icon={faRoad} info={requestData.distance +' ' + "km"}/>
          <ServiceDetails icon={faClock} info={"15 min"}/>
          <ServiceDetails icon={faDollarSign} info={requestData.price +' ' + 'DZD'}/>
        </div>

        <div className="placement mt-6 flex items-start gap-2">
          <GpsFromTo to={requestData.location.coordinates} />
          <div className="locations">
            <p className="text-writingGrey text-[12px]">from</p>
            <p className="text-darkGreen2 text-sm font-[500]">{nurseLocation}</p>
            <p className="text-writingGrey text-[12px] mt-8">to</p>
            <p className="text-darkGreen2 text-sm font-[500]">{requestData.location}</p>
          </div>
        </div>

        <div className="buttons mt-7 flex flex-col items-center gap-5">
          <button className=" w-full py-3 rounded-20 border-2 border-darkGreen4 text-sm hover:bg-creme">Cancel</button>
          <button className=" w-full py-3 rounded-20 border-2 border-darkGreen4 text-sm hover:bg-creme" onClick={finish}>done</button>
        </div>
      </div>
    </div>

     {isRejected && <div className={`acceptedRequest w-[80%] absolute top-[40%] left-[50%]  transform -translate-x-[50%] -translate-y-[40%] z-30`}>
        <RejectedByUserPage /*isRejected={isRejected} setIsRejected={setIsRejected} patientName={requestData.patient}*/ />
      </div>}
    </>
  );
}

export default AcceptingWork
