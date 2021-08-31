import React, { useEffect } from "react";
import tedxlogo from "../../assets/images/TedXLogo.png";
import "../../components/homepage/homepage_animation.js";
import { canvasDots } from "../../components/homepage/homepage_animation.js";
import { particles } from "../../components/homepage/homepage_paricles";
import Theme from "../../components/Theme/Theme";
import "../../components/homepage/homepage_animation.js";
import "./Homepage.css";
import Rules from "../../components/Rules/Rules";
import { useWindowSize } from "react-hooks-window-size";
import Highlights from "../../components/highlights/Highlights";

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
				</div>
			</div>
			<canvas className="dots" />
			<Theme />
			<div style={{margin:"20px 60px"}}>
			<Highlights />
			</div>
			<Rules />
		</>
	);
};

export default Homepage;
