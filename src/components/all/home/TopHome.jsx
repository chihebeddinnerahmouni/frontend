import React from "react";
import image from '../../../assets/images/doctor-img02.png';

const TopHome = () => {
  return (
    <div className="top flex items-center gap-3">
      <div className="profPic w-[60px] h-[60px] rounded-50"style={{backgroundImage: `url(${image})`,backgroundSize: "cover",backgroundPosition: "center",}}></div>
      <div className="hi flex flex-col h-[50px] justify-between">
        <h1 className="text-lg font-bold text-darkGreen2">
          Hi chiheb rahmouni
        </h1>
        <p className="text-sm text-writingGrey">How is your health?</p>
      </div>
    </div>
  );
};

export default TopHome;
