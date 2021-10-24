import React from "react";
import "./Theme.css";
import { Fade } from "react-awesome-reveal";
import themeImage from "../../assets/images/theme.webp";
import { Link } from "react-router-dom";
import video1 from "../../assets/videos/theme.mp4";

export default function Theme() {
	return (
		<>
			<section className="theme">
				<Fade direction="up" delay={300} triggerOnce>
					<h2>Theme</h2>
				</Fade>
				<div className="main">
					
						<div className="theme-img">
							<video src={video1} height="600" width="500" loop autoPlay muted />
						</div>
					
					<Fade direction="right" delay={300} triggerOnce>
						<div className="theme-text">
							<h5>
								<span>TEDx</span>BITSHyderabad
							</h5>
							<p>
								"BIG QUESTIONS, SMALL ANSWERS" refers to the idea that a number
								of obstacles and questions we face often require us to be
								proactive. They enforce upon us the necessity of starting with
								small steps in order to reach the pinnacle of life. In a world
								that currently requires an inspiring show of unity and
								self-reflection, we believe that this theme will give a chance
								for our speakers and attendees to reflect upon their pasts and
								their actions to drive their own future paths in solving
								communal goals. We also hope that the idea of large and daunting
								problems having simple solutions resonates with the audience to
								drive the notion of personal growth and individual action.
							</p>
							<Link to="/contactus" type="button" className="theme_btn">
								Contact Us
							</Link>
						</div>
					</Fade>
				</div>
			</section>
		</>
	);
}
