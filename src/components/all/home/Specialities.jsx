import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Specialities = ({ icon, text }) => {
  return (
    <div className='inline-flex flex-none flex-col items-center gap-2 w-[110px] bg-white shadow-hardShadow p-4 rounded-[15px] '>
      <span><FontAwesomeIcon icon={icon} className='text-[30px] text-darkGreen4'/></span>
      <span className='text-writingGrey font-[600] text-center text-[12px]'>{text}</span>
    </div>
  )
}

export default Specialities
