import React, { useContext } from 'react';
import image from '../../../assets/images/doctor-img01.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { UserDataContext } from '../../../Layout/UserLayout';



const NearByNurseComp = ({ nurseName, nurseRate, nurseLikes, nurseSpecialite, patientClients, profilePic, price }) => {
    
    const { setNurseRequestName, nurseRequestName } = useContext(UserDataContext);

    const selectNurse = () => {
        setNurseRequestName(nurseName);
    }


  return (
      <div className={`flex items-center gap-3 w-full p-2 rounded-20 shadow-panelShadow ${nurseRequestName === nurseName ? 'bg-darkGreen2' : 'bg-white' }`} onClick={selectNurse}>
          <img src={image} className='w-[100px] h-[100px] rounded-[10px]' />
            <div className="infosRight flex justify-between items-center h-[100px] flex-1 pr-2"> {/*relative*/}
              <div className="rightLeft flex flex-col justify-between h-full">
                <div className="nameSpec">
                   <p className={`${nurseRequestName === nurseName ? 'text-creme2' : 'text-darkGreen2' } font-[450]`}>{nurseName}</p>
                   <span className={`${nurseRequestName === nurseName ? 'text-[#a0a1a4]' : 'text-writingGrey' } text-sm font-[500]`}>{nurseSpecialite}</span>
                </div>
                <div className="stats flex items-center gap-5">
                  <div className="stat flex flex-col gap-1">
                      <FontAwesomeIcon icon={faUsers} className={`${nurseRequestName === nurseName ? 'text-creme2' : 'text-darkGreen2' } text-sm`} />
                      <span className={`${nurseRequestName === nurseName ? 'text-[#a0a1a4]' : 'text-darkGreen2' } text-sm`}>{nurseLikes}</span>
                  </div>
                  <div className="stat flex flex-col gap-1">
                      <FontAwesomeIcon icon={faStar} className={`${nurseRequestName === nurseName ? 'text-creme2' : 'text-darkGreen2' } text-sm`}/>
                      <span className={`${nurseRequestName === nurseName ? 'text-[#a0a1a4]' : 'text-darkGreen2' } text-sm`}>{nurseRate}</span>
                  </div>
                  <div className="stat flex flex-col gap-1">
                      <FontAwesomeIcon icon={faHeart} className={`${nurseRequestName === nurseName ? 'text-creme2' : 'text-darkGreen2' } text-sm`}/>
                      <span className={`${nurseRequestName === nurseName ? 'text-[#a0a1a4]' : 'text-darkGreen2' } text-sm`}>{patientClients}</span>
                  </div>
                </div>
              </div>

               <div className={`prix ${nurseRequestName === nurseName ? 'text-creme2' : 'text-darkGreen4' } font-[500]`}> {/*absolute right-0*/}
                    {price} DZD  
               </div>
            </div> 
      </div>
  )
}

export default NearByNurseComp
