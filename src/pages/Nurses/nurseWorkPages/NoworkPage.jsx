import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NoworkPage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center pt-40 px-4">
        <FontAwesomeIcon icon={faXmark} className="text-red-400 text-[200px] "/>
        <span className="font-[500] text-darkGreen4 text-2xl">
          You want to work ?
        </span>
        <span className="font-[400] text-darkGreen4 text-lg mt-2 text-center">
          Now you are out, please change your status
        </span>
      </div>
    </>
  );
};

export default NoworkPage;
