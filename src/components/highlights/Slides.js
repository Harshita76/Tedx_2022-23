import React from 'react'

import "./Slides.css";
import styled from "styled-components";

function Slides({ heading, bg }) {
	const Slide = styled.div`
		background-image: url(${bg});
		background-position: center;
		background-size: cover;
        bacground-repeat: no-repeat;
		height: 80vh;
		width: 100%;
		
	`;
	return (
		<Slide className="slide">
			<div className="slide_details">
				<div className="slide_heading">{heading}</div>
				
			</div>
		</Slide>
	);
}

export default Slides
