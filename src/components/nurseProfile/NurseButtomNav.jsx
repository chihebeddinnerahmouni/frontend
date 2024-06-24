import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { FaHome, FaCalendar, FaEnvelope, FaUser } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';



const NurseButtomNav = () => {

    const navLinks = [
        {
            title: 'Home',
            path: '/Nurse-Home',
             icon: <FontAwesomeIcon icon={faHome} />
            },
            {
            title: 'messages',
            path: '/NurseMessages',
            icon: <FontAwesomeIcon icon={faEnvelope} />
            },
            {
            title: 'Work',
            path: '/Nurse-work',
            icon: <FontAwesomeIcon icon={faCalendar} />
            },
            {
            title: 'Profile',
            path: '/Nurse-Profile',
            icon: <FontAwesomeIcon icon={faUser} />
            },

]

  return (
        <div className='flex w-full justify-around items-center bg-white h-[55px] rounded-tl-20 rounded-tr-20 shadow-panelShadow fixed bottom-0 z-40'>
            {navLinks.map((navLink, index) => (
                <NavLink key={index} to={navLink.path} className={(navClass)=> navClass.isActive? 'text-darkGreen1 text-[18px] hover:text-greenHover h-[35px] w-[35px] flex justify-center items-center rounded-50 ' : 'text-darkGreen4 text-[18px] hover:text-greenHover'}>
                    {navLink.icon}
                </NavLink>
            ))}
        </div>
  )
}

export default NurseButtomNav
