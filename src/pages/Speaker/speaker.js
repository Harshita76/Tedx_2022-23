import React, {useState, useEffect, useRef} from "react";
import logo from "../../assets/images/TedXLogo.webp";
import GLOBE from 'vanta/dist/vanta.globe.min'
import "./speaker_background";
import "./speaker.css";
import PrevSpeaker from "../../components/prevSpeaker/prevSpeaker";
//landing page
// import ThreeScene from "./landingpage_react/appjs/appl1";
import Previous_Speakers from "../Speakers_Prev/Speakers_prev";
const Speaker = () => {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);
	useEffect(() => {
		if(!vantaEffect){
			setVantaEffect(
				GLOBE({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: true,
					minHeight: 200.00,
					minWidth: 200.00,
					scale: 1.00,
					scaleMobile: 1.00,
					backgroundColor: 0x00000,
					color:0xe62b1e
				})
			)
		}
		return () => {
			if(vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect])
	return (
		<>
			<div className="background">
				<a href="/">
					<img src={logo} className="sponsor-page-logo" alt="" />
				</a>
				{/* <ThreeScene /> */}

				<div className="speaker-title">
					<div className="speaker-title_head">
						<h1>OUR SPEAKERS</h1>
					</div>
					<div className="speaker-title_desc">
						From entrepreneurs to child prodigies to actual princes, we’ve had
						some wonderful speakers from diverse backgrounds. The powerful
						stories and ideas they shared epitomize the spirit of TEDx and we’re
						truly privileged to have hosted these icons.
					</div>
				</div>
				<div ref={myRef} className="speaker_vanta"></div>
			</div>
			<div className="speak_heading">
				<span>PREVIOUS YEAR</span> SPEAKERS
			</div>
			<div className="boxcontent">
			<PrevSpeaker/>
			</div>
		</>
	)
};

export default Speaker;
