import React, { useRef } from "react";
import NurseWorkPageTop from "../../../components/nurseProfile/NurseWork/NurseWorkPageTop";
import map from "../../../assets/images/map.jpg";
import ClientInfos from "../../../components/nurseProfile/NurseWork/ClientInfos";
import ServiceDetails from "../../../components/nurseProfile/NurseWork/ServiceDetails";
import { faRoad, faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import GpsFromTo from "../../../components/nurseProfile/NurseWork/GpsFromTo";
import MapSection from "../../../components/nurseProfile/NurseWork/MapSection";
import { useNavigate } from "react-router-dom";





const AcceptingWork = () => {
  const navigate = useNavigate();

  const finish = () => { 
    navigate("/Nurse-endWork");

  }




  return (
    <div className="main bg-creme2 flex flex-col w-full min-h-screen relative">
      <MapSection photo={ map } />

      <div className="bg-creme2 z-2 w-full rounded-tl-20 rounded-tr-20 shadow-panelShadow px-6 pt-4 pb-20 flex-grow relative z-20 mt-[280px]">
        <hr className="border-t-[3px] border-darkGreen2 w-[70px] rounded-50 absolute left-[50%] translate-x-[-50%]" />
        <p className="mt-4 mb-5 text-darkGreen2 font-[800]">On the way</p>
        <ClientInfos />
        <hr className="mt-6 border-1 border-darkGreen4 " />

        <div className="ServiceDetails mt-6 flex items-center justify-between px-2">
          <ServiceDetails icon={faRoad} info={"2.6 km"}/>
          <ServiceDetails icon={faClock} info={"15 min"}/>
          <ServiceDetails icon={faDollarSign} info={"700 da"}/>
        </div>

        <div className="placement mt-6 flex items-start gap-2">
          <GpsFromTo />
          <div className="locations">
            <p className="text-writingGrey text-[12px]">from</p>
            <p className="text-darkGreen2 text-sm font-[500]">23 Main St, Springfield, IL 62701, USA</p>
            <p className="text-writingGrey text-[12px] mt-8">to</p>
            <p className="text-darkGreen2 text-sm font-[500]">456 Park Ave, New York, NY 10022, USA</p>
          </div>
        </div>

        <div className="buttons mt-7 flex flex-col items-center gap-5">
          <button className=" w-full py-3 rounded-20 border-2 border-darkGreen4 text-sm hover:bg-creme">Cancel</button>
          <button className=" w-full py-3 rounded-20 border-2 border-darkGreen4 text-sm hover:bg-creme" onClick={finish}>done</button>
        </div>




      </div>
    </div>
  );
}

export default AcceptingWork
