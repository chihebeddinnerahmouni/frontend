import React, { useEffect, useContext, useState } from 'react';
import { NurseDataContext } from '../../../Layout/nurse profile/NurseWorkLayout';
import { useNavigate } from 'react-router-dom';

const WaitUserConfirmation = ({}) => {

  const { setIsRejected, setIsPending, setIsTaken, requestData} = useContext(NurseDataContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [countdown, setCountdown] = useState(15);

  useEffect(() => { 
    setName(requestData.patient)

        const chrono = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown > 0 ? prevCountdown - 1 : 0);
    }, 1000);

     window.socket.on('rejected nurse', (data) => {
      setIsPending(false);
      setIsRejected(true);
     });
    
    window.socket.on('user accepted u', (data) => {
      setIsPending(false);
      setIsTaken(false);
      navigate('/Nurse-accepting');
    });
    
      return () => {
    clearInterval(chrono);
    window.socket.off('rejected nurse');
    window.socket.off('user accepted u');
  };
  }, [])

  return (
    <div className='w-full bg-white py-2 px-2 rounded-20 flex flex-col items-center gap-3'>
       <div className="circular-countdown">
        <svg>
          <circle r="18" cx="20" cy="20"></circle>
          <circle className="progress" r="18" cx="20" cy="20" style={{animationDuration: '15s'}}></circle>
        </svg>
      </div>
        <p className='text-darkGreen4 text-[18px] font-[700] text-center'>wait for {name}'s confirmation</p>
        <p className='text-center text-writingGrey'>during the next 20sec u will be accepted automayicually</p>
    </div>
  )
}

export default WaitUserConfirmation
