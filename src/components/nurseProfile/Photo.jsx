import React from 'react'

const Photo = () => {
  return (
<div className="flex flex-col min-h-screen">
         <img src={image} className="w-full" /> 
        {/*<div className="image w-full h-[400px]" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        </div>*/}
                <button type="button" className="absolute top-5 left-5 text-[18px] text-darkGreen1 z-10">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className="bg-creme2 z-2 w-full rounded-20 shadow-panelShadow p-4 mt-[-50%] flex-grow"> {/*  */}
          <div className="profileHeader flex justify-between pr-8">
            <div className="infos flex flex-col gap-1">
              <p className="font-bold text-darkGreen1">{nurseData.name}</p>
              <p className="text-sm text-[#8b8e93]">Nurse, {nurseData.specialite}</p>
              <p className="ville text-sm text-writingGrey">
                <span className="text-darkGreen4 mr-1 text-sm">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>{" "}
                hidhab
              </p>
            </div>
            <button type="button">
              <span className="text-white bg-darkGreen4 p-2 rounded-[50%] hover:bg-greenHover">
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </button>
          </div>
          <div className="Numbers mt-5 flex justify-between px-2">
            <Statistique title={"patient"} icon={faUsers} number={380} />
            <Statistique title={"Liked"} icon={faHeart} number={100} />
            <Statistique title={"Rate"} icon={faStar} number={4.2} />
          </div>
                <div className="about mt-5">
        <p className="font-[500] text-darkGreen2">About</p>
        <p className="text-writingGrey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis quisque. Egestas sit amet, in sed </p>
        </div>
        <div className="contact mt-5 mb-16">
          <p className="font-[500] text-darkGreen2">Contact</p>
          <p className="text-writingGrey text-sm">{nurseData.email}</p>
          <p className="text-writingGrey text-sm">{nurseData.phone}</p>
        </div>
        </div>
      </div>
  )
}

export default Photo;
