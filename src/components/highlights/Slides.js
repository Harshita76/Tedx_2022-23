import React from 'react'
import { Link } from "react-router-dom";
import "./Slides.css";
import styled from "styled-components";

function Slides({ heading, desc, link, btn_text, bg }) {
	const Slide = styled.div`
		background-image: url(${bg});
		background-position: center;
		background-size: cover;
        bacground-repeat: no-repeat;
		height: 90vh;
		width: 80vw;
        display:flex;
        align-items: center;
        justify-content: center;
	`;
	return (
		<Slide>
			<div className="slide_details">
				<div className="slide_heading">{heading}</div>
				<div className="slide_description">{desc}</div>
				<Link to={link} className="slide_btn">
					<div>{btn_text}</div>
				</Link>
			</div>
		</Slide>
	);
}

export default Slides
