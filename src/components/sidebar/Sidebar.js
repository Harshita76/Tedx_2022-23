import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FiMic } from "react-icons/fi";
import { RiContactsLine, RiGalleryLine } from "react-icons/ri";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import { ImLink } from "react-icons/im";
import { PiCrosshair } from "react-icons/pi";
import { Link } from "react-router-dom";
import { usePath } from "hookrouter";
function Sidebar() {
	const [sideNav, setSideNav] = useState({
		activeNav: null,
		objects: [
			{ id: 1, iconTag: HiOutlineHome, link: "/", text: "Home" },
			{ id: 2, iconTag: FiMic, link: "/speaker", text: "Speakers" },
			{
				id: 3,
				iconTag: HiOutlineUserGroup,
				link: "/sponsor",
				text: "Sponsors",
			},
			{ id: 4, iconTag: ImLink, link: "/tlog", text: "TLog" },
			{ id: 5, iconTag: PiCrosshair, link: "/executives", text: "Executives" },
			{ id: 6, iconTag: RiGalleryLine, link: "/gallery", text: "Gallery" },

			
		],
	});
	const path = usePath();
	useEffect(() => {
		setSideNav({
			...sideNav,
			activeNav: sideNav.objects.filter((object) => object.link === path)[0],
		});
	}, []);
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
					<Link
						to={elements.link}
						className={toggleActiveClass(index)}
						key={elements.id}
					>
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
