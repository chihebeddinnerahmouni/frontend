import React from 'react';
import image from '../../assets/images/happy face.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const ThankYouPage = () => {

    const navigate = useNavigate();

    const done = () => { 
        navigate('/user-profile');
    }


  return (
    <div className='bg-creme2 relative w-full min-h-screen flex flex-col items-center pt-[100px] px-8'>
      <button className='absolute right-[25px] top-[45px] bg-white shadow-panelShadow w-8 h-8 flex justify-center items-center rounded-50 text-[18px]' onClick={done}><FontAwesomeIcon icon={faXmark}/></button>  
      <h1 className='text-center text-3xl font-bold font-poppins text-darkGreen4'>Thank You!</h1> 
      <img src={image} className='w-[300px] mt-[100px]' />
      <p className='text-writingGrey text-lg mt-4 text-center'>for choosing our service, hope ull get better soon, sahit 👍</p>  
    </div>
  )
}

export default ThankYouPage
