import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const NoNearbyNursePage = () => {
    return (
      <div className='w-full min-h-screen bg-creme2 px-6 flex flex-col items-center pt-12'>
         <div className="no flex flex-col items-center mt-16">
          <FontAwesomeIcon icon={faXmark} className='text-red-500 text-[200px]' />
          <h1 className='text-2xl font-bold text-center'>Sorry, no nearby nurse found</h1>
         </div>
      </div>
  )
}

export default NoNearbyNursePage
