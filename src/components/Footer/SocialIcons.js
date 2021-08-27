import React from "react"
import "./SocialIcons.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, IconName } from "react-icons/fa";

export default function SocialIcons() {
    return (
        <>
            <div className="wrap">
                <div className="social">
                    <a href="#" className="icon-facebook fb"><FaFacebook /></a>
                    <a href="#" className="icon-youtube yt"><FaYoutube /></a>
                    <a href="#" className="icon-linkedin li"><FaLinkedin /></a>
                    <a href="#" className="icon-instagram ig"><FaInstagram /></a>
                    <a href="#" className="icon-twitter tw"><FaTwitter /></a>
                </div>
            </div>
        </>
    );
}