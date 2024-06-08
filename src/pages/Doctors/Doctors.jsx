import React, { useState, createContext, useEffect } from "react";
import Testimonial from "../../components/Testimonial/Testimonial";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../components/Doctors/DoctorAbout";
import Feedback from "../../components/Doctors/Feedback";
import FeedbackForm from "../../components/Doctors/FeedbackForm";
import SidePanel from "../../components/Doctors/SidePanel";
import SearchBar from "../../components/all/Search-bar";
import DoctorList from "../../components/Doctors/DoctorList";
import { AiOutlineSearch } from "react-icons/ai";

export const MyContext = createContext();

const Doctors = () => {
  const [tab, setTab] = useState();
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div>
      <section>
        <div className="container text-center">
          <h2 className="heading text-darkGreen1">Find a Doctor</h2>
          <MyContext.Provider value={{ setSearchResult }}>
            <SearchBar />
          </MyContext.Provider>
        </div>
      </section>
      <section>
        <MyContext.Provider value={{ searchResult }}>
          <DoctorList />
        </MyContext.Provider>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers health
              care
            </p>
          </div>
        </div>

        <Testimonial />
      </section>

      <section>
        <div className="max-w-[1170px] px-5 mx-auto">
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={doctorImg} alt="" className="w-full" />
                </figure>
                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg;leading-7 font-semibold rounded">
                    Surgeon
                  </span>
                  <h3 className="=text-headingColor text-[22px] leading-9 mt-9 font-bold">
                    Moussaoui Houssem
                  </h3>

                  <div className="flex items-center gap-[6px] "></div>

                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg: text-[16px lg: leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                </div>
                <div className="mt-[50px] border-b border-solid border-[#0066ff34]"></div>

                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <div className="mt-[50px] border-b border-solid border-[#0066ff34]"></div>
                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  }py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>
              <SidePanel />
              <div className="mt-[50px]">
                {tab === "about" && <DoctorAbout />}
                {tab === "feedback" && <Feedback />}
                <FeedbackForm />
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Doctors;

/*
    <>
      <section className="bg-creme">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <MyContext.Provider value={{ setSearchResult }}>
            <SearchBar />
          </MyContext.Provider>
        </div>
      </section>
      <section>
        <MyContext.Provider value={{ searchResult }}>
          <DoctorList />
        </MyContext.Provider>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers health
              care
            </p>
          </div>
        </div>

        <Testimonial />
      </section>

      <section>
        <div className="max-w-[1170px] px-5 mx-auto">
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={doctorImg} alt="" className="w-full" />
                </figure>
                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg;leading-7 font-semibold rounded">
                    Surgeon
                  </span>
                  <h3 className="=text-headingColor text-[22px] leading-9 mt-9 font-bold">
                    Moussaoui Houssem
                  </h3>

                  <div className="flex items-center gap-[6px] "></div>

                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg: text-[16px lg: leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                </div>
                <div className="mt-[50px] border-b border-solid border-[#0066ff34]"></div>

                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <div className="mt-[50px] border-b border-solid border-[#0066ff34]"></div>
                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  }py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>
              <SidePanel />
              <div className="mt-[50px]">
                {tab === "about" && <DoctorAbout />}
                {tab === "feedback" && <Feedback />}
                <FeedbackForm />
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>
    </>
*/
