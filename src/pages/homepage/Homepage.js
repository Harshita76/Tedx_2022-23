import React, { useEffect } from "react";
import tedxlogo from "../../assets/images/TedXLogo.png";
import "../../components/homepage/Homepage_animation.js";
import { canvasDots } from "../../components/homepage/Homepage_animation.js";
import "./Homepage.css";

const Homepage = () => {
    useEffect (() => {
        canvasDots();
    },[])
	return (
        <>
		<div className="homepage">
			<div><img className="speaker_tedx_logo" src={tedxlogo} alt="" /></div>
		</div>
        <canvas className="dots"></canvas>
        </>
	);
};

export default Homepage;

