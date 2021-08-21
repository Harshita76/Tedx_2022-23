import React from "react";
import "./Marquee.css";
import MarqeeCards from "./MarqeeCards";
import pic1 from "../../assets/images/sponsors-2020/automation.png";
import pic2 from "../../assets/images/sponsors-2020/condiments.png";
import pic3 from "../../assets/images/sponsors-2020/cotitle.png";
import pic4 from "../../assets/images/sponsors-2020/eco-friendly.png";
import pic5 from "../../assets/images/sponsors-2020/fitness.png";
import pic6 from "../../assets/images/sponsors-2020/innnovation.png";
import pic7 from "../../assets/images/sponsors-2020/merchandise.png";
import pic8 from "../../assets/images/sponsors-2020/music.png";
import pic9 from "../../assets/images/sponsors-2020/platform.png";
import pic10 from "../../assets/images/sponsors-2020/snacks.png";
import pic11 from "../../assets/images/sponsors-2020/ticketing.png";
import pic12 from "../../assets/images/sponsors-2020/title.png";
function Marquee() {
	const sponsdata = [
		{ id: 1, pic: pic1 },
		{ id: 2, pic: pic2 },
		{ id: 3, pic: pic3 },
		{ id: 4, pic: pic4 },
		{ id: 5, pic: pic5 },
		{ id: 6, pic: pic6 },
		{ id: 7, pic: pic7 },
		{ id: 8, pic: pic8 },
		{ id: 9, pic: pic9 },
		{ id: 10, pic: pic10 },
		{ id: 11, pic: pic11 },
		{ id: 12, pic: pic12 },
		{ id: 1, pic: pic1 },
		{ id: 2, pic: pic2 },
		{ id: 3, pic: pic3 },
		{ id: 4, pic: pic4 },
	];
	return (
		<>
			<div className="marquee">
				<ul className="marquee-content">
					{sponsdata.map((card) => (
						<li key={card.id} className="list">
							<MarqeeCards source={card.pic} />
						</li>
					))}
				</ul>
			</div>
			{/*<div className="marquee_name">SPONSORS</div>*/}
		</>
	);
}

export default Marquee;
