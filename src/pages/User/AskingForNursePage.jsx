import React, { useContext, useEffect } from 'react';
import map from '../../assets/images/map.jpg';
import medicalPic from '../../assets/images/medical-image3.jpg';
import { useNavigate } from 'react-router-dom';

const AskingForNurse = () => {

  const navigate = useNavigate();


  const askNurse = () => { 
    navigate("/user-set-position");
    //localStorage.setItem('currentStep', '/User-set-position');
  }



  return (
    <div className='h-screen flex flex-col'>
      <div className="map w-full h-[75%]" style={{backgroundImage: `url(${encodeURI(medicalPic)})`, backgroundSize: "cover", backgroundPosition: "center",}}></div>
      <div className="asking w-full flex-grow bg-creme2 shadow-panelShadow px-4 pt-5 pb-[80px] rounded-tl-20 rounded-tr-20 mt-[-40px] flex flex-col justify-between">
        <div className="p">
          <p className='font-roboto text-darkGreen2 font-[600]'>Salut chiheb</p>
          <p className='font-roboto text-sm text-writingGrey mt-1'>Tu as besoin d'un infirmier ou un service medicale ?</p>
        </div>
        <button className='w-full bg-darkGreen2 text-white py-3 rounded-20 mt-8' onClick={askNurse}>Demander un infirmier</button>
      </div>
    </div>
  )
}

export default AskingForNurse
