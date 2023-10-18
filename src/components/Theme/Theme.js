import React from "react";
import "./Theme.css";
import { Fade } from "react-awesome-reveal";
import themeImage from "../../assets/images/theme.webp";
// import { Link } from "react-router-dom";
// import video1 from "../../assets/videos/theme.mp4";
import THEME from "../../assets/images/THEME.png";

export default function Theme() {
	return (
		<>
			<section className="theme">
				<Fade direction="up" delay={300} triggerOnce>
					<h2 style={{textTransform:"uppercase"}}><span className="white">Theme -</span> Reflective Tapestry </h2>
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
							In a world filled with diverse perspectives, experiences, our event aims to celebrate and unravel the intricate interplay of these threads that make up the rich fabric of our society. 'Reflective Tapestry' signifies the power of and introspection as we disentangle the stories woven into our lives, communities, and the world at large. Our speakers will delve into the threads of their own unique journeys, highlighting the beauty of connectivity, the importance of self-discovery, and the tapestry of human existence and experience. Join us in this extraordinary exploration of the myriad stories that shape our collective narrative, and be inspired to see the tapestry of the world through a new lens.
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
