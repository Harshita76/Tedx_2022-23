import React from 'react'
import Prevspk from "../../components/PreviousSpeakers/Carousel.babel"
import MediaQuery from 'react-responsive'

import { Carousel } from 'react-responsive-carousel'

import img1 from '../../components/PreviousSpeakers/1.png';
import img2 from '../../components/PreviousSpeakers/2.png';
import img3 from '../../components/PreviousSpeakers/3.png';
import img4 from '../../components/PreviousSpeakers/4.png';
import img5 from '../../components/PreviousSpeakers/5.png';
import img6 from '../../components/PreviousSpeakers/6.png';
import img7 from '../../components/PreviousSpeakers/9.png';
import img8 from '../../components/PreviousSpeakers/7.png';
import img9 from '../../components/PreviousSpeakers/8.png';


function Previous_Speakers() {
  
    return (
        
        <>
        <MediaQuery minWidth="900px">
       
        <div className="outer_box aslides1 aslides2 aslides3">
        <div style={{position:"relative !important"}}>
        
        
        <Prevspk />
        </div>
        </div>
        
        </MediaQuery>



        
            <MediaQuery minwidth = "10px" maxWidth="900px">
            <div style={{display:"block"}}>

            <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                <p className="legend">From a young boy on the streets of Lucknow to an international celebrity in the culinary world, Chef Ranveer’s story is one of dedication and perseverance. Founder of countless successful restaurants like Morisco, il Camino, Fishtail, in India as well as Banq in the US, Chef Ranveer is also the host of dozens of TV shows, and is a current judge of MasterChef India. His creativity, love for experimentation and eye for detail combined with his charming sense of humour make him one of the greatest Chefs of the country, and his videos never fail to bring a smile on his viewers’ faces.</p>
    
                 <img src={img1} />  
                
                </div>
                <div>
                <p className="legend">Captain Zoya Agarwal carries with her inspiring stories of following one's dreams irrespective of the barriers imposed on you. Having spent a childhood gazing up at the skies dreaming of becoming a pilot - Captain Zoya worked tirelessly to make her childhood dream her reality. Not to be stopped there, Captain Zoya continued breaking through glass ceilings. From becoming the youngest woman commander of the Boeing 777 to becoming the first woman commander of Air India to fly over the North Pole - Captain Zoya's path-breaking strides create pause for awe.       </p>
                    <img src={img2} />
                </div>
                <div>
                <p className="legend">From incorporating leftovers into meals to founding a food tech startup, Travin Singh’s journey into the realm of food waste management and sustainability is a remarkable one. It was while serving in the Singapore Navy that Travin had his first eureka moment. Seeing opportunity in the large amounts of unsold bread thrown out daily, he perfected the art of brewing, starting from YouTube and painstakingly improving his recipe. Four years later, CRUST Group was born, their first product being a bread based beer. Today, the company aims to fight the perennial issue of food loss and has wonderful ambitions - to reduce global food waste by 1% by 2030.     </p>
                    <img src={img3} />
                </div>
                <div>
                <p className="legend"> Devaagyh Dixit, India’s youngest and fastest drummer, made seven world records in a single day at the age of six. When Devaagyh started playing the drums at the age of two, his remarkably intuitive grasp of music and flair for learning that shone through was this wunderkind’s claim to fame. He made his first record at the age of 1 year and 10 months old, rightfully earning the title of ‘Grandmaster’ by the World Record University in London for his unmatched skill. Having performed over 160 drum solos by the mere age of six at both state and national level events, Devaagyh also plays an assortment of other instruments like the piano, guitar, conch, dombek, tabla and ghatam.</p>
                    <img src={img4} />
                </div>
                <div>
                <p className="legend">Just aged 34, and dubbed 'India's youngest new billionaire', Nikhil Kamath has walked and conquered many paths in his life. From leaving school to play chess internationally to teaching himself stock trading, Nikhil is the embodiment of grabbing life by the horns and directing one's own life. In 2010, Nikhil, along with his brother Nithin Kamath, created Zerodha - a revolutionary start-up that would grow to become India's largest brokerage platform.</p>
                    <img src={img5} />
                </div>
                <div>
                <p className="legend">Monika Seyfried, an Interaction Designer who works across the disciplines of science, ethics and futures, has a strong background in art, photography and filmmaking. Monika engages at the intersection of emerging technologies, digital media, and the natural environment by creating sensory-rich, interactive spaces through her design work. Monika is currently a researcher at the Copenhagen Institute of Interaction Design , and one of her ongoing research initiatives is Grow Your Own Cloud, which began as a speculative exploration of DNA data storage methods.</p>
                    <img src={img6} />
                </div>
                <div>
                <p className="legend">Narpath Raman is the only mentalist to be named as one of the top 20 inspiring men in 2017, and has stunned many with his accuracy and prowess. In fact, one of his earlier claims to fame was when he guessed the name of MS Dhoni’s high school crush on live television. A pioneer in the nascent mentalism community in India, Narpath has had a effervescent journey. His simplicity and playful demeaner compliment his gift perfectly, and have unsurprisingly made him a crowd favourite, earning him the title of the Next Door Mind Reader. Narpath’s art is a wonderful melange of psychology, hypnotism and storytelling. Prepare to be amazed because Narpath Raman always has something up his sleeve.</p>
                    <img src={img7} />
                </div>
                <div>
                <p className="legend">Dr. Patrizia Azzi is an experimental particle physicist at the Istituto Nazionale di Fisica Nucleare (INFN), Italy. Her discoveries and contributions in unravelling the mysteries of the universe are countless. From her role in the Higgs discovery as the coordinator of the \"Physics and Performance Data\", to leading the studies for the determination of physics performance of an upgraded CMS detector and being a proponent of the project for a Future Circular Collider at CERN, Dr Azzi’s 20+ years of experience in the STEM field is aweinspiring and truly motivating for the young minds out there! Driven by her relentless passion, she has authored more than 1000 publications, with some prominent contribution with 500+ citations. We are pleased to have Dr Azzi share her ardent journey in elucidating the unknown.</p>
                    <img src={img8} />
                </div>
                <div>
                <p className="legend">Manasa Varanasi, a  quintessence of multifacetedness and grace, was crowned Miss India World 2020 and will represent India at the 70th Miss World pageant in December 2021. She is a  Financial Information Exchange(FIX) analyst and enjoys exploring the world of finance. She is the epitome of finding balance between one’s career and passion while constantly working towards one’s goals. Manasa truly inspires us to embrace the opportunities that come our way and make the most of them. She makes it evident that commitment and finding balance is the key to success.</p>
                    <img src={img9} />
                </div>
               
            </Carousel>
        </div>

             </div>
             </MediaQuery>
            
    
        
        </>
    )
}

export default Previous_Speakers
