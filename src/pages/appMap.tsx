import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import mapmark from '../images/Mapmark.png'

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


        </div>    

    );
}

export default appMap;
