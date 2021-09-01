import React, { useState, useEffect, useRef } from 'react'
import logo from '../../assets/images/TedXLogo.png'
import BIRDS from 'vanta/dist/vanta.birds.min'
import './contactUs.css'
import './contactUs_animation'

const ContactUs = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x000000,
        color1: 0xe62b1e,
        color2: 0xffffff,
        colorMode: "lerpGradient",
        separation: 75.00,
        alignment: 10.00,
        cohesion: 1.00,
        quantity: 4.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <>  
      <div className='animated-bg'>
          <img src={logo} className='sponsor-page-logo' alt="" />
          <h1 className='title'>
            Contact Us
          </h1>
          <div ref={myRef} className='vantajs'></div>
      </div>
      <div id='bgs'></div>
    </>
  )
}

export default ContactUs 