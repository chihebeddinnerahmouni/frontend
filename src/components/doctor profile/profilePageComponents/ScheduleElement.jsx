import React, { useState, useContext } from 'react';
import { profileContext } from "../../../Layout/ProfileLayout";





const ScheduleElement = ({ day, start, end, givenTickets, totalTickets }) => {
  const { setDayToShow } = useContext(profileContext);

 
  
  const showDetails = () => {
    setDayToShow(day);
   }

  return (
    <div className='scheduleElement flex-grow bg-superLightGreen rounded-20 p-[15px] whitespace-nowrap shadow-panelShadow hover:bg-cremeHover' onClick={showDetails}>
          <p className='day text-[17px] font-medium text-darkGreen1'>{day}</p>
          <p className='time text-writingGrey'>{start} - {end}</p>
      <span className='givenTickets text-writingGrey'> {givenTickets} tickets reserved / {totalTickets} </span>
    </div>
  )
}

export default ScheduleElement
