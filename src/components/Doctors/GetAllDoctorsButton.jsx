import axios from "axios";
import { useState } from "react";

const getAllDoctorsButton = ({ onSearch }) => {
  const [name, setName] = useState(""); 

  // for pictures path conversion
  function convertToLocalServerPath(filePath) {
    const localFilePathPrefix =
      "C:\\Users\\Administrator\\Desktop\\backend\\src\\images\\";
    const serverUrl = "http://localhost:3000/images/";
    if (filePath.startsWith(localFilePathPrefix)) {
      const relativeFilePath = filePath.slice(localFilePathPrefix.length);
      const fileName = relativeFilePath.replace('\\src\\images\\', '');
      const newPath = serverUrl + fileName;
      return newPath;
    }
    return filePath;
  }

  // button search
    const searchDoctor = () => {
      axios
        .get(`http://localhost:3000/doctors?page=1`)
        .then((response) => {
          const doctorsWithServerPaths = response.data.map((doctor) => ({
            ...doctor,
            profilePicture: convertToLocalServerPath(doctor.profilePicture),
          }));
          onSearch(doctorsWithServerPaths);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };


  return (
    <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
      <button
        className="btn mt-0 rounded-[0px] rounded-r-md"
        onClick={getAllDoctors}
      >
        get all doctors
      </button>
    </div>
  );
};

export default getAllDoctorsButton;
