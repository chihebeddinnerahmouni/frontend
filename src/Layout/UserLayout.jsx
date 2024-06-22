import React, { useState, useEffect, createContext } from 'react';
import UserButtomNavBar from '../components/UserProfile/UserButtomNavBar';
import NearbyNurses from '../pages/User/NearbyNursesPage';


export const UserDataContext = createContext();

const UserLayout = ({ children }) => {

  //const [userData, setUserData] = useState("");
  const [userLocation, setUserLocation] = useState([]);
  //const [userLocation, setUserLocation] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [subServices, setSubServices] = useState([]);
  const [nurseList, setNurseList] = useState([]);
  const [resStatus, setResStatus] = useState(0);
  const [acceptedRequest, setAcceptedRequest] = useState({ state: false, nurseData: {} });
  const [requestData, setRequestData] = useState({});

  
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) window.socket.emit("ownRoom", userData.name);

  //console.log("userLocation", userLocation);
  //console.log("selectedService", selectedService);
  //console.log("selectedSubService", selectedSubService);
  //console.log("subServices", subServices);
  //console.log("nurseList", nurseList);
  //console.log("resStatus", resStatus);
  //console.log("acceptedRequest", acceptedRequest);
  

  return (
    <div>
      <UserDataContext.Provider value={{/*userData, setUserData,*/ userLocation, setUserLocation, selectedService, setSelectedService, selectedSubService, setSelectedSubService, subServices, setSubServices,nurseList , setNurseList, /*nurseRequestName ,setNurseRequestName,*/ /*isWaiting ,setIsWaiting,*/ resStatus ,setResStatus, acceptedRequest, setAcceptedRequest, requestData, setRequestData }}>
          <main>
            {children}
          </main>
        <UserButtomNavBar />
      </UserDataContext.Provider>

    </div>
  )
}

export default UserLayout
