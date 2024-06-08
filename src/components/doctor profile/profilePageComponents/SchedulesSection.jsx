import React, { useContext, useRef } from "react";
import ScheduleElement from "./ScheduleElement";
import EmptyScheduleComponent from "./EmptyScheduleComponent";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { profileContext } from "../../../Layout/ProfileLayout";


const SchedulesSection = (/*{ data }*/) => {
  const { data } = useContext(profileContext);
  if (!data) {
    return <p>loading...</p>;
  }
  const scheduleData = data.schedule;

  return (
    <>
      <div className="schedulesSection w-[70%] shadow-panelShadow bg-white rounded-20 mt-[35px] flex flex-col gap-[20px] py-[20px] px-[25px] overflow-hidden relative">
        <div className="top flex items-center justify-between">
          <p className="schedulesTitle text-[20px] font-medium text-darkGreen2">
            Schedules
          </p>
          <Link to="/schedules">
            <FaChevronRight className="goTo text-darkGreen1 bg-superLightGreen p-2 mr-2 h-[40px] w-[40px] rounded-50 active:bg-darkGreen3 shadow-panelShadow" />
          </Link>
        </div>
        <div className="ana flex flex-col gap-4 ml-[15px] max-h-[356px] overflow-auto pr-3 rounded-20">
        {scheduleData.length === 0 ? (
          <EmptyScheduleComponent />
        ) : (
          scheduleData.map((schedule, index) => {
            return (
              <ScheduleElement
                key={index}
                day={schedule.day}
                start={schedule.start}
                end={schedule.end}
                givenTickets={
                  schedule.freeAt.filter((ticket) => ticket.reserved === "true")
                    .length
                }
                totalTickets={schedule.freeAt.length}
              />
            );
          })
          )}
        </div>
      </div>
    </>
  );
};
export default SchedulesSection;
