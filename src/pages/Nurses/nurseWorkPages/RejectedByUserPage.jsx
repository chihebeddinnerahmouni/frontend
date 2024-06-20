import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


const RejectedByUserPage = () => {

    const navigate = useNavigate();
    const back = () => { 
    navigate("/Nurse-Work");
    }

  return (
    <div className='bg-white p-5 shadow-panelShadow rounded-20 flex flex-col items-center w-full justify-between'>
          <FontAwesomeIcon icon={faXmark} className='text-[120px] text-red-400' />
          <p className='text-darkGreen4 font-[700] text-[30px] mt-10'>Rejected by user</p>
          <p className='text-writingGrey text-center mt-2'>The user has rejected your request</p>
          <FontAwesomeIcon icon={faArrowLeft} className='mt-6 shadow-panelShadow w-[30px] h-[30px] p-2 rounded-50' onClick={back}/>
          
    </div>
  )
}

export default RejectedByUserPage
