import React from "react";
import mike from '../../assets/images/mictedx.png';
import logo from '../../assets/images/TedXLogo.png';
import './speaker.css';

const Speaker = () => {
    return(
        <>
            <div>
                <div className='speaker-homepage-background'>
                    <img src={logo} className="tedx-logo" alt="" />
                    <h1 className='speaker-homepage-title'>SPEAKERS</h1>
                    <img className='speaker-homepage-img' src={mike} alt='' />
                </div>
                <div>
                </div>
            </div>
        </>
    );
};

export default Speaker;
