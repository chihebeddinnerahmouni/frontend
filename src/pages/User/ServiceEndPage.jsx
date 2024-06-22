import React, { useState, useContext } from "react";
import RateComp from "../../components/UserProfile/serviceEnd/RateComp";
import image from "../../assets/images/doctor-img01.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Layout/UserLayout";


const ServiceEnd = () => {

  const {acceptedRequest, setUserLocation, setSelectedService, setSelectedSubService, setSubServices, setNurseList, setResStatus, setAcceptedRequest, setRequestData} = useContext(UserDataContext);
  const data = acceptedRequest.nurseData;
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const navigate = useNavigate();

  const sendRate = () => { 
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    axios.put("http://localhost:3000/patients/profile/rate-nurse", {
      nurseName: "affaf",
      rating: stars,
      comment,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data.message);
      navigate("/User-thanks");
      setUserLocation([]);
      setSelectedService("");
      setSelectedSubService("");
      setSubServices([]);
      setNurseList([]);
      setResStatus(0);
      setAcceptedRequest({ state: false, nurseData: {} });
      setRequestData({});
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="min-h-screen bg-creme2 flex flex-col items-center pt-12 px-4 pb-[70px]">

      <p className="text-darkGreen1 font-[600]">thank you {userData.name}</p>

      <div className="servicenurse flex justify-between items-center mt-6 gap-2 w-full">
        <div className="left flex items-center gap-2">
          <img src={image} className="w-[60px] rounded-20" />
          <span className="text-darkGreen4 font-[500]">{data.nurseName}</span>
        </div>
        <span className="">500 dZD</span>
      </div>

      <hr className="border-t-1 border-darkGreen4 w-full mt-6" />
      
      <div className="rate w-full flex-1 mt-6 flex flex-col items-center justify-between">
        <p className="text-sm text-darkGreen4 self-start">your feed back important to us</p>
        <div className="starsRate">
          <RateComp stars={stars} setStars={setStars} sentence={"How did you find affaf's service ?"} />
        </div>

        <div className="commentAndConfirme w-full flex flex-col gap-4">
          <input type="text" className="appearance-none outline-none bg-[#e7e6ea] text-sm py-3 rounded-[10px] px-4  focus:ring-2 focus:ring-darkGreen4" value={comment} placeholder="add a comment" onChange={(e) => setComment(e.target.value)} />
          <button className="bg-darkGreen4 text-white rounded-50 text-sm py-3" onClick={sendRate}>Send</button>
        </div>

      </div>
    </div>
  );
};

export default ServiceEnd;
