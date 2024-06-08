import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/docprofile",
    display: "profile",
  },
  {
    path: "/schedules",
    display: "schedules",
  },
  {
    path: "/reservations",
    display: "reservations",
  },
  {
    path: "/parametre",
    display: "parametre",
  },
];

const LeftBar = () => {



  return (
    <>
      <div className="w-full bg-gradient-linear box-border flex justify-center py-[10px] gap-10 shadow-panelShadow z-20       lg:w-[220px] lg:flex-col lg:pt-[20px] lg:h-screen lg:justify-start lg:fixed z-5  ">
        <h1 className="text-white text-[30px] text-center font-bold font-rubik">Medicare</h1>
        {/* <div id="leftMenu">
         <ul className="list-none mt-[30px] ml-[70px] flex flex-col items-start gap-[25px] flex-grow">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className={(navClass) =>
                      navClass.isActive
                    ? "transition-all duration-500 ease-in-out text-darkGreen2 bg-creme font-medium -ml-6 py-3 pl-4 pr-[220px] rounded-tl-50 rounded-bl-50"
                      :"transition-all duration-500 ease-in-out text-white text-[16px] leading-7 "
                    }>
                  {link.display}
                  </NavLink>
              </li>
            ))}
          </ul>
                  </div>*/}
      </div>
    </>
  );
};

export default LeftBar;

/*        <div className='leftBar flex flex-col items-center gap-12 width-250px height-100vh bg-color-#003C43'>
          <h1 id='LeftBarHeader' className='text-gray-100 mt-14 text-[30px]'>succes</h1>
          <div className='leftBarList'>
            <ul className='flex flex-col gap-6'>
              <li className='text-gray-100 text-[20px]'>Profile</li>
              <li className='text-gray-100 text-[20px]'>Appointms</li>
              <li className='text-gray-100 text-[20px]'>Patients</li>
              <li className='text-gray-100 text-[20px]'>Settings</li>
            </ul>
              
          </div>
          
    </div> */
