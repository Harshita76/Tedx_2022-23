import React from "react";
import "./Theme.css"
import { Fade } from "react-awesome-reveal";
import themeImage from "../../assets/images/theme.png";


export default function Theme() {

    return (
        <>
            <section className="theme">
                <Fade direction="up" delay={300} triggerOnce>
                    <h2>Theme</h2>
                </Fade>
                <div className="main">
                    <Fade direction="left" delay={300} triggerOnce>
                    <div className="theme-img">
                        <img src={themeImage} alt="tedx" className="themeImage"/>
                        </div>
                    </Fade>
                    <Fade direction="right" delay={300} triggerOnce>
                        <div className="theme-text">
                            <h5><span>TedX</span> BPHC</h5>
                            <p>Just twenty-six letters of the alphabet, combine in different ways to form words. Words that can change lives, words that can instigate an entire country to a revolution, or just the words that you are reading right now. Just seven notes of music come together and make up all of music. An entire art form, in all its glory and beauty, can be traced back to in seven sounds. Just two digits, zero and one, govern the entirety of computer science. Your laptops, iPads, phones (and probably your future robotic rulers, if the venerable Stephen Hawking is to be believed), all dictated by two numbers.</p>
                            <button type="button">Contact Us</button>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}