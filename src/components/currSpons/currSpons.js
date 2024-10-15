
import React from 'react'
import img1 from '../../assets/images/sponsors-2020/sponsor1_2024.png';
import img2 from '../../assets/images/sponsors-2020/sponsor2_2024.png';
import img3 from '../../assets/images/sponsors-2020/sponsor3_2024.png';
import img4 from '../../assets/images/sponsors-2020/sponsor4_2024.png';
import img5 from '../../assets/images/sponsors-2020/sponsor5_2024.png'
import img6 from '../../assets/images/sponsors-2020/sponsor6_2024.png'
import "./currSpons.css"

function Spons() {
  const sponsdata = [
    { id: 1, pic: img1, link: "https://fablabs.in/" },
    { id: 6, pic: img6, link: "https://raammg.com/" },
    { id: 2, pic: img2, link: "https://mezbaanhyd.com/" },
    { id: 3, pic: img3, link: "https://avaanexcess.com/" },
    { id: 4, pic: img4, link: "https://www.easemytrip.com/" },
    { id: 5, pic: img5, link: "https://www.instagram.com/thrilariahyd/?hl=en" },
    // { id: 5, pic: img5 , link:"https://www.monsterenergy.com/en-in/"},
  ];
  return (
    <>

      <div className="spons-grid">
        {sponsdata.map((item) => (
          <div key={item.id}>
            <div className="spons">
              <a href={item.link} target='_blank'>  <img className="spons--image" src={item.pic} alt="spons logo" /></a>

            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export default Spons