import InfosSection from '../../components/doctor profile/profilePageComponents/InfosSection';
import SchedulesSection from '../../components/doctor profile/profilePageComponents/SchedulesSection';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { profileContext } from '../../Layout/ProfileLayout';//




function Profile() {
  const token = localStorage.getItem('token');
  const { setData } = useContext(profileContext);//
  //const [data, setData] = useState({});

  useEffect(() => {
  axios.get('http://localhost:3000/doctors/profile', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => { 
    setData(response.data);
    console.log("from prifile ", response.data);
  }).catch((error) => {
    console.log("from prifile error ", error);
  });
  }, []);










  return (
    <>
      <div className="fade-in">
        <InfosSection /*data={ data }*/ />
      <SchedulesSection /*data={ data.schedule }*/ />
    </div>
</>
  );
}

export default Profile;