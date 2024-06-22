import React, {useContext, useEffect, useRef} from 'react';
import image from '../../assets/images/doctor-img01.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { UserDataContext } from '../../Layout/UserLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AcceptedRequest = ({data, setIsWaiting}) => {

  const { setAcceptedRequest } = useContext(UserDataContext);
  const navigate = useNavigate();
  
  let timer = null;
 useEffect(() => { 
     timer = setTimeout(() => {
    window.socket.emit('i accept this nurse', { nurseName: data.nurseName });
    setIsWaiting(false);
    setAcceptedRequest(prev => ({ state: false, ...prev }));
    navigate('/User-accepted');

      }, 15000);
        return () => clearTimeout(timer);
  }, []);



  // another nurse function
  const anotherNurse = () => { 
    //clearTimeout(timer);
    axios.put('http://localhost:3000/patients/profile/refuse-nurse',
      {},
      { headers: { Authorization: `bearer ${localStorage.getItem('token')}` } }
    ).then((res) => { 
      setIsWaiting(false);
      setAcceptedRequest({ state: false, nurseData: {} });
      window.socket.emit('choose another nurse', { nurseName: data.nurseName});
    }).catch((err) => {
      console.log(err)
    });
  };
  // end of another nurse function
  
  // ok function
  const ok = () => {
   // clearTimeout(timer);
    window.socket.emit('i accept this nurse', { nurseName: data.nurseName });
    setIsWaiting(false);
    setAcceptedRequest(prev => ({ state: false, ...prev }));
    navigate('/User-accepted');
  };  
  // end of ok function

  return (
    <div className='bg-white p-5 shadow-panelShadow rounded-20 flex flex-col items-center'>
      <img src={image} className='w-[120px] h-[120px] rounded-[50%] shadow-panelShadow' />
      <p className='text-darkGreen2 font-[600] text-[20px] mt-3'>{data.nurseName}</p>

      {/* statistiques icons start*/}
      <div className="stats flex items-center gap-10 mt-5">
                  <div className="stat flex flex-col gap-1">
                      <FontAwesomeIcon icon={faUsers} className={`text-darkGreen4 text-[27px]`} />
                      <span className={`text-darkGreen2 text-[23px]`}>{data.patientClients}</span>
                  </div>
                  <div className="stat flex flex-col gap-1">
                      <FontAwesomeIcon icon={faStar} className={`text-darkGreen4 text-[27px]`}/>
                      <span className={`text-darkGreen2 text-[23px]`}>{data.nurseRate}</span>
                  </div>
                  <div className="stat flex flex-col gap-1">
                      <FontAwesomeIcon icon={faHeart} className={`text-darkGreen4 text-[27px]`}/>
                      <span className={`text-darkGreen2 text-[23px]`}>{data.nurseLikes}</span>
                  </div>
      </div>
      {/* statistiques icons end*/}
      <p className="mt-5 text-writingGrey">
        Nurse Affaf Aissaoui has accepted your request. Please wait for a call.
      </p>

      <button className='w-full py-3 bg-darkGreen4 text-creme2 rounded-[10px] mt-5 shadow-panelShadow' onClick={ok}>
        ok
      </button>
      <button className='w-full py-3 bg-white text-darkGreen4 rounded-[10px] mt-5 border-2 border-darkGreen4 shadow-panelShadow' onClick={anotherNurse}>
        choose another nurse
      </button>
      

    </div>
  )
}

export default AcceptedRequest
