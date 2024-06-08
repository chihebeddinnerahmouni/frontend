import React from 'react'
import { NavLink } from "react-router-dom";

const UserLeftBarLink = [
    {
        path: '/userprofile',
        display: 'Profile',
    },
    {
        path: '/userprofile/doctors',
        display: 'Doctor',
    }, {
    
        path: '/userprofile/nurses',
        display: 'Nurses',
    }
]

const UserLeftBar = () => {
    return (
      <div className="w-[220px] float-left h-screen bg-gradient-linear box-border flex flex-col pt-[20px] gap-10 fixed shadow-panelShadow z-5">
        <h1 className="text-white text-[30px] text-center font-bold font-rubik">Medicare</h1>
        <div id="leftMenu">
          <ul className="list-none mt-[30px] ml-[70px] flex flex-col items-start gap-[25px] flex-grow">
            {UserLeftBarLink.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className={(navClass) =>
                      navClass.isActive
                    ? "transition-all duration-500 ease-in-out text-darkGreen2 bg-creme font-medium -ml-6 py-3 pl-4 pr-[220px] rounded-tl-50 rounded-bl-50"
                        : " transition-all duration-500 ease-in-out text-white text-[16px] leading-7 "
                    }>
                  {link.display}
                  </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default UserLeftBar
