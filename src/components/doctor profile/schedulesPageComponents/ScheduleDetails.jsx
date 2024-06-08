import React, {useContext, useEffect, useState} from 'react'
import ScheduleDetailsElement from './ScheduleDetailsElement';
import { profileContext } from '../../../Layout/ProfileLayout';




const ScheduleDetails = () => {

  const { dayToShow, schedulesData } = useContext(profileContext);
  const [key, setKey] = useState(0);

//for details comp slidedown effect
useEffect(() => {
  setKey(Math.random()); // change key every time the component updates
}, [dayToShow, schedulesData]);
  
  if (!schedulesData) { 
    return <p>loading...</p>
  }




  return (
    <div key={key} className='w-full shadow-panelShadow bg-white rounded-20 flex flex-col gap-[10px] py-[20px] px-[25px] overflow-hidden relative fade-in'>

      <h1 className='text-[20px] font-medium text-darkGreen2'>Schedule details</h1>

      <table className='w-full border-separate ' style={{ borderSpacing: '0 1rem',  }} >
<thead>
        <tr className='tableHeader'>
          <th className='text-darkGreen1 p-1'> Name </th>
          <th className='text-darkGreen1 p-1'> Phone </th>
          <th className='text-darkGreen1 p-1'> Heure </th>
          <th className='text-darkGreen1 p-1'> Ticket number </th>
        </tr>
</thead>
        <tbody>
         
          {schedulesData.map((schedule, scheduleIndex) => {
            if (schedule.day === dayToShow) {
              return (
                schedule.freeAt.map((ticket, ticketIndex) => {
                  if (ticket.reserved === 'true') {
                    return (
                      
                      <ScheduleDetailsElement ticket={ticket} key={ticketIndex} id={ticketIndex} />

                    )
                  }
                }
                )
              )
            }
          }
            )}
          
        </tbody>


      </table>
{/*
      {data.map((schedule, index) => {
        if (schedule.day === dayToShow) {
          return (
            schedule.freeAt.map((ticket, index) => {
              if (ticket.reserved === 'true') {
                return (
                  <ScheduleDetailsElement
                    key={index}
                    name={ticket.patientName}
                    phone={ticket.patientPhone}
                    time={ticket.hour}
                    ticketNumber={ticket.ticketNumber}
                  />
                )
              }
            }
            )
          )
        }
      }
      )}*/}


    </div>
  )
}

export default ScheduleDetails
