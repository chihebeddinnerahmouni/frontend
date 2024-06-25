import React, { useState, useEffect, useContext } from 'react';
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectService from '../../components/UserProfile/User asking/SelectService';
import PositionOptions from '../../components/UserProfile/User asking/PositionOptions';
import { UserDataContext } from '../../Layout/UserLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const SetPosition = () => {

  const { setResStatus, setNurseList,setUserLocation,userLocation ,selectedService, setSelectedService, selectedSubService, setSelectedSubService, subServices, setSubServices, setRequestData } = useContext(UserDataContext);
  const [isValidLocation, setIsValidLocation] = useState(false);
  const navigate = useNavigate();

  //for reseting patient
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.put('http://localhost:3000/patients/profile/reset-patient',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then(res => {
     })
    .catch(err => console.log("reseting patient err ",err));  
  }, []);

  // for checking if the user location is valid
  useEffect(() => {
    setIsValidLocation(userLocation && userLocation.length > 0);
  }, [userLocation]);
  
  // for sending the request to the nearby nurses
  const nearbyNurses = () => { 
    navigate("/User-result");
    const token = localStorage.getItem('token');
    axios.post('http://localhost:3000/patients/profile/nearby-nurses', {
      userLocation: userLocation,
      service: selectedService,
      subService: selectedSubService
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {  
      setResStatus(res.status);
      setNurseList(res.data.nurseList);
      setRequestData(res.data.requestData);     
      window.socket.emit('sendRequest',"chiheb" ,res.data.nurseListNames, res.data.requestData)

    }).catch(err => {
      console.log(err);
    })
  }



  return (
    <div className='bg-creme2 w-full min-h-screen flex flex-col items-center pt-12'>
      <p className='text-darkGreen2 font-[600] text-[20px]'>Personalise votre demande</p>
      
      <div className="service-position w-full px-8 buttomShadow mt-12 pb-8">
        <SelectService selectedService={selectedService} setSelectedService={setSelectedService} selectedSubService={selectedSubService} setSelectedSubService={setSelectedSubService} subServices={subServices} setSubServices={setSubServices}/>
        <div className="position mt-6 w-full relative flex items-center">
          <FontAwesomeIcon icon={faMapPin} className='absolute text-darkGreen4 left-4'/>
          <input type="text" placeholder='position' className='location appearance-none shadow-panelShadow rounded-20 text-sm py-2 pl-10 w-full outline-none text-darkGreen1 focus:ring-1 focus:ring-darkGreen4' value={userLocation || ''}  onChange={e => {const parts = e.target.value.split(',').map(Number); setUserLocation(parts);}}/>
        </div>  
      </div>

      <div className="taht w-full px-8 pb-[80px] flex flex-col relative items-center gap-9 flex-1 justify-between">
          <div className="positionOptions mt-6 w-full ">
          <PositionOptions setUserLocation={setUserLocation} />
          </div>

        <div className={`terminer w-full text-creme2 py-3 text-center ${isValidLocation && selectedService !== "" && selectedSubService !== "" ? 'bg-darkGreen4' : 'bg-gray-400'} rounded-[10px]`}>
          <button disabled={!(isValidLocation && selectedService !== "" && selectedSubService !== "" )} onClick={nearbyNurses}>
              Terminer
            </button>
          </div>
      </div>
    
    
    </div>
  )
}

export default SetPosition
