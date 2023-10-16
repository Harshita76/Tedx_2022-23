import React from 'react'
import "./newSpeaker.css"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {slides} from "./newData";
import { useState, useRef } from "react";


const Newspeaker = () => {
    // const [xRotation, setXRotation] = useState(0);
    // const [yRotation, setYRotation] = useState(0);
    // const cardRef = useRef(null);
    // const imgRef = useRef(null);
    // const titleRef = useRef(null);
    // const descRef = useRef(null);
  
    // function handleMouseMove(event) {
    //   const card = cardRef.current;
    //   const { offsetWidth: width, offsetHeight: height } = card;
    //   const { clientX, clientY } = event;
    //   const x = clientX - card.offsetLeft - width / 2;
    //   const y = clientY - card.offsetTop - height / 2;
    //   var mult = 20;
    //   setXRotation((y / height) * mult);
    //   setYRotation((x / width) * mult);
    // }
    // function handleMouseEnter() {
    //   const img = imgRef.current;
    //   const title = titleRef.current;
    //   const desc = descRef.current
    //   title.style.transform = "translateZ(150px)";
    //   img.style.transform = "translateZ(100px) ";
    //   desc.style.transform = "translateZ(75px)";
    // }
    // function handleMouseLeave() {
    //   setXRotation(0);
    //   setYRotation(0);
  
    //   const img = imgRef.current;
    //   const title = titleRef.current;
    //   title.style.transform = "translateZ(0px)";
    //   img.style.transform = "translateZ(0px) ";
     
    // }
  return (
    <>
    {/* <div className="speak_heading"> */}
    {/* <span>NEW</span> SPEAKERS */}
  {/* </div> */}
   <div className="cardGrid">
  {slides.map((item) => (
  <div key ={item.id}>
  <div className="cardd"
//   ref={cardRef}
//   style={{
//     transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
//   }}
//   onMouseMove={handleMouseMove}
//   onMouseEnter={handleMouseEnter}
//   onMouseLeave={handleMouseLeave}
>
<div class="imgbox"> <img className="speaker-image"  src={item.image} alt="speaker image" />
<h2 className="tittle">{item.title} </h2>
<h4 className='tittle'>{item.profession}</h4>
</div>
     <div className='content'>
         <h3 className="slideLink">{item.link1 ? <a href={item.link1}><FaFacebook className="fa" /></a> : <div />} </h3>
          <h3 className="slideLink">{item.link2 ? <a href={item.link2}><FaInstagram className="in" /></a> : <div />} </h3>
          <h3 className="slideLink">{item.link3 ? <a href={item.link3}><FaYoutube className="yo" /></a> : <div />} </h3>
          <h3 className="slideLink">{item.link4 ? <a href={item.link4}><FaTwitter className="tw" /></a> : <div />} </h3>
          <h3 className="slideLink">{item.link5 ? <a href={item.link5}><FaLinkedin className="li" /></a> : <div />} </h3>
     
         {/* <p>{item.description}</p> */}
        
    </div>  
    </div>
  
 </div>
    ))} 
     </div>
    </>

  )
}

export default Newspeaker
