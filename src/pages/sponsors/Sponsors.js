import React, { useEffect } from "react";
import Marquee from "../../components/marquee/Marquee";
import logo from "../../assets/images/TedXLogo.webp";
import "./Sponsors.css";
import { useWindowSize } from "react-hooks-window-size";
import { background } from "./sponsor_background";
import platinumSponsorImage from '../../assets/images/sponsors-2020/fablabs.jpg'
import outreachPartnerImage from '../../assets/images/sponsors-2020/skyevents.jpg'


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
				<a href="/">
					<img src={logo} className="sponsorpage-logo" alt="" />
				</a>
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

				{/* Platinum Sponsor Section */}
				<div className="platinum-partner-section">
					<h2>Platinum Sponsor</h2>
					<img
						src={platinumSponsorImage}
						alt="Platinum Sponsor"
						className="platinum-partner-image"
					/>
				</div>

				{/* Outreach Partner Section */}
				<div className="outreach-partner-section">
					<h4>Outreach Partner</h4>
					<img
						src={outreachPartnerImage}
						alt="Outreach Partner"
						className="outreach-partner-image"
					/>
				</div>

			</div>
			<div className="spons_heading">
				<span>PAST</span> SPONSORS
			</div>
			<div className="outer_box">
				<Marquee />
			</div>
		</>
	);
}
export default Sponsors;
