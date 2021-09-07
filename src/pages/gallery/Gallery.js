/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Gallery.css";
import img1 from "../../assets/images/gallery/1.webp";
import img2 from "../../assets/images/gallery/2.webp";
import img3 from "../../assets/images/gallery/3.webp";
import img4 from "../../assets/images/gallery/4.webp";
import img5 from "../../assets/images/gallery/5.webp";
// import img6 from "../../assets/images/gallery/6.webp";
import img7 from "../../assets/images/gallery/7.webp";
import img8 from "../../assets/images/gallery/8.webp";

import img10 from "../../assets/images/gallery/10.webp";
import img11 from "../../assets/images/gallery/11.webp";
import img12 from "../../assets/images/gallery/12.webp";
import img13 from "../../assets/images/gallery/13.webp";
import img14 from "../../assets/images/gallery/14.webp";
import logo from "../../assets/images/black.webp";


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
