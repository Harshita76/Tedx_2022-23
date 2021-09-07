/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Gallery.css";
import img1 from "../../assets/images/gallery/1.jpg";
import img2 from "../../assets/images/gallery/2.jpg";
import img3 from "../../assets/images/gallery/3.jpg";
import img4 from "../../assets/images/gallery/4.jpg";
import img5 from "../../assets/images/gallery/5.jpg";
// import img6 from "../../assets/images/gallery/6.jpg";
import img7 from "../../assets/images/gallery/7.jpg";
import img8 from "../../assets/images/gallery/8.jpg";

import img10 from "../../assets/images/gallery/10.png";
import img11 from "../../assets/images/gallery/11.png";
import img12 from "../../assets/images/gallery/12.png";
import img13 from "../../assets/images/gallery/13.jpg";
import img14 from "../../assets/images/gallery/14.jpg";
import logo from "../../assets/images/black.png";


function Gallery() {
	return (
		<>
			<div style={{ margin: "40px" }}>
				<div className="panels">
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img1 + ")" }}
						>
							<h3 className="panel__title" />
						</div>
					</a>
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img3 + ")" }}


						>
							<h3 className="panel__title" />
						</div>
					</a>
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img2 + ")" }}


						>
							<h3 className="panel__title"></h3>
						</div>
					</a>
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img4 + ")", backgroundPosition: "46% center" }}
						>
							<h3 className="panel__title"></h3>
						</div>
					</a>
				</div>

				<div className="panels">
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img5 + ")" }}


						>
							<h3 className="panel__title"></h3>
						</div>
					</a>
					{/* <a href="#" className="panel"> */}
					<a className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + logo + ")" }}



						>
							<h3 className="panel__title logo_title" style={{ color: "red", fontSize: "4rem" }}>TED<span className="logo_title" style={{ fontSize: "3rem" }}>x</span></h3>
						</div>
					</a>
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img7 + ")" }}


						>
							<h3 className="panel__title"></h3>
						</div>
					</a>
				</div>

				<div className="panels">
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img8 + ")" }}


						>
							<h3 className="panel__title"></h3>
						</div>
					</a>
					{/* <a href="#" className="panel">
						<div
							className="panel__content"
							style={{backgroundImage: "url(" +  img9  + ")"}} 


						>
							<h3 className="panel__title">TEDx</h3>
						</div>
					</a> */}
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img10 + ")" }}


						>
							<h3 className="panel__title"></h3>
						</div>
					</a>
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img11 + ")", backgroundPosition: "46% center" }}


						>
							<h3 className="panel__title"></h3>
						</div>
					</a>
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img12 + ")", backgroundPosition: "46% center" }}


						>
							<h3 className="panel__title"></h3>
						</div>
					</a>
				</div>

				<div className="panels">
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img13 + ")" }}


						>
							<h3 className="panel__title"></h3>
						</div>
					</a>
					<a href="#" className="panel">
						<div
							className="panel__content"
							style={{ backgroundImage: "url(" + img14 + ")" }}


						>
							<h3 className="panel__title" />
						</div>
					</a>
				</div>
			</div>
		</>
	);
}

export default Gallery;
