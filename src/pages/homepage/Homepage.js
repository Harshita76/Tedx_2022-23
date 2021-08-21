import React, {  useEffect } from "react";
import tedxlogo from "../../assets/images/TedXLogo.png";
import "../../components/homepage/homepage_animation.js";
import { canvasDots } from "../../components/homepage/homepage_animation.js";
import { particles } from "../../components/homepage/homepage_paricles";
import themeImage from "../../assets/images/theme.png";
import "../../components/homepage/homepage_animation.js";
import "./Homepage.css";
/* import { Fade } from "react-awesome-reveal"; */

import Rules from "../../components/Rules/Rules";
import { useWindowSize } from "react-hooks-window-size";



const Homepage = () => {

    const size = useWindowSize(1500, 1500);


    useEffect(() => {
        if (size.width >= 1010)
            canvasDots();
        else
            particles();
    },[size.width])

    return (
        <>
        
            <div className="homepage">
                <div><img className="tedx_logo" src={tedxlogo} alt="" /></div>
            </div>
            <canvas className="dots" />


            {/*<section className="theme">
                <Fade direction="up" delay={300}>
                    <h2>Theme</h2>
                </Fade>
                <div className="main">
                    <Fade direction="left" delay={300}>
                        <img src={themeImage} alt="tedx" />
                    </Fade>
                    <Fade direction="right" delay={300}>
                        <div className="theme-text">
                            <h5><span>TedX</span> BPHC</h5>
                            <p>Just twenty-six letters of the alphabet, combine in different ways to form words. Words that can change lives, words that can instigate an entire country to a revolution, or just the words that you are reading right now. Just seven notes of music come together and make up all of music. An entire art form, in all its glory and beauty, can be traced back to in seven sounds. Just two digits, zero and one, govern the entirety of computer science. Your laptops, iPads, phones (and probably your future robotic rulers, if the venerable Stephen Hawking is to be believed), all dictated by two numbers.</p>
                            <button type="button">Contact Us</button>
                        </div>
                    </Fade>
                </div>
    </section>*/}
            
            <Rules/>
        </>
    );
};

export default Homepage;

