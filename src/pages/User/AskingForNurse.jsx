import React from 'react';
import map from '../../assets/images/map.jpg';
import { useNavigate } from 'react-router-dom';

const AskingForNurse = () => {

  const navigate = useNavigate();
  
  const askNurse = () => { 
    navigate("/user/set-position");
  }



  return (
    <div className='min-h-screen flex flex-col'>
      <div className="map w-full h-[730px]" style={{backgroundImage: `url(${encodeURI(map)})`, backgroundSize: "cover", backgroundPosition: "center",}}></div>
      <div className="asking w-full flex-grow bg-creme2 shadow-panelShadow px-4 pt-5 pb-[70px] rounded-tl-20 rounded-tr-20 mt-[-40px]">
        <p className='font-roboto text-darkGreen2 font-[600]'>besoin d'un infermier ou un servics medicale ?</p>
        <p className='font-roboto text-sm text-writingGrey mt-1'>Appuyez sur le bouton</p>
        <button className='w-full bg-darkGreen2 text-white py-3 rounded-20 mt-8' onClick={askNurse}>Demander un infermier</button>
      </div>
    </div>
  )
}

export default AskingForNurse
