import React, { useContext, useEffect } from 'react';
import map from '../../assets/images/map.jpg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import AcceptingNurseInfoComp from '../../components/UserProfile/accepting service/AcceptingNurseInfoComp';
import { UserDataContext } from '../../Layout/UserLayout';


const AcceptedServicePage = () => {

  const { selectedSubService, selectedService  } = useContext(UserDataContext);

  return (
    <div className='min-h-screen flex flex-col pt-12 bg-creme2'>
      <span className='text-darkGreen4 text-[20px] font-[600] text-center flex items-center pl-4 gap-6'><FontAwesomeIcon icon={faRoad} className='text-darkGreen2 border-1 border-darkGreen4 p-2 w-[24px] h-[24px] rounded-50 shadow-panelShadow'/> location on map</span>
      <div className="map w-full h-[55vh] mt-6" style={{backgroundImage: `url(${encodeURI(map)})`, backgroundSize: "cover", backgroundPosition: "center",}}></div>
      <div className="asking w-full flex-grow bg-creme2 shadow-panelShadow px-4 pt-5 pb-[80px] rounded-tl-20 rounded-tr-20 mt-[-40px] flex flex-col items-center justify-beetween">
        <hr className="border-t-[3px] border-darkGreen2 w-[70px] rounded-50" />
        <p className='text-darkGreen4 text-[18px] font-[500] mt-3'>{selectedService}</p>
        <p className='text-writingGrey mt-1'>{selectedSubService}</p>
        <AcceptingNurseInfoComp />
        <button className='w-full border-2 border-darkGreen4 shadow-panelShadow text-darkGreen4 py-3 rounded-20 mt-8'>cancel service</button>
      </div>
    </div>
  )
}

export default AcceptedServicePage
