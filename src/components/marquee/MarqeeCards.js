/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Marquee.css";
function MarqeeCards({ source }) {
	return (
		<>
			<div className="cards">
				<div className="pic">
					<img src={source} alt="picture" />
				</div>
			</div>
		</>
	);
}

export default MarqeeCards;
