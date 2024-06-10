import React from 'react';
//import image from '../../../assets/images/Wavy_Bus-05_Single-01.jpg'
//import image from '../../../assets/images/main a main.png'
import image from '../../../assets/images/Pngtree—vector payment icon_3782887.png'
import ServiceDetails from '../../../components/nurseProfile/NurseWork/ServiceDetails';
import { faRoad, faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const EndWork = () => {

console.log(image)

  return (
    <div className='flex flex-col items-center pt-10 px-3 gap-4'>
          <span className='font-[500] text-darkGreen2 '>Service #4312</span>
          <div className="ticket w-full border-1 border-[#cccbcb] p-3 rounded-20 text-center flex flex-col items-center">
              <div className="image h-[200px] rounded-20 w-[70%]" style={{ backgroundImage: `url(${(image)})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <p className='mt-4 font-bold text-darkGreen1 text-lg'>1200 DZD</p>
              <p className='text-writingGrey text-sm mt-2'>You have finished this task and the costumer has completed paiment</p>
              <hr className='border-t-1 border-[#dbdbdb] rounded-50 my-4' />
              <div className="statistiques flex items-center justify-center gap-4">
                  <ServiceDetails icon={faRoad} info={"2.6 km"}/>
                  <ServiceDetails icon={faClock} info={"30 min"}/>
              </div>
          </div>

    </div>
  )
}

export default EndWork
