import React, { useRef } from "react";
import NurseWorkPageTop from "../../../components/nurseProfile/NurseWork/NurseWorkPageTop";
import map from "../../../assets/images/map.jpg";
import ClientInfos from "../../../components/nurseProfile/NurseWork/ClientInfos";
import ServiceDetails from "../../../components/nurseProfile/NurseWork/ServiceDetails";
import { faRoad, faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import GpsFromTo from "../../../components/nurseProfile/NurseWork/GpsFromTo";
import MapSection from "../../../components/nurseProfile/NurseWork/MapSection";

const AcceptingWork = () => {
  return (
    <div className="main bg-creme2 flex flex-col w-full min-h-screen relative">
      <MapSection photo={ map } />

      <div className="bg-creme2 z-2 w-full rounded-tl-20 rounded-tr-20 shadow-panelShadow px-4 pt-3 pb-[70px] flex-grow relative z-20 mt-[280px]">
        <hr className="border-t-[3px] border-darkGreen2 w-[70px] rounded-50 absolute left-[50%] translate-x-[-50%]" />
        <p className="text-sm mt-4 text-darkGreen2 font-[500]">On the way</p>
        <ClientInfos />
        <hr className="mt-4 border-1 border-darkGreen4 " />

        <div className="ServiceDetails mt-4 flex items-center justify-between px-2">
          <ServiceDetails icon={faRoad} info={"2.6 km"}/>
          <ServiceDetails icon={faClock} info={"15 min"}/>
          <ServiceDetails icon={faDollarSign} info={"700 da"}/>
        </div>

        <div className="placement mt-4 flex items-start gap-2">
          <GpsFromTo />
          <div className="locations">
            <p className="text-writingGrey text-[12px]">from</p>
            <p className="text-darkGreen2 text-sm font-[500]">23 Main St, Springfield, IL 62701, USA</p>
            <p className="text-writingGrey text-[12px] mt-8">to</p>
            <p className="text-darkGreen2 text-sm font-[500]">456 Park Ave, New York, NY 10022, USA</p>
          </div>
        </div>

        <div className="cancel">
          <button className="mt-4 w-full py-3 rounded-20 border-2 border-darkGreen4 text-sm hover:bg-creme">Cancel</button>
        </div>




      </div>
    </div>
  );
}

export default AcceptingWork
