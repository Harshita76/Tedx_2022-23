import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FiMic } from "react-icons/fi";
import { RiContactsLine, RiGalleryLine } from "react-icons/ri";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";

import { Link, BrowserRouter } from "react-router-dom";

function Sidebar() {
	const [sideNav, setSideNav] = useState({
		activeNav: null,
		objects: [
			{ id: 1, iconTag: HiOutlineHome, link: "/", text: "Home" },
			{ id: 2, iconTag: FiMic, link: "/speaker", text: "Speakers" },
			
			{ id: 3, iconTag: HiOutlineUserGroup, link: "/sponsor", text: "Sponsors" },
			{ id: 4, iconTag: RiGalleryLine, link: "/gallery", text: "Gallery" },
			{ id: 5, iconTag: RiContactsLine, link: "/contactus", text: "Contact Us" },
		],
	});
	useEffect(() => {
		setSideNav({ ...sideNav, activeNav: sideNav.objects[0] });
	}, [])
	function setActive(index) {
		setSideNav({ ...sideNav, activeNav: sideNav.objects[index] });
	}
	function toggleActiveClass(index) {
		if (sideNav.objects[index] === sideNav.activeNav) {
			return "active";
		} else {
			return "inactive";
		}
	}
	return (
		<>
				<div className="sidebar">
					{sideNav.objects.map((elements, index) => (
							<Link to={elements.link} className={toggleActiveClass(index)} key={elements.id}>
								<div className="slider" onClick={() => setActive(index)}>
									<div>
										<elements.iconTag className="icon" />
									</div>
									<div className="text">{elements.text}</div>
								</div>
							</Link>
					))}
				</div>
		</>
	);
}

export default Sidebar;
