import React from "react";

const WaitForAccept = () => {
  return (
    <div className="bg-white p-5 shadow-panelShadow rounded-20 flex flex-col items-center gap-5">
      <p className="text-darkGreen2 font-[600] text-[20px]">Wait for nurse to accept</p>
      <div className="center-body">
        <div className="loader-spanne-20">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default WaitForAccept;
