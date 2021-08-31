import React, { useEffect } from 'react'
import Marquee from "../../components/marquee/Marquee"
import  logo  from "../../assets/images/TedXLogo.png"
import "./Sponsors.css"
import { useWindowSize } from "react-hooks-window-size";
import {background} from './sponsor_background';


function Sponsors() {

    const size = useWindowSize(1500, 1500);


    useEffect(() => {
        if (size.width > 1024)
        {  
            //sponsorParticles()
            background()
        }
        else if (size.width <= 426 )
        {   
            background()
            //sponsorParticles_responsive()
        }
        else
        {
            background()
            //sponsorParticles_tablet()
        }
    },[size.width])

    return (
        <>
        <div className='landing-page'>
            <img src={logo} className='sponsorpage-logo' alt="" />
            <canvas id='sponsor_homepage' />
            <h1 id='title'>SPONSORS</h1>
        </div>
        <div className="outer_box">
            <Marquee />
        </div>
        </>
    )
}

export default Sponsors
