import React, { useState, useEffect, createContext } from 'react';
import UserButtomNavBar from '../components/UserProfile/UserButtomNavBar';
import NearbyNurses from '../pages/User/NearbyNursesPage';


export const UserDataContext = createContext();

const UserLayout = ({ children }) => {

  const [userData, setUserData] = useState();
  const [userLocation, setUserLocation] = useState([]);
  const [selectedService, setSelectedService] = useState();
  const [selectedSubService, setSelectedSubService] = useState();
  const [subServices, setSubServices] = useState([]);
  const [nurseList, setNurseList] = useState();
  const [nurseRequestName, setNurseRequestName] = useState();
  const [isWaiting, setIsWaiting] = useState(true);
  const [resStatus, setResStatus] = useState(200);
  const [acceptedRequest, setAcceptedRequest] = useState({state: true, nurseData: {nurseName: "Affaf Aissaoui", nurseRate: 4.5,nurseLikes:80 ,nurseSpecialite: "kolch", patientClients: 90, price: 500}});
  


  return (
    <div>
      <UserDataContext.Provider value={{userData, setUserData, userLocation, setUserLocation, selectedService, setSelectedService, selectedSubService, setSelectedSubService, subServices, setSubServices, nurseList , setNurseList,nurseRequestName ,setNurseRequestName,isWaiting ,setIsWaiting,resStatus ,setResStatus, acceptedRequest, setAcceptedRequest }}>
          <main>
            {children}
          </main>
        <UserButtomNavBar />
      </UserDataContext.Provider>

    </div>
  )
}

export default UserLayout
