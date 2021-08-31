import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slides from './Slides';
import Carousel1 from "../../assets/images/carousel1.jfif"
function Highlights() {
    const data = [
		{
			heading: "WORKSHOPS",
			desc: "Description goes here Description goes here Description goes here",
			bg: Carousel1,
			btn_text: "See More",
			link: "#",
			id: 1,
		},
		{
			heading: "PRODUCTS",
			desc: "Description goes here Description goes here Description goes here",
			bg: Carousel1,
			btn_text: "See More",
			link: "#",
			id: 2,
		},
		{
			heading: "BOOKS",
			desc: "Description goes here Description goes here Description goes here",
			bg: Carousel1,
			btn_text: "See More",
			link: "#",
			id: 3,
		},
	];
    return (
        <div>
            <div>
			<Carousel
				autoPlay
				centerMode
				infiniteLoop
				showStatus={false}
				showThumbs={false}
				showIndicators={false}
			>
				{data.map((item) => {
					return (
						<Slides
							key={item.id}
							heading={item.heading}
							desc={item.desc}
							bg={item.bg}
							btn_text={item.btn_text}
							link={item.link}
						/>
					);
				})}
			</Carousel>
		</div>
        </div>
    )
}

export default Highlights
