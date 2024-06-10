import React from 'react';
import image from '../../../assets/images/doctor-img01.png'
import { faStar , faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientInfos = () => {
  return (
      <div className="clientInfos w-full flex items-center justify-between">
          
          <div className="infos flex gap-2">
          <img src={image} className='w-[50px] rounded-[10px]' /><div className="nameRate">
            <span className="text-writingGrey text-sm">Chiheb rahmouni</span>
              <p className="text-writingGrey text-[12px] mt-1 flex gap-1">
                        <FontAwesomeIcon icon={faStar} className="text-darkGreen4 text-[13px]" />             
                  4.5</p>
              </div>
          </div>
          <FontAwesomeIcon icon={faPhone} className="text-white bg-darkGreen4 w-[15px] h-[15px] p-3 rounded-50" />
          
        </div>
  )
}

export default ClientInfos
