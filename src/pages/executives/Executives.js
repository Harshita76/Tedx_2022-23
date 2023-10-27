import React, { useState, useEffect, useRef }  from 'react'
import {slides} from "./ExeData";
// import logo from "../../assets/images/TedXLogo.webp";
import "./executives.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Executives() {
  return (
    <>
    {/* <a href="/">
          <img src={logo} className="sponsor-page-logo" alt="" />
        </a> */}
    <div className="speak_heading">
    <span>OUR </span> EXECUTIVES
  </div>
   <div className="card-grid">
  {slides.map((item) => (
  <div key ={item.id}>
  <div className="card">
      <img className="speaker--image" src={item.image} alt="speaker image" />
     <div className='card-body'>
         <h2>{item.title} </h2>
         <h7>{item.position} </h7>
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

export default Executives
