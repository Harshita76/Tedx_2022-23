import React from 'react'
import {slides} from "./data";
import "./prevSpeaker.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';


function prevSpeaker() {
  return (
    <>
    <div className="speak_heading">
    {/* <span>NEW</span> SPEAKERS */}
  </div>
   <div className="card-grid">
  {slides.map((item) => (
  <div key ={item.id}>
  <div className="card">
      <img className="speaker--image" src={item.image} alt="speaker image" />
     <div className='card-body'>
         <h2>{item.title} </h2>
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

export default prevSpeaker
