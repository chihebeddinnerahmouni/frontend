import React, { useState, useContext } from 'react';
import axios from 'axios';
import { MyContext } from '../../pages/Doctors/Doctors';

const ShowMore = () => {
  //style for button
const style = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '25px',
        marginLeft: '40%',
        
  }
const { setSearchResult } = useContext(MyContext);
  const [page, setPage] = useState(2); 
  

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

    const nextPage = () => {
        setPage(page => page + 1)
        console.log(page)
         axios
        .get(`http://localhost:3000/doctors?page=${page}`)
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
    }


    return (
        <div className='nextListButtonContainer'>
            <button className='nextListButton' style={style} onClick={nextPage}>Show more</button>
        </div>
    )
}

export default ShowMore;
