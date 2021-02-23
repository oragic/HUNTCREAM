import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import mapmark from '../images/Mapmark.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function appMap(){
    return(
        <div className="appMap-content">
       
       <FiArrowRight size={26} color="rgba(8, 0, 0, 0.6)" />

       <aside>
            <header>
                    <img src={mapmark} alt="loga do mapa huntcream" />

                    <h2>I FELL LIKE A SUMMER</h2>
                    <p>Many desktop publishing packages and web page</p>
            </header>

            <footer>
                    <strong>TERESINA</strong>
                    <span>Piauí</span>
            </footer>
      </aside>

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>


        </div>    

    );
}

export default appMap;
