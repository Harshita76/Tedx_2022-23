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
		height: 60vh;
		width: 70vw;
	`;
	return (
		<Slide className="slide">
			<div className="slide_details">
				<div className="slide_heading">{heading}</div>
				<div className="slide_description">{desc}</div>
			</div>
		</Slide>
	);
}

export default Slides
