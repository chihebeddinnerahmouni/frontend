import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import map from "../../../assets/images/map.jpg";
import Distance from "../../../components/nurseProfile/recieving requests/Distance";
import CheckClientAndPrice from "../../../components/nurseProfile/recieving requests/CheckClientAndPrice";
import { NurseDataContext } from "../../../Layout/nurse profile/NurseWorkLayout";




const RecievingRequest = () => {
  
  const { requestData } = useContext(NurseDataContext);
  console.log("requestData", requestData);
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [distance, setDistance] = useState("");
  const [price, setPrice] = useState("");
  const [patient, setPatient] = useState("");
  const [patientRate, setPatientRate] = useState("");

  useEffect(() => {
    if (requestData) {
      setService(requestData[0].service);
      setDistance(requestData[0].distance);
      setPrice(requestData[0].price);
      setPatient(requestData[0].patient);
      setPatientRate(requestData[0].patientRate);
    }
  }, [requestData]);

 

 
  
 
  

  const accept = () => { 
    navigate("/Nurse-accepting");
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
          <span className=" mt-4 text-darkGreen2 font-[600]">{service}</span>
          <span className="mt-4"><Distance Distance={distance} /></span>
          <hr className=" w-full my-6 mb-8" />
          <CheckClientAndPrice price={price} patient={patient} patientRate={patientRate} />
          <div className="buttons flex justify-between w-full mt-8">
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
