import React from "react";

import "./speaker_background";
import "./speaker.css";
//landing page
import ThreeScene from "./landingpage_react/appjs/appl1";



import Previous_Speakers from "../Speakers_Prev/Speakers_prev";
import { Link } from "react-router-dom";
const Speaker = () => {
	return (
		<>
			<div className="background">
			<ThreeScene />

			<div className="title">
				<div className="title_head">
					<h1>OUR SPEAKERS</h1>
				</div>
				<div className="title_desc">
					Tedx Bits Pilani Hyderabad Campus. Content will be added as soon as we
					get it !!!!!!!!!!!!!
				</div>
			</div>
            </div>
			<div className="speak_heading">
				<span>PREVIOUS YEAR</span> SPEAKERS
			</div>
			<div className="boxcontent">
				<Previous_Speakers />
			</div>
		</>
	);
};

export default Speaker;
