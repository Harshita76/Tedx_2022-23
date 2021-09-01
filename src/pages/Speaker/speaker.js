import React from "react";
import mike from '../../assets/images/new_mike.png';
import logo from '../../assets/images/TedXLogo.png';
import './speaker_background';
import './speaker.css';
import video from '../../assets/images/red_stage_light.mp4'
import Previous_Speakers from '../Speakers_Prev/Speakers_prev'
const Speaker = () => {
    return(
        <>
            <div className='background'>
                <video className="video" autoPlay loop muted>
                    <source src={video} type='video/mp4'/>
                </video>
                <img src={logo} alt="logo" className='logo' />
                <img src={mike} alt="mike" className='mike' />
            </div>

                <div className='animation'>
                    <div> 
                        <span className='speaker-title'>SPEAKERS</span>
                    </div>
                </div>

            {/* <div className='speaker-homepage-background'></div> */}
            <div>
                <div className='background'></div>
            </div>
            <div className="speak_heading"><span>PREVIOUS YEAR</span> SPEAKERS</div>
            <div className='boxcontent'>
                <Previous_Speakers />
            </div>
        </>
    );
};

export default Speaker;
