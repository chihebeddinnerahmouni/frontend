import React, {useContext, useEffect} from 'react';
import image from '../../assets/images/doctor-img01.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../Layout/UserLayout';



const WaitChoosenNurse = ({ data, setChoosenNurseName, setIsWaiting }) => {
  
  const { setAcceptedRequest, acceptedRequest, setRequestData } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => { 
    window.socket.on('custom request accepted', () => { 
      setAcceptedRequest({ state: true , nurseData: data });
      navigate('/User-accepted');
    });

    window.socket.on('custom request refused', () => {
      setRequestData();
      setChoosenNurseName("");
      setIsWaiting(false);
      navigate('/User-set-position');
     });
  }, []);

  const accepta = () => { 
    const nurseData = acceptedRequest.nurseData;
    setAcceptedRequest({ state: true , nurseData: nurseData });
    navigate('/User-accepted');
  };







  return (
    <div className='w-full bg-white rounded-20 shadow-panelShadow p-5 flex flex-col items-center'>
      <img src={image} className='w-[120px] h-[120px] rounded-[50%] shadow-panelShadow' />
      <p className='text-darkGreen2 font-[600] text-[20px] mt-3'>{data.nurseName}</p>
       {/* statistiques icons start*/}
      <div className="stats flex items-center gap-10 mt-5">
                  <div className="stat flex flex-col gap-1 items-center">
                      <FontAwesomeIcon icon={faUsers} className={`text-darkGreen4 text-[27px]`} />
                      <span className={`text-darkGreen2 text-[23px]`}>{data.patientClients}</span>
                  </div>
                  <div className="stat flex flex-col gap-1 items-center">
                      <FontAwesomeIcon icon={faStar} className={`text-darkGreen4 text-[27px]`}/>
                      <span className={`text-darkGreen2 text-[23px]`}>{data.nurseRate}</span>
                  </div>
                  <div className="stat flex flex-col gap-1 items-center">
                      <FontAwesomeIcon icon={faHeart} className={`text-darkGreen4 text-[27px]`}/>
                      <span className={`text-darkGreen2 text-[23px]`}>{data.nurseLikes}</span>
                  </div>
      </div>
      {/* statistiques icons end*/}
      <p className="mt-5 text-writingGrey">
        Nurse {data.nurseName} has recieved ur request, chwya w yglblk, kon yacceptik troh direct l page Te3 khdma
      </p>
      <div className="loader-spanne-20 mt-6">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      <button className='mt-6' onClick={accepta}>
        accepta
      </button>

    </div>
  )
}

export default WaitChoosenNurse
