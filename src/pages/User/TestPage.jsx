import React, {useState} from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const TestPage = () => {
    const [distance, setDistance] = useState();
      const [mapInstance, setMapInstance] = useState(null); // Add this line
  const handleClick = (event) => {
      setDistance([event.latlng.lat, event.latlng.lng]);
      console.log(distance);
  };
    
  return (
    <div>
      <MapContainer
        center={[36.194179, 5.409578]}
        zoom={13}
         style={{ height: "55vh", width: "100%", marginTop: "10px" }}
         whenCreated={setMapInstance}
        eventHandlers={{ click: handleClick }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    
          <p className="mt-6">location: {distance}</p>
      
    </div>
  );
};

export default TestPage;
