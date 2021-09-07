import React from "react";
import "./Marquee.css";
import MarqeeCards from "./MarqeeCards";
import pic1 from "../../assets/images/sponsors-2020/automation.webp";
import pic2 from "../../assets/images/sponsors-2020/condiments.webp";
import pic3 from "../../assets/images/sponsors-2020/cotitle.webp";
import pic4 from "../../assets/images/sponsors-2020/eco-friendly.webp";
import pic5 from "../../assets/images/sponsors-2020/fitness.webp";
import pic6 from "../../assets/images/sponsors-2020/innnovation.webp";
import pic7 from "../../assets/images/sponsors-2020/merchandise.webp";
import pic8 from "../../assets/images/sponsors-2020/music.webp";
import pic9 from "../../assets/images/sponsors-2020/platform.webp";
import pic10 from "../../assets/images/sponsors-2020/snacks.webp";
import pic11 from "../../assets/images/sponsors-2020/ticketing.webp";
import pic12 from "../../assets/images/sponsors-2020/title.webp";
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
