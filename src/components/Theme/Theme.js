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
					<h2 style={{textTransform:"uppercase"}}>Elixer Of Change</h2>
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
								The elixir of change aims to accentuate the role it plays in
								shaping our lives. Through this theme, we hope to bring forward
								the stories — the trials, turning points and the experiences
								that have helped define who we are. This idea of Change as the
								ambrosia of advancement, will drive our audience and speakers to
								reconnect with their experiences where they have had the power
								to make a change. As creatures of habit, we find solace in the
								familiar, failing to acknowledge the inevitability of change and
								the duality of progress. From throwing paper planes and driving
								wooden trains, we find that nothing lasts forever and that true
								beauty lies in the evolution of this journey. We believe that a
								chance to reflect upon the conscious choices we make to embrace
								the progress of our mercurial world could help bring the idea of
								change as the catalyst for metamorphosis to the forefront.
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
