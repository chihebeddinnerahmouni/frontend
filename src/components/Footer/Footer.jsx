import React from "react"; 
 
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import {RiLinkedinFill} from 'react-icons/ri' 
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai' 
const socialLinks=[
  {
    path: "https://ww.youtube.com",
    icon: <AiFillYoutube className=" group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/MOUSSAOUI-houssemeddine",
    icon: <AiFillGithub className=" group-hover:text-white w-4 h-5" />,
  },
  { 
    path: "https://www.instagram.com/houssam_msw/?next=%2F",
    icon: <AiOutlineInstagram className=" group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill className=" group-hover:text-white w-4 h-5" />
  },
];
const quicklinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright{year} developed by Moussaoui HOUSSEM all right reserved
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link,index)=>(
                <Link to={link.path}  key={index}
                className="w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center justify group hover:bg-primaryColor hover:border-none"
                >
                  
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;