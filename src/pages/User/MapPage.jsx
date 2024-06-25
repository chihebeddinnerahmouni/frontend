import React from 'react';
import { UserDataContext } from '../../Layout/UserLayout';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const MapPage = () => {
    const { setUserLocation } = useContext(UserDataContext);
    const navigate = useNavigate();
    const locate = () => {
            navigate('/User-asking');
        };
    

  return (
<>
<MapContainer center={[36.194179, 5.409578]} zoom={13} style={{ height: "100vh", width: "100%", zIndex: "10"}}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
</MapContainer>   

          <div className="location absolute bottom-0 w-full rounded-tl-20 rounded-tr-20 bg-white z-20 flex flex-col items-center px-4 pt-4 pb-[70px]">
            <hr className="border-t-[3px] border-darkGreen2 w-[70px] rounded-50" />
            <p className='text-darkGreen2 font-bold mt-4'>gfKDHGFKhgfHHFGegflEGFLyeg</p>
            <button className='w-full bg-darkGreen4 shadow-panelShadow text-creme2 py-3 rounded-20 mt-6' onClick={locate}>confirme location</button>
          </div>    
      
      
      
      
      
      
</>
  )
}

export default MapPage
