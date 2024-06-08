import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../Layout/UserLayout';
import axios from 'axios';
import UserInfosSection from '../../components/UserProfile/User profile infos/UserInfosSection';

const UserInfoPage = () => {

  const { setUserData } = useContext(UserContext);
  const token = localStorage.getItem('token');

  
  useEffect(() => {
    axios.get('http://localhost:3000/patients/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      setUserData(response.data);
      console.log("from User profile info page:",response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);


  return (
    <div>
      <UserInfosSection />
    </div>
  )
}

export default UserInfoPage
