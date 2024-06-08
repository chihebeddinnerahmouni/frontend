import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddScheduel = () => {
  const [day, setDay] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [checkTime, setCheckTime] = useState("");

  //to focus on day input when add schedule button is clicked
  const dayInput = useRef(null);

  const AddScheduelButton = (e) => {
    e.preventDefault();
    const checkTime = 20;
    const toCheck = !day || !start || !end || !checkTime;
    if (toCheck) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    axios
      .put(
        "http://localhost:3000/doctors/profile/add-schedule",
        {
          day,
          start,
          end,
          checkTime,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="AddSchedule shadow-panelShadow bg-white rounded-20 mt-[35px] flex flex-col gap-[50px] py-[20px] px-[25px] overflow-hidden relative ">
      <form onSubmit={AddScheduelButton}>
        <label
          htmlFor="sheduelDayInput"
          className="text-darkGreen1 font-medium"
        >
          Day:
        </label>
        <br />
        <select
          ref={dayInput}
          name="day"
          id="sheduelDayInput"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="appearance-none rounded-none relative w-full px-3 py-2 border-b-2 mb-[20px]  border-darkGreen3 text-gray-900 focus:outline-none focus:ring-darkgreen1 focus:border-darkGreen1 focus:z-10 sm:text-sm"
        >
          <option value="">Select a day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <br />
        <label
          htmlFor="sheduelStartInput"
          className="text-darkGreen1 font-medium"
        >
          Start:
        </label>
        <input
          value={start}
          onChange={(e) => setStart(e.target.value)}
          type="time"
          id="sheduelStartInput"
          placeholder="Enter start hour"
          className="appearance-none rounded-none relative w-full px-3 py-2 border-b-2 mb-[20px] border-darkGreen3 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkgreen1 focus:border-darkGreen1 focus:z-10"
        />
        <br />
        <label
          htmlFor="sheduelEndInput"
          className="text-darkGreen1 font-medium"
        >
          End:
        </label>
        <input
          type="time"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          id="sheduelEndInput"
          placeholder="Enter end hour"
          className="appearance-none rounded-none relative w-full px-3 py-2 border-b-2 mb-[20px] border-darkGreen3 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkgreen1 focus:border-darkGreen1 focus:z-10"
        />
        <br />

        <label htmlFor="checkTime"
          className="text-darkGreen1 font-medium"        
        >
          CheckTime
        </label>
        <input
          type="number"
          value={checkTime}
          onChange={(e) => setCheckTime(e.target.value)}
          id="checkTime"
          name="checkTime"
          className="appearance-none rounded-none relative w-full px-3 py-2 border-b-2 mb-[20px] border-darkGreen3 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkgreen1 focus:border-darkGreen1 focus:z-10"
        />

        <button
          type="submit"
          className="bg-darkGreen4 w-full text-center py-3 rounded-[10px] mt-2 text-white font-rubik hover:bg-darkGreen2 transition duration-200 ease-in-out"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddScheduel;
