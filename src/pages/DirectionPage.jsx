import React, {useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const DirectionPage = () => {
  const navigate = useNavigate();
    
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
    axios.get('http://localhost:3000/verify-token', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      if (res.status === 200) {
        const data = JSON.parse(localStorage.getItem("userData"));
        const type = data.type;
        if (type === 'patient') return navigate('/User-Profile');
        if (type === 'doctor') return navigate('/doctor-profile');
        if (type === 'nurse') return navigate('/Nurse-Profile');
      } else {
        navigate('/login');
      }
    });
  }, []);
}

export default DirectionPage
