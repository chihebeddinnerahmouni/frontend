import React, { useState, useEffect, createContext } from 'react';
import UserButtomNavBar from '../components/UserProfile/UserButtomNavBar';

export const UserDataContext = createContext();

const UserLayout = ({ children }) => {

  const [userData, setUserData] = useState();
  const [userLocation, setUserLocation] = useState([]);
  const [selectedService, setSelectedService] = useState();
  const [selectedSubService, setSelectedSubService] = useState();
  const [subServices, setSubServices] = useState([]);
  const [nurselist, setNurseList] = useState();
  const [nurseRequestName, setNurseRequestName] = useState();


  


  return (
    <div>
      <UserDataContext.Provider value={{userData, setUserData, userLocation, setUserLocation, selectedService, setSelectedService, selectedSubService, setSelectedSubService, subServices, setSubServices, nurselist , setNurseList,nurseRequestName ,setNurseRequestName}}>
          <main>
          {children}
          </main>
        <UserButtomNavBar />
      </UserDataContext.Provider>

    </div>
  )
}

export default UserLayout
