import React from 'react'

const ScheduleDetailsElement = ({ ticket, id }) => {

  console.log(id)


  

  return (

    <tr className={ id % 2 === 0 ? 'bg-darkGreen4 text-white text-center hover:bg-darkGreen2' : 'bg-superLightGreen text-writingGrey text-center hover:bg-cremeHover' }>
      <td className='rounded-l-[10px]'>{ticket.patientName}</td>
      <td >{ticket.patientPhone}</td>
      <td >{ticket.hour}</td>
      <td className='rounded-r-[10px]'>{ticket.ticketNumber}</td>
    </tr>

      

  )
}

export default ScheduleDetailsElement
