import React, { useContext, useEffect } from 'react';
import image from '../../../assets/images/doctor-img01.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { UserDataContext } from '../../../Layout/UserLayout';



const NearByNurseComp = ({ nurseName, nurseRate, nurseLikes, nurseSpecialite, patientClients, profilePic, price, choosenNurseName, setChoosenNurseName}) => {
    
  const { setAcceptedRequest } = useContext(UserDataContext);
  

    const selectNurse = () => {
      setChoosenNurseName(nurseName);
      setAcceptedRequest(prev => ({ ...prev, nurseData: {nurseName: nurseName, nurseRate: nurseRate, nurseLikes: nurseLikes, nurseSpecialite: nurseSpecialite, patientClients: patientClients, price: price }}))
    }
  
  
  return (
      <div className={`flex items-center gap-3 w-full p-2 rounded-20 shadow-panelShadow ${choosenNurseName === nurseName ? 'bg-darkGreen2' : 'bg-white' }`} onClick={selectNurse}>
          <img src={image} className='w-[100px] h-[100px] rounded-[10px]' />
            <div className="infosRight flex justify-between items-center h-[100px] flex-1 pr-2"> {/*relative*/}
              <div className="rightLeft flex flex-col justify-between h-full">
                <div className="nameSpec">
                   <p className={`${choosenNurseName === nurseName ? 'text-creme2' : 'text-darkGreen2' } font-[450]`}>{nurseName}</p>
                   <span className={`${choosenNurseName === nurseName ? 'text-[#a0a1a4]' : 'text-writingGrey' } text-sm font-[500]`}>{nurseSpecialite}</span>
                </div>
                <div className="stats flex items-center gap-5">
                  <div className="stat flex flex-col gap-1 items-center">
                      <FontAwesomeIcon icon={faUsers} className={`${choosenNurseName === nurseName ? 'text-creme2' : 'text-darkGreen2' } text-sm`} />
                      <span className={`${choosenNurseName === nurseName ? 'text-[#a0a1a4]' : 'text-darkGreen2' } text-sm`}>{patientClients}</span>
                  </div>
                  <div className="stat flex flex-col gap-1 items-center">
                      <FontAwesomeIcon icon={faStar} className={`${choosenNurseName === nurseName ? 'text-creme2' : 'text-darkGreen2' } text-sm`}/>
                      <span className={`${choosenNurseName === nurseName ? 'text-[#a0a1a4]' : 'text-darkGreen2' } text-sm`}>{nurseRate}</span>
                  </div>
                  <div className="stat flex flex-col gap-1 items-center">
                      <FontAwesomeIcon icon={faHeart} className={`${choosenNurseName === nurseName ? 'text-creme2' : 'text-darkGreen2' } text-sm`}/>
                      <span className={`${choosenNurseName === nurseName ? 'text-[#a0a1a4]' : 'text-darkGreen2' } text-sm`}>{nurseLikes}</span>
                  </div>
                </div>
              </div>

               <div className={`prix ${choosenNurseName === nurseName ? 'text-creme2' : 'text-darkGreen4' } font-[500]`}> {/*absolute right-0*/}
                    {price} DZD  
               </div>
            </div> 
      </div>
  )
}

export default NearByNurseComp
