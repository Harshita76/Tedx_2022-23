import React from "react";
import "./Marquee.css";
import MarqeeCards from "./MarqeeCards";
function Marquee() {
	const sponsdata = [
		{ id: 1, pic: "" },
		{ id: 2, pic: "" },
		{ id: 3, pic: "" },
		{ id: 4, pic: "" },
		{ id: 5, pic: "" },
		{ id: 6, pic: "" },
		{ id: 7, pic: "" },
		{ id: 8, pic: "" },
		{ id: 9, pic: "" },
		{ id: 10, pic: "" },
		{ id: 11, pic: "" },
		{ id: 12, pic: "" },
		{ id: 13, pic: "" },
	];
	return (
		<>
				<div className="marquee">
					<ul className="marquee-content">
						{sponsdata.map((card) => (
							<li key = {card.id}>
								<MarqeeCards />
							</li>
						))}
					</ul>
				</div>
				<div className="marquee_name">SPONSORS</div>
		</>
	);
}

export default Marquee;
