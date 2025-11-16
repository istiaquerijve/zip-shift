import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Covarage = () => {
  const position = [51.505, -0.09]
  const mapData = useLoaderData();
  const mapRef = useRef(null)
  // console.log(mapData);

  const handleSubmit = (e) => {
    e.preventDefaule();
    const location = e.target.location.value;
    const district = mapData.find(d => d.district.toLowerCase().includes(location.toLowerCase()));
    if(district){
      const coord = [district.latitude, district.longitude]
      mapRef.current.flyTo(coord, 14)
    }
  }
    return (

        <div className='p-20'>
           <div>
             <h1 className='font-bold text-3xl'>We are available in 64 districts</h1>
           </div>

           <div>
              <form onSubmit={handleSubmit}>
                <label className="input">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input name='location' type="search" className="grow" placeholder="Search" />
                  
                </label>
              </form>
           </div>
          {/*  */}
           <div className='mt-10 w-full h-[800px]'>
              <MapContainer center={position} zoom={8} scrollWheelZoom={false}
              className='h-[800px]' ref={mapRef}
              >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                   {
                      mapData.map((data, index) => <Marker key={index} data={data} position={[data.latitude, data.longitude]}>
                      <Popup>
                        <strong>{data.district}</strong> <br /> Service area: {data.covered_area.join(", ")}.
                      </Popup>
                    </Marker> )
                   }
              </MapContainer>
           </div>
        </div>
    );
};

export default Covarage;