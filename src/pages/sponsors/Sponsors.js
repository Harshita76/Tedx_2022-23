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
				<Link to="/">
					<img src={logo} className="sponsorpage-logo" alt="" />
				</Link>
				<canvas className="sponsor_homepage" />
				<div className="spons-title">
					<div className="spons-title_head">
						<h1>SPONSORS</h1>
					</div>
					<div className="spons-title_desc">
						Join us on our journey to proliferate meaningful discussions and
						associate with a global name consistent with collaboration,
						innovation and enduring optimism. Our event is a great opportunity
						to increase your reach among a brilliant audience and an equally
						amazing speaker line-up.
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
