import React, {useContext, useEffect} from "react";
import { UserDataContext } from "../../Layout/UserLayout";

const WaitForAccept = () => {

  const { setAcceptedRequest } = useContext(UserDataContext);

  useEffect(() => {
    window.socket.on('requestAccepted', (nurseData) => { 
    setAcceptedRequest(prev => ({ nurseData, state: true }));
    });
  }, []);
 

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
