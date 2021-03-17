import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import '../styles/appMap.css';

import mapmark from '../images/Mapmark.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

function appMap(){
    return(
        <div className="appMap-content">
       
       

       <aside  >

            <header>
            <Link to="" className="return">
        <FiArrowLeft size={26} color="rgba(8, 0, 0, 0.6)" />
        </Link>
                    <img src={mapmark} alt="loga do mapa huntcream" />

                    <h2>I FELL <br/> LIKE A <br/> SUMMER</h2>
                    <p>Many desktop publishing packages and web page</p>
            </header>

            <footer>
                    <strong>TERESINA</strong>
                    <span>Piauí</span>
            </footer>
      </aside>

            <MapContainer   className="leaflet-container" 
            center={[-23.6821604, -46.8754915]}
            zoom={10}
            style={{ width: "100%", height: "100%", position: "absolute" }} 
            >

        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup    closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
            >
                blablabal           
            </Popup>
        </Marker>
        </MapContainer>
       


        </div>    

    );
}

export default appMap;
