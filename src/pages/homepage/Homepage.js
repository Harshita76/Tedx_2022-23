import React, { useEffect } from "react";
import tedxlogo from "../../assets/images/TedXLogo.webp";
import "../../components/homepage/homepage_animation.js";
import { canvasDots } from "../../components/homepage/homepage_animation.js";
import { particles } from "../../components/homepage/homepage_paricles";
import Theme from "../../components/Theme/Theme";
import NewSpeaker from "../../components/newSpeaker/newSpeaker";
import "../../components/homepage/homepage_animation.js";
import "./Homepage.css";
import Rules from "../../components/Rules/Rules";
import { useWindowSize } from "react-hooks-window-size";
import Highlights from "../../components/highlights/Highlights";
import { Link } from "react-router-dom";
import Homepagedate from "../../components/homepagedate/homepagedate";


const Homepage = () => {
	const size = useWindowSize(1500, 1500);

	useEffect(() => {
		if (size.width >= 1010) canvasDots();
		else particles();
	}, [size.width]);

	return (
		<>
			<div className="homepage">
				<div classname="tedx_logo1">
					<img className="tedx_logo" src={tedxlogo} alt="" />
					{/*<Link to ='/payments'>
						<div className="buy_ticket">
							BUY TICKETS
						</div>
					</Link>*/}
                    
                   
				</div>

				<div classname="datedate">
				<Homepagedate />
				</div>

				</div>
			<canvas className="dots" />
			{/* <Theme /> */}
			{/* <NewSpeaker/> */}
			<div style={{ margin: "20px 60px" }}>
				<Highlights />
			</div>
			<Rules />
		</>
	);
};

export default Homepage;
