import React from 'react'

const GpsFromTo = () => {

  return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="w-[20px] h-[20px] bg-darkGreen4 rounded-50 flex justify-center items-center">
            <div className="w-[10px] h-[10px] bg-creme2 rounded-50"></div>
           </div>
           <div style={{ width: '2px', height: '50px', borderLeft: '2px dashed black' }}></div>
          <div className="w-[20px] h-[20px] bg-black rounded-50 flex justify-center items-center">
             <div className="w-[10px] h-[10px] bg-creme2 rounded-50"></div>
           </div>
        </div>
  )
}

export default GpsFromTo
