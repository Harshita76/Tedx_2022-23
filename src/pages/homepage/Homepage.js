import React, { useEffect } from "react";
import tedxlogo from "../../assets/images/TedXLogo.webp";
import "../../components/homepage/homepage_animation.js";
import { canvasDots } from "../../components/homepage/homepage_animation.js";
import { particles } from "../../components/homepage/homepage_paricles";
import Theme from "../../components/Theme/Theme";
import "../../components/homepage/homepage_animation.js";
import "./Homepage.css";
import Rules from "../../components/Rules/Rules";
import { useWindowSize } from "react-hooks-window-size";
import Highlights from "../../components/highlights/Highlights";
import { Link } from "react-router-dom";

const Homepage = () => {
	const size = useWindowSize(1500, 1500);

	useEffect(() => {
		if (size.width >= 1010) canvasDots();
		else particles();
	}, [size.width]);

	return (
		<>
			<div className="homepage">
				<div>
					<img className="tedx_logo" src={tedxlogo} alt="" />
					<div className="tedx_desc">
						TEDxBITSHyderabad is an annual event that aims to bring together
						inquisitive minds and spark engaging conversations. With a
						confluence of thought provoking speakers, we hope to bring forward
						fresh perspectives and novel concepts, giving every participant
						something to take home.
					</div>
					/*<Link to ='/payments'>
						<div className="buy_ticket">
							BUY TICKETS
						</div>
					</Link>*/
				</div>
			</div>
			<canvas className="dots" />
			<Theme />
			<div style={{ margin: "20px 60px" }}>
				<Highlights />
			</div>
			<Rules />
		</>
	);
};

export default Homepage;
