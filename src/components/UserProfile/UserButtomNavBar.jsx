import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { FaHome, FaCalendar, FaEnvelope, FaUser } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserNurse, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';



const UserButtomNavBar = () => {
    
    const navLinks = [
        {
            title: 'Home',
            path: '/User-Home',
             icon: <FontAwesomeIcon icon={faHome} />
            },
            {
            title: 'messages',
            path: '/NurseMessages',
            icon: <FontAwesomeIcon icon={faEnvelope} />
            },
            {
            title: 'ask for nurse',
            path: '/User-asking',
            icon: <FontAwesomeIcon icon={faUserNurse} />
            },
            {
            title: 'Profile',
            path: '/User-Profile',
            icon: <FontAwesomeIcon icon={faUser} />
        }]
    
    
    
    

  return (
        <div className='flex w-full justify-around items-center bg-white h-[55px] rounded-tl-20 rounded-tr-20 shadow-panelShadow fixed bottom-0 z-40'>
            {navLinks.map((navLink, index) => (
                <NavLink key={index} to={navLink.path} className={(navClass)=> navClass.isActive? 'text-darkGreen1 text-[18px] hover:text-greenHover h-[35px] w-[35px]' : 'text-darkGreen4 text-[18px] hover:text-greenHover'}>
                    {navLink.icon}
                </NavLink>
            ))}
        </div>
  )
}

export default UserButtomNavBar

