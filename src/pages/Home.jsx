import React from 'react';
import TopHome from '../components/all/home/TopHome';
import Services from '../components/all/home/Service';
import Specialities from '../components/all/home/Specialities';
import { faStethoscope, faUserNurse, faPrescriptionBottleMedical, faSyringe } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  return (
    <div className='w-full min-h-screen bg-creme2 pl-6 pt-16 pb-[70px] '>
      <div className="top">
        <TopHome />
      </div>
          
      <div className="Services w-full mt-7 flex gap-3 overflow-auto pr-6 pb-2 ">
        <Services icon={faStethoscope} main={"Medcine"} desc={"reserve ur day w lhwayj lkhrin now"} />   
        <Services icon={faUserNurse} main={"Nursing"} desc={"n3ytolk l nurse yjik hata bab dar"} />   
        <Services icon={faPrescriptionBottleMedical} main={"Pharmacy"} desc={"cgof li rahm halin grab lik srtt flil"} />   
      </div>  

      <p className='text-[16px] font-bold text-darkGreen2 mt-7'>Categories</p>
      <div className="specialities mt-3 flex gap-2 overflow-auto pb-2">
        <Specialities icon={faSyringe} text={"General"} />   
        <Specialities icon={faSyringe} text={"Specialized"} />   
        <Specialities icon={faSyringe} text={"Home"} />   
        <Specialities icon={faSyringe} text={"Pediatric"} />   
        <Specialities icon={faSyringe} text={"Elderly"} />   
      </div>
    


    </div>
  )
}

export default Home
