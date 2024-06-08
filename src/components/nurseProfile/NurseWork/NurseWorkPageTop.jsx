import React, { useRef } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NurseWorkPageTop = () => {

const switchStateRef = useRef(null);
  let lat, long;

  const switchStateButton = () => {
    if (switchStateRef.current.classList.contains("active")) {
      switchStateRef.current.classList.remove("active"); // switched off
    } else {
      switchStateRef.current.classList.add("active"); // switched on
      navigator.geolocation.getCurrentPosition(function (position) {
         lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(lat, long);
      axios.put("http://localhost:3000/nurses/profile/change-work-status", {
          location: [lat, long]
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => {
        toast.success(res.data.message, {
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }).catch((err) => {
        console.log("axios err", err);
      
      })});
    }
  };



  return (
<div className="top relative z-20 bg-white shadow-shadowPanel rounded-br-20 rounded-bl-20 px-5 flex justify-between items-center py-2 mx-4">
        <span className="font-[500] text-darkGreen4">Appointment</span>
        <span ref={switchStateRef} onClick={switchStateButton}>
        <label className="toggle-btn">
          <input type="checkbox" />
          <span className="toggle-text"></span>
          </label>
        </span>
      </div>
  )
}

export default NurseWorkPageTop
