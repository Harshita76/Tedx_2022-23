import React from "react";
import "./Sidebar.css";
import { FiMic } from "react-icons/fi";
import { RiContactsLine, RiGalleryLine } from "react-icons/ri";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import { Link, BrowserRouter } from "react-router-dom";

function Sidebar() {
	return (
		<>
			<BrowserRouter>
				<div className="sidebar">
					<div>
						<Link to="#">
							<HiOutlineHome className="icon" />
						</Link>
					</div>
					<div>
						<Link to="#">
							<FiMic className="icon" />
						</Link>
					</div>
					<div>
						<Link to="#">
							<HiOutlineUserGroup className="icon" />
						</Link>
					</div>
					<div>
						<Link to="">
							<RiGalleryLine className="icon" />
						</Link>
					</div>
					<div>
						<Link to="#">
							<RiContactsLine className="icon" />
						</Link>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default Sidebar;
