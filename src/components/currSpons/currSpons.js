
import React from 'react'
import img1 from '../../assets/images/New_Speakers/8.png';
import img2 from '../../assets/images/New_Speakers/9.png';
import img3 from '../../assets/images/New_Speakers/10.png';
import img4 from '../../assets/images/New_Speakers/11.png';
import img5 from '../../assets/images/New_Speakers/12.png';
import "./currSpons.css"

function Spons() {
    const sponsdata = [
		{ id: 1, pic: img1, link: "https://fablabs.in/" },
		{ id: 2, pic: img2, link:"https://unstop.com/" },
		{ id: 3, pic: img3, link:"https://www.easemytrip.com/" },
		{ id: 4, pic: img4 , link:"https://www.instax.in/"},
    { id: 5, pic: img5 , link:"https://www.monsterenergy.com/en-in/"},
    ];
  return (
    <>
    
<div className="spons-grid">
  {sponsdata.map((item) => (
  <div key ={item.id}>
  <div className="spons">
    <a href={item.link}>  <img className="spons--image" src={item.pic} alt="spons logo" /></a>
   
    </div>
  
        </div>
    ))} 
     </div>
</>
  )
}

export default Spons