import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceDetails = ({ icon, info }) => {
  return (
      <>
          <div className='inline-flex items-center py-1 px-2 bg-white rounded-20 shadow-panelShadow gap-2'>
              <FontAwesomeIcon icon={icon} className="text-darkGreen2 text-sm bg-creme2 p-1 rounded-50 w-4 h-4" />
                <p className="text-writingGrey text-sm">{info}</p>
          </div>
      
          

    </>
  )
}

export default ServiceDetails
