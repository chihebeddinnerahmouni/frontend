import React, { useState, useEffect } from 'react';
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectService from '../../components/UserProfile/User asking/SelectService';
import PositionOptions from '../../components/UserProfile/User asking/PositionOptions';




const SetPosition = () => {

  const [selectedService, setSelectedService] = useState('');
  const [selectedSubService, setSelectedSubService] = useState('');
  const [subServices, setSubServices] = useState([]);




  return (
    <div className='bg-creme2 w-full min-h-screen flex flex-col items-center pt-12'>
      <p className='text-darkGreen2 font-[600] text-[20px]'>Personalise votre demande</p>
      
      <div className="service-position w-full px-8 buttomShadow mt-12 pb-8">
        <SelectService selectedService={selectedService} setSelectedService={setSelectedService} selectedSubService={selectedSubService} setSelectedSubService={setSelectedSubService} subServices={subServices} setSubServices={ setSubServices} />
        <div className="position mt-6 w-full relative flex items-center">
          <FontAwesomeIcon icon={faMapPin} className='absolute text-darkGreen4 left-4'/>
          <input type="text" placeholder='position' className='appearance-none shadow-panelShadow rounded-20 text-sm py-2 pl-10 w-full outline-none text-darkGreen1 focus:ring-1 focus:ring-darkGreen4' />
        </div>  
      </div>

      <div className="positionOptions mt-6 w-full px-8">
        <PositionOptions />
      </div>

      
      



    </div>
  )
}

export default SetPosition
