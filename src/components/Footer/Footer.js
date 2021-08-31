import React from "react"
import "./Footer.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube, IconName } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className="footer-outer">
                <div className="footer-row1">
                    <div className="footer-col1">
                        <h4 className="footer-heading footer-link">About TED</h4>
                        <div className="footer-ted-desc">TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. The annual TED Conference takes place each spring in Vancouver, British Columbia.</div>
                    </div>
                    <div className="footer-col23">
                        <div className="footer-col2">
                            <h4 className="footer-heading footer-link">Follow Us</h4>
                            <div className="footer-social">
                                <a href="#" className="footer-icon fbicon"><FaFacebook /></a>
                                <a href="#" className="footer-icon twicon"><FaTwitter /></a>
                                <a href="#" className="footer-icon igicon"><FaInstagram /></a>
                                <a href="#" className="footer-icon inicon"><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className="footer-col3">
                            <h4 className="footer-heading footer-link">Contact Us</h4>
                            <a className="footer-email footer-link" href="#">tedx@hyderabad.bits-pilani.ac.in</a>
                            <button className="footer-contact"><a className="footer-contact-us" href="/contactus">Contact Us</a></button>
                        </div>
                    </div>
                </div>
                <div className="footer-row2">
                    <div className="footer-copyright ">© TED Conferences, LLC. All rights reserved.</div>
                </div>
            </div>
        </>
    );
}