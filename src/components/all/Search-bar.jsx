import axios from "axios";
import { useContext, useState } from "react";
import { MyContext } from "../../pages/Doctors/Doctors";

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState(""); 
  const { setSearchResult } = useContext(MyContext);

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
    const type = "doctors";
    axios
      .get(`http://localhost:3000/${type}/search?name=${name}`)
      .then((response) => {
        const doctorsWithServerPaths = response.data.map((doctor) => ({
          ...doctor,
          profilePicture: convertToLocalServerPath(doctor.profilePicture),
        }));
        setSearchResult(doctorsWithServerPaths);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
      
    };


  return (
    <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
      <input
        type="search"
        className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
        placeholder="Search Doctor"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="btn mt-0 rounded-[0px] rounded-r-md"
        onClick={searchDoctor}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
