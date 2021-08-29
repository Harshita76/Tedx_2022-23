import React from "react";
import "./Ham.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMic } from "react-icons/fi";
import { RiContactsLine, RiGalleryLine } from "react-icons/ri";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import {GiPlayerPrevious} from 'react-icons/gi';
import { useEffect } from "react";
const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #000000;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 5;
    overflow: hidden;
	transition: transform 0.3s ease-in-out;

	@media (max-width: 576px) {
		width: 100vw;
	}

	a {
        
		font-size: 1.5rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: #ffffff;
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: 576px) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: #ff0000;
		}
	}
`;

const Menu = ({ open, clicked, setClicked }) => {
	return (
		<StyledMenu open={open}>
			<Link to="/">
				<a href="/" onClick={() => setClicked(!clicked)} ><HiOutlineHome style={{ color: "red" }} /> Home</a>
			</Link>
			<Link to="speaker">
				<a href="/" onClick={() => setClicked(!clicked)}><FiMic style={{ color: "red" }} /> Speakers</a>
			</Link>
			<Link to="prevspk">
				<a href="/" onClick={() => setClicked(!clicked)}><GiPlayerPrevious style={{color:"red"}}/> Previous Speakers</a>
			</Link>
			<Link to="sponsor">
				<a href="/" onClick={() => setClicked(!clicked)}><HiOutlineUserGroup style={{ color: "red" }} />  Sponsors</a>
			</Link>
			<Link to="/">
				<a href="/" onClick={() => setClicked(!clicked)}><RiGalleryLine style={{ color: "red" }} />  Gallery</a>
			</Link>
			<Link to="/">
				<a href="/" onClick={() => setClicked(!clicked)}><RiContactsLine style={{ color: "red" }} /> Contact Us</a>
			</Link>
		</StyledMenu>
	);
};

const StyledBurger = styled.button`
	position: fixed;
	top: 5%;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	&:focus {
		outline: none;
		border: none;
	}

	div {
		width: 2rem;
		height: 0.125rem;
		background: ${({ open }) => (open ? "#FF0000" : "#EFFFFA")};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) =>
		open ? "translateX(-20px)" : "translateX(0)"};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

const Ham = () => {
	const [open, setOpen] = React.useState(false);
	const [clicked, setClicked] = React.useState(false);
	const node = React.useRef();
	useEffect(() => {
		setOpen(false);
	}, [clicked])
	return (
		<div className="ham">
			<div ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} clicked={clicked} setClicked={setClicked} />
			</div>
		</div>
	);
};

export default Ham;
