import { doctors } from "./../../assets/data/doctors";
import DoctorCard from "./DoctorCard";
import { useContext } from "react";
import { MyContext } from "../../pages/Doctors/Doctors";


  
const DoctorList = () => {

  const { searchResult } = useContext(MyContext);
  

  return (
    <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {searchResult.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor}/>
            ))} 
          </div>
        </div>
  );
};
export default DoctorList;







