import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

const PositionOptions = () => {
  return (
    <div className='Options w-full flex flex-col items-start'>
          <div className="option1 flex items-center gap-3">
              <FontAwesomeIcon icon={faCrosshairs} className='text-darkGreen1' />
              <button className='text-sm text-darkGreen1'>Utuliser ma position</button>
          </div>   
          <hr className='border-t-2 border-darkGreen1 mt-2 w-[95%] self-end'/>
    
      
    </div>
  )
}

export default PositionOptions
