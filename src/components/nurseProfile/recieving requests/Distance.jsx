import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


const Distance = ({Distance}) => {
  return (
    <div className='flex items-center gap-2 text-[12px] bg-darkGreen4 py-1 px-2 rounded-20'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='text-creme2'/>
            <p className="text-creme2">{Distance} km away</p>
    </div>
  )
}

export default Distance
