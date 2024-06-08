import React , {useContext, useState, useRef, useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import ScheduleElementSquare from "../schedulesPageComponents/scheduleElementSquare";
import ScheduleElement from "../profilePageComponents/ScheduleElement";
import EmptyScheduleComponent from "../profilePageComponents/EmptyScheduleComponent";
import { FaTimes } from "react-icons/fa";
import { profileContext } from "../../../Layout/ProfileLayout";
import 'simplebar/dist/simplebar.min.css';



const SchedulesList = () => {
  
  const { schedulesData } = useContext(profileContext);

  if (!schedulesData) {
    return <p>loading...</p>;
  }

  return (
    <>
      <div className="schedulesSection w-full shadow-panelShadow bg-white rounded-20 mt-[35px] flex flex-col gap-[20px] px-[25px] py-[20px] relative float-left max-h-[446px]">
        <div  className="top flex items-center justify-between">
          <p className="schedulesTitle text-[20px] font-medium text-darkGreen2">
            Schedules
          </p>
          <div className="buttons flex gap-2">
            <div className="AddSchedule  flex items-center gap-2 bg-superLightGreen p-[7px] text-[15px] rounded-[10px] hover:bg-cremeHover ">
              <FaPlus className="addScheduleIcon text-[#35bd3c] " />
              <button className="addScheduleButton text-darkGreen2 font-medium font-rubik hover:bg-cremeHover" >
                Add Schedule
              </button>
            </div>
            <div className="RemoveSchedule flex items-center gap-2 bg-[#FEE3E7] p-[7px] text-[15px] rounded-[10px]   ">
              <FaTimes className="addScheduleIcon text-red-500 " />
              <button className="addScheduleButton text-darkGreen2 font-medium font-rubik">
                remove Schedule
              </button>
            </div>
          </div>
        </div>

        <div className="schedulesList flex flex-grow gap-4 rounded-20 overflow-auto pb-3">
        {schedulesData.length === 0 ? (
          <EmptyScheduleComponent />
        ) : (
            schedulesData.map((schedule, key) => {
              const givenTickets = schedule.freeAt.filter((ticket) => ticket.reserved === "true").length
              const totalTickets = schedule.freeAt.length;
            return (
              <ScheduleElement
                key={key}
                day={schedule.day}
                start={schedule.start}
                end={schedule.end}
                givenTickets={givenTickets}
                totalTickets={totalTickets}
              />
            );
          })
          )}
        </div>
      </div>

    </>
  );
};

export default SchedulesList;
