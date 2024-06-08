import React from "react";
import { useNavigate } from 'react-router-dom';
import map from "../../../assets/images/map.jpg";
import Distance from "../../../components/nurseProfile/recieving requests/Distance";
import CheckClientAndPrice from "../../../components/nurseProfile/recieving requests/CheckClientAndPrice";




const RecievingRequest = () => {
  
  const navigate = useNavigate();
  
  const accept = () => { 
    navigate("/NurseWork/accepting");
  };




  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <div
          className="map w-full h-[450px] absolute top-[-50px]"
          style={{
            backgroundImage: `url(${encodeURI(map)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="bg-creme2 relative z-2 w-full flex-grow rounded-tl-20 rounded-tr-20 shadow-panelShadow mt-[320px] px-4 pt-3 pb-[70px] flex flex-col items-center">
          <hr className="border-t-[3px] border-darkGreen2 w-[70px] rounded-50" />
          <span className=" mt-4 text-darkGreen2 font-[600]">yodhrb bra</span>
          <span className="mt-2"><Distance Distance={"2.6"} /></span>
          <hr className=" w-full my-4" />
          <CheckClientAndPrice price={500} />
          <div className="buttons flex justify-between w-full mt-6">
            <button className="text-darkGreen4 py-2 rounded-[10px] border-2 border-darkGreen4 w-[48%]">
              Decline
            </button>
            <button className="bg-darkGreen4 text-white py-2 rounded-[10px] w-[48%]" onClick={accept}>
              accept
            </button>
          </div>

          
          
          </div>
      </div>
    </>
  );
};

export default RecievingRequest;
