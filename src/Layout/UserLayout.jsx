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
  const [acceptedRequest, setAcceptedRequest] = useState(false);
  const [resStatus, setResStatus] = useState();

  


  return (
    <div>
      <UserDataContext.Provider value={{userData, setUserData, userLocation, setUserLocation, selectedService, setSelectedService, selectedSubService, setSelectedSubService, subServices, setSubServices, nurseList , setNurseList,nurseRequestName ,setNurseRequestName,acceptedRequest ,setAcceptedRequest,resStatus ,setResStatus  }}>
          <main>
            {children}
          </main>
        <UserButtomNavBar />
      </UserDataContext.Provider>

    </div>
  )
}

export default UserLayout
