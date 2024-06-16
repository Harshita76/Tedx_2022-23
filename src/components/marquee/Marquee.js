import React from "react";
import "./Marquee.css";
import MarqeeCards from "./MarqeeCards";
import pic1 from "../../assets/images/sponsors-2020/audi.png";
import pic2 from "../../assets/images/sponsors-2020/sbi.png";
import pic3 from "../../assets/images/sponsors-2020/2.png";
import pic4 from "../../assets/images/sponsors-2020/3.png";
import pic5 from "../../assets/images/sponsors-2020/5.png";
import pic6 from "../../assets/images/sponsors-2020/6.png";
import pic7 from "../../assets/images/sponsors-2020/7.png";
import pic8 from "../../assets/images/sponsors-2020/8.png";
import pic9 from "../../assets/images/sponsors-2020/9.png";
import pic10 from "../../assets/images/sponsors-2020/10.png";
import pic11 from "../../assets/images/sponsors-2020/11.png";
/*import pic7 from "../../assets/images/sponsors-2020/audi.png";*/
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
