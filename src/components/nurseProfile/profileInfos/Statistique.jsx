import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Statistique = ({title, icon, number}) => {
  return (
    <>
          <div className="bg-white inline-flex flex-col gap-1 p-4 rounded-20 shadow-panelShadow items-center">
        <p className="text-writingGrey text-[13px]">{ title }</p>
        <span className="text-writingGrey"><span className="text-darkGreen4 text-[20px] mr-2"><FontAwesomeIcon icon={icon} /></span>{ number }</span>
      </div>
    </>
  );
};

export default Statistique;


/*          <div className="bg-white inline-flex flex-col gap-1 p-4 rounded-20 shadow-panelShadow items-center">
              <p className="text-writingGrey text-[13px]">Patients</p>
              <span className="text-writingGrey"><span className="text-darkGreen4 text-[20px] mr-2"><FontAwesomeIcon icon={faUsers} /></span>380</span>
      </div>*/ 