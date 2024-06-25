import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { UserDataContext } from "../../../Layout/UserLayout";
import { useNavigate } from "react-router-dom";



const PositionOptions = ({setUserLocation}) => {

  const [selectedOption, setSelectedOption] = useState();
  //const { setUserLocation } = useContext(UserDataContext);
  const navigate = useNavigate();

  const option1 = () => { 
    setSelectedOption("option1");
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  }

  const option2 = () => { 
    setSelectedOption("option2");
    navigate("/User-map");
   }










  return (
    <div className="Options w-full flex flex-col items-start">

<div className={`option1 flex items-center gap-3  text-sm ${selectedOption === 'option1' ?  'text-darkGreen4' : 'text-darkGreen1'}`}>
        <FontAwesomeIcon icon={faCrosshairs} className="" />
        <button className={`text-sm ${selectedOption === 'option1' ?  'text-darkGreen3' : 'text-darkGreen1'}`} onClick={option1}>
          Utuliser ma position
        </button>
      </div>
      <hr className="border-t-2 border-darkGreen1 my-3 w-[95%] self-end" />
      <div className={`option2 flex items-center gap-3  text-sm ${selectedOption === 'option2' ?  'text-darkGreen4' : 'text-darkGreen1'}`}>
        <FontAwesomeIcon icon={faMap} className="" />
      <button className={`text-sm ${selectedOption === 'option2' ?  'text-darkGreen3' : 'text-darkGreen1'}`} onClick={option2}>
          Selectionner sur le map
        </button>
      </div>
    </div>
  );
};

export default PositionOptions;
