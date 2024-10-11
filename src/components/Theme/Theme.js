import React from "react";
import "./Theme.css";
import { Fade } from "react-awesome-reveal";
import themeImage from "../../assets/images/theme.webp";
// import { Link } from "react-router-dom";
// import video1 from "../../assets/videos/theme.mp4";
import THEME from "../../assets/images/Theme_2024.png";

export default function Theme() {
	return (
		<>
			<section className="theme">
				<Fade direction="up" delay={300} triggerOnce>
					<h2 style={{textTransform:"uppercase"}}><span className="white">Ephemeral </span>Panorama </h2>
				</Fade>
				<div className="main">
					<div className="theme-img">
						<img src={THEME} height="600" width="500" />
					</div>

					<Fade direction="right" delay={300} triggerOnce>
						<div className="theme-text">
							{/* <h5>
								<span>Reflective </span> Tapestry
							</h5> */}
							<p>
							'Ephemeral Panorama' captures the fleeting essence of the vast and vivid human experience that we partake in throughout our lives. The objective of the theme is to display the wide landscape of the emotions, ideas, and episodes we face, which are momentary and yet inspire change to shape us into who we are. The lack of permanence in our thoughts, the swift change in knowledge, and a slower shift of wisdom show the brilliance of the transient nature of the lives we lead. In this altering panorama, we are often forced to re-examine our decisions and adapt for a newer goal with ever-shifting circumstances. The theme symbolizes the nature of impressions on our minds, and how they shape science, art, sports, and culture in incremental ways, urging us to see the big picture in the temporary moments of inspiration.
							</p>
							{/* <Link to="/contactus" type="button" className="theme_btn">
								Contact Us
							</Link> */}
						</div>
					</Fade>
				</div>
			</section>
		</>
	);
}
