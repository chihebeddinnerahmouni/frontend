import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

const TopBar = ({type}) => {

  return (
    <div className="hidden bg-white justify-between items-center px-[30px] py-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-panelShadow     lg:flex">
      <span className="text-darkGreen2 text-20 font-450">{type}</span>
          <div className="topLeft flex gap-[20px] items-center">
              <div className=" hidden searchContainer relative items-center    lg:flex">
                  <input type="text" className="topBarSearch px-[15px] py-[8px] bg-searchBarGrey rounded-50 focus:outline-none focus:ring-2 focus: ring-darkGreen1" placeholder="search" />
                  <AiOutlineSearch className="searchButoon text-white bg-darkGreen4 rounded-50 absolute right-0 text-[60px] p-2 h-full hover:bg-darkGreen2 transition duration-200 ease-in-out" />
              </div>
              <IoMdLogOut className="logOutButton text-[25px] text-darkGreen1"/>
      </div>
    </div>
  );
};

export default TopBar;
