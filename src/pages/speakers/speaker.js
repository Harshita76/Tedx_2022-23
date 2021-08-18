import React from "react";
import mike from '../../assets/images/Untitled design (9)/Untitled design (9)_1.png';
import logo from '../../assets/images/TedXLogo.png';
import './speaker.css';
import video from '../../assets/images/latest_stage_video.mp4'

const Speaker = () => {
    return(
        <>
            <div>
                <video className="video" autoPlay loop muted>
                    <source src={video} type='video/mp4'/>
                </video>
                <img src={logo} alt="logo" className='logo' />
                <img src={mike} alt="mike" className='mike' />
                <div className='speaker-homepage-background'>
                </div>
            </div>
        </>
    );
};

export default Speaker;
