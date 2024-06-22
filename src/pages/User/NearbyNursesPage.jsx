import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../../Layout/UserLayout';
import NearByNurseComp from '../../components/UserProfile/nearby nurses/NearByNurseComp';
import image from '../../assets/images/doctor-img01.png'
import image2 from '../../assets/images/doctor-img02.png'
import image3 from '../../assets/images/doctor-img03.png';
import Loading from '../../components/all/Loading';
import AcceptedRequest from './AcceptedRequestPage';
import NoNearbyNursePage from './NoNearbyNursePage';
import WaitForAccept from './WaitForAccept';
import WaitForChoosen from './WaitChoosenNursePage';
import axios from 'axios';




const NearbyNurses = () => {

  const { acceptedRequest ,nurseList ,userLocation ,selectedService ,selectedSubService, setAcceptedRequest , requestData } = useContext(UserDataContext);
  const [isWaiting, setIsWaiting] = useState(true);
  const [choosenNurseName, setChoosenNurseName] = useState("");


  const sendRequest = () => {
    axios.put('http://localhost:3000/patients/profile/choose-nurse',
      {
        nurseName: choosenNurseName,
        service: selectedService,
        subService: selectedSubService,
        userLocation: userLocation
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    ).then(res => { 
      setIsWaiting(true);
      //setAcceptedRequest({ status: false, nurseData: {} });
      window.socket.emit("send to choosen nurse", {requestData, choosenNurseName});
    }).catch(err => {
      console.log("sendRequest for choosen nurse error", err);
    });
  }



  return (
    <>
    <div className='main bg-creme2 flex flex-col items-center justify-between pl-4 pb-[130px] relative h-[100vh]' style={isWaiting ? {filter: "blur(3px) brightness(70%)", pointerEvents: "none"} : {}}>
      <div className="top w-full flex flex-col items-center rounded-br-20 rounded-bl-20 overflow-auto pr-2">
        <p className='text-darkGreen2 font-[600] text-[20px] mt-12 text-center'>Nearby Nurses</p>
        <p className='text-writingGrey text-sm self-start mt-6'>Selectionner</p>    
        <div className="nearByNurses mt-2 flex flex-col w-full gap-2">
              {nurseList ? nurseList.map((nurse, index) => {
                return <NearByNurseComp key={index} nurseName={nurse.nurseName} nurseRate={nurse.nurseRate} nurseLikes={nurse.nurseLikes} nurseSpecialite={nurse.nurseSpecialite} patientClients={nurse.patientClients} profilePic={nurse.profilePic} price={nurse.price} setChoosenNurseName={setChoosenNurseName} choosenNurseName={choosenNurseName}/>
              }) : <Loading />}  
        </div>
      </div>

      <div className="confirmeNurse w-full mt-5 pr-4 fixed bottom-[70px]">
        <button className={`w-full py-3 rounded-[10px] ${choosenNurseName ? 'bg-darkGreen4' : 'bg-gray-400'} shadow-panelShadow text-creme2`} disabled={!choosenNurseName} onClick={sendRequest}>
          cbn n3ytolo?
        </button>
      </div>      
    </div>

      {isWaiting &&
        <div className={`acceptedRequest w-[80%] absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-[40%]`}>
        {acceptedRequest.state
          ? <AcceptedRequest data={acceptedRequest.nurseData} setIsWaiting={setIsWaiting} />
          : choosenNurseName !== ""
              ? <WaitForChoosen data={acceptedRequest.nurseData} setChoosenNurseName={setChoosenNurseName} setIsWaiting={setIsWaiting} />
            : <WaitForAccept />}
      </div>}
      
    </>
  )
}

export default NearbyNurses;