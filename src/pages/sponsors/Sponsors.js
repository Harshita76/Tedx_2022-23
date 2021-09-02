import React, { useEffect } from "react";
import Marquee from "../../components/marquee/Marquee";
import logo from "../../assets/images/TedXLogo.png";
import "./Sponsors.css";
import { useWindowSize } from "react-hooks-window-size";
import { background } from "./sponsor_background";
import { Link } from "react-router-dom";

function Sponsors() {
	const size = useWindowSize(1500, 1500);

	useEffect(() => {
		if (size.width > 1024) {
			//sponsorParticles()
			background();
		} else if (size.width <= 426) {
			background();
			//sponsorParticles_responsive()
		} else {
			background();
			//sponsorParticles_tablet()
		}
	}, [size.width]);

	return (
		<>
			<div className="landing-page">
				<Link to="/"><img src={logo} className="sponsorpage-logo" alt="" /></Link>
				<canvas id="sponsor_homepage" />
				<div className="title">
					<div className="title_head">
						<h1>SPONSORS</h1>
					</div>
					<div className="title_desc">
						Tedx Bits Pilani Hyderabad Campus. Content will be added as soon as
						we get it !!!!!!!!!!!!!
					</div>
				</div>
			</div>
			<div className="spons_heading">
				<span>PREVIOUS YEAR</span> SPONSORS
			</div>
			<div className="outer_box">
				<Marquee />
			</div>
		</>
	);
}
export default Sponsors;
