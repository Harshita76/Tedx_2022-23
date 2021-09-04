import React from "react";
import logo from "../../assets/images/TedXLogo.png";

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
				<Link to="/">
					<img src={logo} className="sponsor-page-logo" alt="" />
				</Link>
				<ThreeScene />

				<div className="speaker-title">
					<div className="speaker-title_head">
						<h1>OUR SPEAKERS</h1>
					</div>
					<div className="speaker-title_desc">
						From entrepreneurs to child prodigies to actual princes, we’ve had
						some wonderful speakers from diverse backgrounds. The powerful
						stories and ideas they shared epitomize the spirit of TEDx and we’re
						truly privileged to have hosted these icons.
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
