import React, { useContext } from 'react';
import { UserDataContext } from '../../Layout/UserLayout';
import NearByNurseComp from '../../components/UserProfile/nearby nurses/NearByNurseComp';
import image from '../../assets/images/doctor-img01.png'
import image2 from '../../assets/images/doctor-img02.png'
import image3 from '../../assets/images/doctor-img03.png'




const NearbyNurses = () => {

    const nurseListt = [
        { nurseName: "Affaf Aissaoui", nurseRate: 4.5,nurseLikes:80 ,nurseSpecialite: "kolch", patientClients: 90, profilePic: {image}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
        { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: {image2}, price: 500},
      { nurseName: "Djeloul Dali", nurseRate: 4.0, nurseLikes: 80, nurseSpecialite: "kolch thani", patientClients: 50, profilePic: { image2 }, price: 500 },
    ];

  const { nurselist, nurseRequestName, setNurseRequestName } = useContext(UserDataContext);
  //if (!nurselist) return <p>loading...</p>
    


  const sendRequest = () => {
    console.log("way")
  }



  return (
    <div className='bg-creme2 flex flex-col items-center justify-between pl-4 pb-[130px] relative h-[100vh]' >

      <div className="top w-full flex flex-col items-center rounded-br-20 rounded-bl-20 overflow-auto pr-2">
        <p className='text-darkGreen2 font-[600] text-[20px] mt-12 text-center'>Nearby Nurses</p>
        <p className='text-writingGrey text-sm self-start mt-6'>Selectionner</p>    
        <div className="nearByNurses mt-2 flex flex-col w-full gap-2">
              {nurseListt.map((nurse, index) => {
                return <NearByNurseComp key={index} nurseName={nurse.nurseName} nurseRate={nurse.nurseRate} nurseLikes={nurse.nurseLikes} nurseSpecialite={nurse.nurseSpecialite} patientClients={nurse.patientClients} profilePic={nurse.profilePic} price={nurse.price} />
              })}  
        </div>
      </div>

      <div className="confirmeNurse w-full mt-5 pr-4 fixed bottom-[70px]">
        <button className={`w-full py-3 rounded-[10px] ${nurseRequestName ? 'bg-darkGreen4' : 'bg-gray-400'} shadow-panelShadow text-creme2`} disabled={!nurseRequestName} onClick={sendRequest}>
          cbn n3ytolo?
        </button>
      </div>
      
    </div>
  )
}

export default NearbyNurses
