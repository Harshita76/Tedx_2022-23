import React from "react"
import "./Footer.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube, IconName } from "react-icons/fa";
import { Link } from "react-router-dom";
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
                                <a href="https://www.facebook.com/search/top?q=tedxbitshyderabad" target="_blank" rel="noopener noreferrer" className="footer-icon fbicon"><FaFacebook /></a>
                                <a href="https://twitter.com/tedxbitshyd?lang=en" target="_blank" rel="noopener noreferrer" className="footer-icon twicon"><FaTwitter /></a>
                                <a href="https://www.instagram.com/tedxbitshyderabad/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-icon igicon"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/company/tedxbitshyderabad/mycompany/" target="_blank" rel="noopener noreferrer" className="footer-icon inicon"><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className="footer-col3">
                            <h4 className="footer-heading footer-link">Contact Us</h4>
                            <a className="footer-email footer-link" href="#">tedx@hyderabad.bits-pilani.ac.in</a>
                            <button className="footer-contact"><a className="footer-contact-us" href="/contactus">Contact Us</a></button>
                        </div>
                        <div className="footer-col4">
                            <h4 className="footer-heading footer-link">Other Links</h4>
                            <Link to='/termandcond'>
                                <a className="footer-email footer-link" href="#">Terms and conditions</a>
                            </Link>
                            <Link to='/privacypolicy'>
                                <a className="footer-email footer-link" href="">Privacy Policy</a>
                            </Link>
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