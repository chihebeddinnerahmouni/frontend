import React, { useEffect, useContext } from 'react';
import { NurseDataContext } from '../../../Layout/nurse profile/NurseWorkLayout';
import { useNavigate } from 'react-router-dom';

const WaitUserConfirmation = ({}) => {

  const { setIsRejected, setIsPending, setIsTaken, requestdata} = useContext(NurseDataContext);
  const navigate = useNavigate();

  useEffect(() => { 
     window.socket.on('rejected nurse', (data) => {
      console.log(data);
      setIsPending(false);
      setIsRejected(true);
     });
    
    window.socket.on('user accepted u', (data) => {
      setIsPending(false);
      setIsTaken(false);
      navigate('/Nurse-accepting');
     });
  }, [])

  return (
    <div className='w-full bg-white p-3 rounded-20 flex flex-col items-center gap-3'>
      <p>wait for </p>
    </div>
  )
}

export default WaitUserConfirmation
