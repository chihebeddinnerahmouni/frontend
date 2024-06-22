import React, { useContext, useState, useEffect } from "react";
import { NurseDataContext } from "../../Layout/nurse profile/NurseWorkLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Statistique from "../../components/nurseProfile/profileInfos/Statistique";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import convertToLocalServerPath from "../../utils/photoPathChanging";
import axios from "axios";
import imaage from "../../assets/images/doctor-img02.png";



const NurseInfosPage = () => {
 // const { setNurseData } = useContext(NurseDataContext);
  const [name, setName] = useState("");
  const [specialite, setSpecialite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState(0);
  const [patientClients, setPatientClients] = useState(0);
  //if (!nurseData) return <p>loading</p>
  //const { name, specialite, email, phone, profilePicture } = nurseData;
  //const image = convertToLocalServerPath(profilePicture);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3000/nurses/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        //setNurseData(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        setName(response.data.name);
        setSpecialite(response.data.specialite);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setImage(convertToLocalServerPath(response.data.profilePicture));
        setRate(response.data.averageRating);
        setPatientClients(response.data.patientClients);
      })
      .catch((error) => {
        console.log("from prifile error ", error);
      });
  }, []);







  return (
    <>
      <div className="flex flex-col min-h-screen fade-in">

        <div className="image w-full h-[400px]" style={{ backgroundImage: `url(${imaage})`, backgroundSize:'cover', backgroundPosition:'center' }}></div>
        <button type="button" className="absolute top-5 left-5 text-[18px] text-darkGreen1 z-10">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className="bg-creme2 z-2 w-full rounded-20 shadow-panelShadow p-6 mt-[-130px] flex-grow"> {/*  */}
          <div className="profileHeader flex justify-between pr-8">
            <div className="infos flex flex-col gap-1">
              <p className="font-bold text-darkGreen1 text-[18px]">{name}</p>
              <p className="text-sm text-[#8b8e93]">Nurse, {specialite}</p>
              <p className="ville text-sm text-writingGrey">
                <span className="text-darkGreen4 mr-1 text-sm">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>{" "}
                hidhab
              </p>
            </div>
            <button type="button">
              <span className="text-white bg-creme2 p-2 rounded-[50%]">
                {/*<FontAwesomeIcon icon={faPaperPlane} />*/}
              </span>
            </button>
          </div>
          <div className="Numbers mt-5 flex justify-between px-1 w-full gap-3">
            <Statistique title={"patient"} icon={faUsers} number={patientClients} />
            <Statistique title={"Liked"} icon={faHeart} number={100} />
            <Statistique title={"Rate"} icon={faStar} number={rate} />
          </div>
                <div className="about mt-5">
        <p className="font-[500] text-darkGreen2">About</p>
        <p className="text-writingGrey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis quisque. Egestas sit amet, in sed </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default NurseInfosPage;
