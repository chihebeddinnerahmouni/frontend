import React, {useContext} from 'react';
import image from '../../assets/images/doctor-img01.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { UserDataContext } from '../../Layout/UserLayout';


const AcceptedRequest = ({data}) => {

  const { setIsWaiting } = useContext(UserDataContext);
  
  const anotherNurse = () => { 
    setIsWaiting(false);
  };


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

      <button className='w-full py-3 bg-darkGreen4 text-creme2 rounded-[10px] mt-5 shadow-panelShadow'>
        ok
      </button>
      <button className='w-full py-3 bg-white text-darkGreen4 rounded-[10px] mt-5 border-2 border-darkGreen4 shadow-panelShadow' onClick={anotherNurse}>
        choose another nurse
      </button>
      

    </div>
  )
}

export default AcceptedRequest
