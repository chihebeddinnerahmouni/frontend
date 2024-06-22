import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import map from "../../../assets/images/map.jpg";
import Distance from "../../../components/nurseProfile/recieving requests/Distance";
import CheckClientAndPrice from "../../../components/nurseProfile/recieving requests/CheckClientAndPrice";
import { NurseDataContext } from "../../../Layout/nurse profile/NurseWorkLayout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const RecievingRequest = ({isChoosen, setIsChoosen}) => {
  
  const { setIsTaken, /*isTaken, setRequestData,*/ nurseData, requestData, setRequestData, setIsPending} = useContext(NurseDataContext);
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [subService, setSubService] = useState("");
  const [distance, setDistance] = useState("");
  const [price, setPrice] = useState("");
  const [patient, setPatient] = useState("");
  const [patientRate, setPatientRate] = useState("");

  
 useEffect(() => {
  if (!requestData) return<></>;
  setService(requestData.service);
  setSubService(requestData.subService);
  setDistance(requestData.distance);
  setPrice(requestData.price);
  setPatient(requestData.patient);
  setPatientRate(requestData.patientRate);
}, [requestData]);



  const accept = () => { 
    const nurseData = JSON.parse(localStorage.getItem("userData"));
      axios.put("http://localhost:3000/nurses/profile/accept-request",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }).then((response) => {
          if (!isChoosen) {
            window.socket.emit('acceptRequest', patient, { nurseName: nurseData.name, nurseRate: nurseData.averageRating, nurseLikes: 80, nurseSpecialite: nurseData.specialite, patientClients: nurseData.patientClients, price: 500 });
            setIsPending(true);
          } else {
            window.socket.emit('accept custom request', patient);
            setIsChoosen(false);
            navigate('/Nurse-accepting');
          }
        })
        .catch((error) => {
          console.log("from recieving accept error ", error);
        });
  };

  const decline = () => {
    //setIsTaken(false);
    axios.put("http://localhost:3000/nurses/profile/refuse-request",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      .then((response) => {
        if (!isChoosen) {
          //toast.success(response.data.message);
          setIsTaken(false);
          setRequestData();
        } else {
          setIsChoosen(false);
          setRequestData();
          window.socket.emit('refuse custom request', patient);
         }
      

       })
      .catch((error) => {
        console.log("from recieving decline error ", error);
      });
  };




  return (
    <>
        <div className="req w-full bg-white p-3 rounded-20 flex flex-col items-center gap-3">
          <div className="map w-full h-[200px] rounded-20" style={{ backgroundImage: `url(${encodeURI(map)})`, backgroundSize: "cover", backgroundPosition: "center", }}></div>
          <div className="infos flex flex-col items-center w-full">
            <hr className="border-t-[3px] border-darkGreen2 w-[70px] rounded-50" />
            <p className=" mt-2 text-darkGreen2 font-[600]">{service}</p>
            <span className=" mt-1 text-writingGrey">{subService}</span>
            <span className="mt-4"><Distance Distance={distance} /></span>
            <hr className=" w-full my-6 mb-8" />
            <CheckClientAndPrice price={price} patient={patient} patientRate={patientRate} />
            <div className="buttons flex justify-between w-full mt-8">
            <button className="text-darkGreen4 py-2 rounded-[10px] border-2 border-darkGreen4 w-[48%]" onClick={decline}>
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


/*
<div className="main bg-green-300 flex flex-col items-center justify-center">
      <div className="relative flex flex-col  justify-center items-center">
        <div
          className="map w-full h-[250px]"
          style={{
            backgroundImage: `url(${encodeURI(map)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="bg-red-300 relative z-2 w-full flex-grow rounded-tl-20 rounded-tr-20 px-4 pt-3 pb-[70px] flex flex-col items-center">
          <hr className="border-t-[3px] border-darkGreen2 w-[70px] rounded-50" />
          <span className=" mt-4 text-darkGreen2 font-[600]">{service}</span>
          <span className=" mt-1 text-writingGrey">{subService}</span>
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
      </div>
      */