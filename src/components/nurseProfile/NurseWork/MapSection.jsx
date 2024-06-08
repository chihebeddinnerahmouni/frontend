import React from 'react'

const MapSection = ({photo}) => {
  return (
      <div
        className="map w-full h-[350px] absolute top-[-50px]"
        style={{
          backgroundImage: `url(${encodeURI(photo)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
  )
}

export default MapSection
