
import React from 'react'
import img1 from '../../assets/images/New_Speakers/8.png';
import img2 from '../../assets/images/New_Speakers/9.png';
import img3 from '../../assets/images/New_Speakers/10.png';
import img4 from '../../assets/images/New_Speakers/11.png';
import "./currSpons.css"

function Spons() {
    const sponsdata = [
		{ id: 1, pic: img1 },
		{ id: 2, pic: img2 },
		{ id: 3, pic: img3 },
		{ id: 4, pic: img4 },
    ];
  return (
    <>
    
<div className="spons-grid">
  {sponsdata.map((item) => (
  <div key ={item.id}>
  <div className="spons">
      <img className="spons--image" src={item.pic} alt="spons logo" />
   
    </div>
  
        </div>
    ))} 
     </div>
</>
  )
}

export default Spons