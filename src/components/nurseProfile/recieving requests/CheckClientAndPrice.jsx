import React from 'react'
import image from '../../../assets/images/doctor-img01.png'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CheckClientAndPrice = ({price, patient, patientRate}) => {
  return (
      <div className="clientInfos w-full flex items-center justify-between">
          
          <div className="infos flex gap-2">
          <img src={image} className='w-[50px] rounded-[10px]' /><div className="nameRate">
            <span className="text-writingGrey text-sm">{patient}</span>
              <p className="text-writingGrey text-[12px] mt-1 flex gap-1">
                        <FontAwesomeIcon icon={faStar} className="text-darkGreen4 text-[13px]" />             
                  {patientRate}</p>
              </div>
          </div>

          <div className="price">
            <span className="text-darkGreen4 font-[500] text-sm">{price} DZD</span>
          </div>
          
        </div>
  )
}

export default CheckClientAndPrice
