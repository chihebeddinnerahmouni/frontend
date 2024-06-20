import React,{useState}  from 'react';
//import image from '../../../assets/images/Wavy_Bus-05_Single-01.jpg'
//import image from '../../../assets/images/main a main.png'
//import image from '../../../assets/images/Pngtree—vector payment icon_3782887.png'
import image from '../../../assets/images/doctor-img01.png'
import ServiceDetails from '../../../components/nurseProfile/NurseWork/ServiceDetails';
import { faRoad, faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import RateComp from '../../../components/UserProfile/serviceEnd/RateComp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EndWork = () => {

  
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const navigate = useNavigate();

  const send = () => { 
    axios.put("http://localhost:3000/nurses/profile/rate-patient",
      { rating: stars, comment, patientName: "chiheb" },//change the patientName
      { headers: { Authorization: `bearer ${localStorage.getItem('token')}` } }
    ).then(res => {
      console.log(res.data);
      navigate('/Nurse-work');
    }).catch(err => { 
      console.log("from rating axios err :", err);
    });
  }



  return (
    <div className='flex flex-col items-center pt-24 px-3 gap-4 g-red-400 w-full flex-grow pb-[70px]'>
      <p className="text-darkGreen1 font-[600]">thank you affaf aissaoui</p>

      <div className="servicenurse flex justify-between items-center mt-6 gap-2 w-full">
        <div className="left flex items-center gap-2">
          <img src={image} className="w-[60px] rounded-20" />
          <span className="text-darkGreen4 font-[500]">chiheb rahmouni</span>
        </div>
        <span className="">500 dZD</span>
      </div>

      <hr className="border-t-1 border-darkGreen4 w-full mt-6" />

      <div className="rate w-full flex-1 mt-6 flex flex-col items-center justify-between">
        <p className="text-sm text-darkGreen4 self-start">your feed back important to us</p>
         <div className="starsRate">
          <RateComp stars={stars} setStars={setStars} sentence={"How did you find chiheb?"}/>
        </div>
        <div className="commentAndConfirme w-full flex flex-col gap-4">
          <input type="text" className="appearance-none outline-none bg-[#e7e6ea] text-sm py-3 rounded-[10px] px-4  focus:ring-2 focus:ring-darkGreen4" value={comment} placeholder="add a comment" onChange={(e) => setComment(e.target.value)} />
          <button className="bg-darkGreen4 text-white rounded-50 text-sm py-3" onClick={send}>Send</button>
        </div>
      </div>

    </div>
     
  )
}

export default EndWork
{/*<div className='flex flex-col items-center pt-10 px-3 gap-4'>
          <span className='font-[500] text-darkGreen2 '>Service #4312</span>
          <div className="ticket w-full border-1 border-[#cccbcb] p-3 rounded-20 text-center flex flex-col items-center">
              <div className="image h-[200px] rounded-20 w-[70%]" style={{ backgroundImage: `url(${(image)})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <p className='mt-4 font-bold text-darkGreen1 text-lg'>1200 DZD</p>
              <p className='text-writingGrey text-sm mt-2'>You have finished this task and the costumer has completed paiment</p>
              <hr className='border-t-1 border-[#dbdbdb] rounded-50 my-4' />
              <div className="statistiques flex items-center justify-center gap-4">
                  <ServiceDetails icon={faRoad} info={"2.6 km"}/>
                  <ServiceDetails icon={faClock} info={"30 min"}/>
              </div>
          </div>

  </div>   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <div className="min-h-screen bg-creme2 flex flex-col items-center pt-12 px-4 pb-[70px]">

      <p className="text-darkGreen1 font-[600]">thank you chiheb rahmouni</p>

      <div className="servicenurse flex justify-between items-center mt-6 gap-2 w-full">
        <div className="left flex items-center gap-2">
          <img src={image} className="w-[60px] rounded-20" />
          <span className="text-darkGreen4 font-[500]">Affaf aissaoui</span>
        </div>
        <span className="">500 dZD</span>
      </div>

      <hr className="border-t-1 border-darkGreen4 w-full mt-6" />
      
      <div className="rate w-full flex-1 mt-6 flex flex-col items-center justify-between">
        <p className="text-sm text-darkGreen4 self-start">your feed back important to us</p>
        <div className="starsRate">
          <RateComp stars={stars} setStars={setStars} />
        </div>

        <div className="commentAndConfirme w-full flex flex-col gap-4">
          <input type="text" className="appearance-none outline-none bg-[#e7e6ea] text-sm py-3 rounded-[10px] px-4  focus:ring-2 focus:ring-darkGreen4" value={comment} placeholder="add a comment" onChange={(e) => setComment(e.target.value)} />
          <button className="bg-darkGreen4 text-white rounded-50 text-sm py-3" onClick={sendRate}>Send</button>
        </div>

      </div>
    </div>*/}