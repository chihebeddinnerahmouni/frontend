import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Service = ({icon, main, desc}) => {
  return (
    <div className='h-[170px] bg-gradient-linear p-4 rounded-20 shadow-panelShadow text-creme2 flex justify-between items-start'>
      <div className="left flex flex-col justify-start w-[150px]">
        <p className='text-[22px] font-bold'>{main}</p>
        <p className=''>{desc}</p>
      </div>
      <div className="right self-center">
        <FontAwesomeIcon icon={icon} className='text-[110px]'/>
      </div>  
   </div>
  )
}

export default Service
