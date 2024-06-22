import React, {useEffect, useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { NurseDataContext } from '../../../Layout/nurse profile/NurseWorkLayout';


const RejectedByUserPage = (/*{setIsRejected, patientName}*/) => {

  const { setRequestData, requestData, setIsTaken, setIsRejected } = useContext(NurseDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsRejected(false);
      setIsTaken(false);
      setRequestData();
      navigate('/Nurse-Work');
    }, 10000);
   }, []);

  const back = () => { 
    setIsTaken(false);
    setIsRejected(false);
    setRequestData();
    navigate("/Nurse-Work");
  }
  

  

  return (
    <div className='bg-white p-5 shadow-panelShadow rounded-20 flex flex-col items-center w-full justify-between'>
          <FontAwesomeIcon icon={faXmark} className='text-[120px] text-red-400' />
      <p className='text-darkGreen4 font-[700] text-[30px] mt-10 text-center'>Rejected by {requestData.patient}</p>
          <p className='text-writingGrey text-center mt-2'>{requestData.patient} has rejected your request</p>
          <FontAwesomeIcon icon={faArrowLeft} className='mt-6 shadow-panelShadow w-[30px] h-[30px] p-2 rounded-50' onClick={back}/>
          
    </div>
  )
}

export default RejectedByUserPage
