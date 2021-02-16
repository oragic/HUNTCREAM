import React from 'react';

import '../styles/global.css';

import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '../styles/logo.png';

function Landig() {
    return(


        <div id="page-landing">

        <div className="content-mid">
            
            <div className="logo-huntcream">
    
                    <img src={Logo} alt="Logo do Huntcream" />
                    <p>HUNTCREAM</p>
    
            </div>
    
                    <main>
                            <h1>
                            LOREM 
                            IPSUM
                            MORE
                            </h1>
    
                            <p>is simply dummy text of the printing and typesetting industry.</p>
    
                    </main>
            
            </div>
    
                    <div className="content-left" >
    
                        <div className="location">
    
                                <strong>TERESINA</strong>
                                <br/>
                                <span>Piaui</span>
                        
                        </div>
    

                                <Link to="/app" className="enter-app">
                                <FiArrowRight size={26} color="rgba(8, 0, 0, 0.6)" />
                                </Link>
                           
    
                    </div>
    
    </div>

    )
}

export default Landig;
