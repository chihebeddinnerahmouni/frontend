import React, { useContext, useState, useEffect } from "react";
import { UserDataContext } from "../../Layout/UserLayout";
import axios from "axios";
import convertToLocalServerPath from "../../utils/photoPathChanging";



const UserProfileInfos = () => {

  //const { setUserData } = useContext(UserDataContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState(0);


useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3000/patients/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        //setUserData(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setImage(convertToLocalServerPath(response.data.profilePicture));
        setRate(response.data.averageRating);
        //window.socket.emit("ownRoom", response.data.name);
      })
      .catch((error) => {
        console.log("from prifile error ", error);
      });
  }, []);

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default UserProfileInfos
