import React from "react";
import "./Marquee.css";
function MarqeeCards({ source }) {
	return (
		<>
			<div className="cards">
				<div className="pic">
					<img src={source} alt="tedx" />
				</div>
			</div>
		</>
	);
}

export default MarqeeCards;
