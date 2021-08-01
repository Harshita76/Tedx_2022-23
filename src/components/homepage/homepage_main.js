import React from "react";
import tedxlogo from "../homepage/TedXLogo.png"
import "../homepage/homepage_animation.js"
import "../homepage/homepage.css"

const Homepage =()=> {
    return(
        <div className="homepage">
            <canvas className='dots'></canvas>
            <img className="speaker_tedx_logo" src={tedxlogo} alt="" />
        </div>
    );
}

export default Homepage;
