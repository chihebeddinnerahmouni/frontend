import React, { useState, createContext } from 'react';
import UserLeftBar from '../components/UserProfile/UserLeftBar';
import TopBar from '../components/doctor profile/TopBar';

export const UserContext = createContext();

const UserLayout = ({type, children}) => {

  const [userData, setUserData] = useState();





  return (
    <>
    <UserContext.Provider value={{userData, setUserData}}>
    <div className="m-0 p-0 font-rubik bg-creme flex min-h-screen ">
      <UserLeftBar  />
      <div className="px-[30px] pb-[30px] ml-[220px] flex-grow">
        <TopBar  type={ type } />
        <main className="z-10 relative">{ children }</main>
      </div>
      </div>
    </UserContext.Provider>
    </>
  );
}

export default UserLayout
