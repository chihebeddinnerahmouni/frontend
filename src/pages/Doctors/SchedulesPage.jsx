import axios from "axios";
import React, { useEffect, useState, useContext, createContext } from "react";
import SchedulesList from "../../components/doctor profile/schedulesPageComponents/SchedulesList";
import AddScheduel from "../../components/doctor profile/schedulesPageComponents/AddScheduel";
import DeleteSchedule from "../../components/doctor profile/schedulesPageComponents/DeleteSchedule";
import ScheduleDetails from "../../components/doctor profile/schedulesPageComponents/ScheduleDetails";
import { profileContext } from "../../Layout/ProfileLayout";


const SchedulesPage = () => {

  const { setSchedulesData } = useContext(profileContext);


  



  useEffect(() => {
    axios
      .get("http://localhost:3000/doctors/profile/schedules", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setSchedulesData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="top flex items-start justify-between gap-4 fade-in">
          <div className="left flex flex-col gap-4 w-[900px]">
            <SchedulesList />
            <ScheduleDetails/>
          </div>
          <div className="right flex flex-col gap-4 flex-grow">
            <AddScheduel/>
            <DeleteSchedule />
          </div>
        </div>
    </>
  );
};

export default SchedulesPage;
