import React, {useContext} from "react";
import { UserDataContext } from "../../Layout/UserLayout";

const WaitForAccept = () => {

  const { setAcceptedRequest } = useContext(UserDataContext);
  const accept = () => { 
    setAcceptedRequest(prev => ({ nurseData: { nurseName: "Affaf Aissaoui", nurseRate: 4.5, nurseLikes: 80, nurseSpecialite: "kolch", patientClients: 90, price: 500 }, status: true }));
  };

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
      <button className="mt-5" onClick={accept}>
        accept
      </button>
    </div>
  );
};

export default WaitForAccept;
