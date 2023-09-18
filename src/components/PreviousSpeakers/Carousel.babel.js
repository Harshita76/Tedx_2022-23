// import React from "react";
// import './Carousel.css';
// import img1 from '../../assets/images/Previous_Speakers/1.webp';
// import img2 from '../../assets/images/Previous_Speakers/2.webp';
// import img3 from '../../assets/images/Previous_Speakers/3.webp';
// import img4 from '../../assets/images/Previous_Speakers/4.webp';
// import img5 from '../../assets/images/Previous_Speakers/5.webp';
// import img6 from '../../assets/images/Previous_Speakers/6.webp';
// import img7 from '../../assets/images/Previous_Speakers/9.webp';
// import img8 from '../../assets/images/Previous_Speakers/7.webp';
// import img9 from '../../assets/images/Previous_Speakers/8.webp';
// import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

// const slides = [
//   {
//     title: "Ranveer Brar - Celebrity chef",
//     link1: "https://www.facebook.com/RanveerBrar/",
//     link2: "https://www.instagram.com/ranveer.brar/",
//     link3: "https://www.youtube.com/channel/UCEHCDn_BBnk3uTK1M64ptyw",
//     link4: "https://twitter.com/ranveerbrar/",
//     link5: "https://in.linkedin.com/in/ranveerbrar",

//     description: "From a young boy on the streets of Lucknow to an international celebrity in the culinary world, Chef Ranveer’s story is one of dedication and perseverance. Founder of countless successful restaurants like Morisco, il Camino, Fishtail, in India as well as Banq in the US, Chef Ranveer is also the host of dozens of TV shows, and is a current judge of MasterChef India. His creativity, love for experimentation and eye for detail combined with his charming sense of humour make him one of the greatest Chefs of the country, and his videos never fail to bring a smile on his viewers’ faces.",
//     image: img1
//   },
//   {
//     title: "Zoya Agarwal - Pilot",
//     link2: "https://www.instagram.com/captainzoya/",
//     link4: "https://twitter.com/zoyacaptain",
//     link5: "https://in.linkedin.com/in/captain-zoya",
//     description: "Captain Zoya Agarwal carries with her inspiring stories of following one's dreams irrespective of the barriers imposed on you. Having spent a childhood gazing up at the skies dreaming of becoming a pilot - Captain Zoya worked tirelessly to make her childhood dream her reality. Not to be stopped there, Captain Zoya continued breaking through glass ceilings. From becoming the youngest woman commander of the Boeing 777 to becoming the first woman commander of Air India to fly over the North Pole - Captain Zoya's path-breaking strides create pause for awe.",
//     image: img2
//   },
//   {
//     title: "Travin Singh",
//     link1: "https://www.facebook.com/crustgroup/",
//     link2: "https://www.instagram.com/crustsingapore",

//     link4: "https://twitter.com/crust_japan",
//     link5: "https://sg.linkedin.com/in/travin-s-b1759115a",
//     description: " From incorporating leftovers into meals to founding a food tech startup, Travin Singh’s journey into the realm of food waste management and sustainability is a remarkable one. It was while serving in the Singapore Navy that Travin had his first eureka moment. Seeing opportunity in the large amounts of unsold bread thrown out daily, he perfected the art of brewing, starting from YouTube and painstakingly improving his recipe. Four years later, CRUST Group was born, their first product being a bread based beer. Today, the company aims to fight the perennial issue of food loss and has wonderful ambitions - to reduce global food waste by 1% by 2030.",

//     image: img3
//   },
//   {
//     title: "Devaagyh Dixit",
//     link1: "https://www.youtube.com/channel/UCMyzGIFFrSh442GrpxQqfUA",
//     link2: "https://www.facebook.com/Nawabdrummer/",
//     description: " Devaagyh Dixit, India’s youngest and fastest drummer, made seven world records in a single day at the age of six. When Devaagyh started playing the drums at the age of two, his remarkably intuitive grasp of music and flair for learning that shone through was this wunderkind’s claim to fame. He made his first record at the age of 1 year and 10 months old, rightfully earning the title of ‘Grandmaster’ by the World Record University in London for his unmatched skill. Having performed over 160 drum solos by the mere age of six at both state and national level events, Devaagyh also plays an assortment of other instruments like the piano, guitar, conch, dombek, tabla and ghatam.",
//     image: img4
//   },
//   {
//     title: "Nikhil Kamath",
//     link1: "https://www.facebook.com/nikhilkamathcio",
//     link2: "https://www.instagram.com/nikhilkamathcio/",
//     link3: "https://www.youtube.com/channel/UCEHCDn_BBnk3uTK1M64ptyw",
//     link4: "https://twitter.com/nikhilkamathcio",
//     link5: "https://www.linkedin.com/in/nikhil-kamath-00621424",

//     description: "Just aged 34, and dubbed 'India's youngest new billionaire', Nikhil Kamath has walked and conquered many paths in his life. From leaving school to play chess internationally to teaching himself stock trading, Nikhil is the embodiment of grabbing life by the horns and directing one's own life. In 2010, Nikhil, along with his brother Nithin Kamath, created Zerodha - a revolutionary start-up that would grow to become India's largest brokerage platform.",
//     image: img5
//   },
//   {
//     title: "Monika Seyfried",
//     link1: "https://www.facebook.com/moniaseyfried",
//     link2: "https://www.instagram.com/seyfriendly",
//     link4: "https://twitter.com/SeyfriedMonika",
//     link5: "https://dk.linkedin.com/in/monikaseyfried",
//     description: "Monika Seyfried, an Interaction Designer who works across the disciplines of science, ethics and futures, has a strong background in art, photography and filmmaking. Monika engages at the intersection of emerging technologies, digital media, and the natural environment by creating sensory-rich, interactive spaces through her design work. Monika is currently a researcher at the Copenhagen Institute of Interaction Design , and one of her ongoing research initiatives is Grow Your Own Cloud, which began as a speculative exploration of DNA data storage methods.",
//     image: img6
//   },
//   {
//     title: "Narpath Raman - Mentalist",
//     link1: "https://www.facebook.com/NarpathNDMR",
//     link2: "https://www.instagram.com/narpathndmr/",
//     link3: "https://www.youtube.com/c/NarpathNextDoorMindReader",
//     description: "Narpath Raman is the only mentalist to be named as one of the top 20 inspiring men in 2017, and has stunned many with his accuracy and prowess. In fact, one of his earlier claims to fame was when he guessed the name of MS Dhoni’s high school crush on live television. A pioneer in the nascent mentalism community in India, Narpath has had a effervescent journey. His simplicity and playful demeaner compliment his gift perfectly, and have unsurprisingly made him a crowd favourite, earning him the title of the Next Door Mind Reader. Narpath’s art is a wonderful melange of psychology, hypnotism and storytelling. Prepare to be amazed because Narpath Raman always has something up his sleeve.",
//     image: img7
//   },
//   {
//     title: "Dr. Patrizia Azzi",
//     link1: "https://www.facebook.com/patrizia.azzi",
//     link3: "https://www.youtube.com/watch?v=-rr07Q3SrBA",
//     link4: "https://twitter.com/patriziaazzi",
//     link5: "https://ch.linkedin.com/in/patrizia-azzi-0b746918",

//     description: "Dr. Patrizia Azzi is an experimental particle physicist at the Istituto Nazionale di Fisica Nucleare (INFN), Italy. Her discoveries and contributions in unravelling the mysteries of the universe are countless. From her role in the Higgs discovery as the coordinator of the \"Physics and Performance Data\", to leading the studies for the determination of physics performance of an upgraded CMS detector and being a proponent of the project for a Future Circular Collider at CERN, Dr Azzi’s 20+ years of experience in the STEM field is aweinspiring and truly motivating for the young minds out there! Driven by her relentless passion, she has authored more than 1000 publications, with some prominent contribution with 500+ citations. We are pleased to have Dr Azzi share her ardent journey in elucidating the unknown.",
//     image: img8
//   },
//   {
//     title: "Manasa Varanasi",
//     link2: "https://www.instagram.com/manasa5varanasi/",
//     link4: "https://twitter.com/manasa_varanasi",
//     description: "Manasa Varanasi, a  quintessence of multifacetedness and grace, was crowned Miss India World 2020 and will represent India at the 70th Miss World pageant in December 2021. She is a  Financial Information Exchange(FIX) analyst and enjoys exploring the world of finance. She is the epitome of finding balance between one’s career and passion while constantly working towards one’s goals. Manasa truly inspires us to embrace the opportunities that come our way and make the most of them. She makes it evident that commitment and finding balance is the key to success.",
//     image: img9
//   }
// ];

// function useTilt(active) {
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     if (!ref.current || !active) {
//       return;
//     }

//     const state = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined
//     };

//     let el = ref.current;

//     const handleMouseMove = (e) => {
//       if (!el) {
//         return;
//       }
//       if (!state.rect) {
//         state.rect = el.getBoundingClientRect();
//       }
//       state.mouseX = e.clientX;
//       state.mouseY = e.clientY;
//       const px = (state.mouseX - state.rect.left) / state.rect.width;
//       const py = (state.mouseY - state.rect.top) / state.rect.height;

//       el.style.setProperty("--px", px);
//       el.style.setProperty("--py", py);
//     };

//     el.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       el.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [active]);

//   return ref;
// }

// const initialState = {
//   slideIndex: 0
// };

// const slidesReducer = (state, event) => {
//   if (event.type === "NEXT") {
//     return {
//       ...state,
//       slideIndex: (state.slideIndex + 1) % slides.length
//     };
//   }
//   if (event.type === "PREV") {
//     return {
//       ...state,
//       slideIndex:
//         state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
//     };
//   }
// };

// function Slide({ slide, offset }) {
//   const active = offset === 0 ? true : null;
//   const ref = useTilt(active);

//   return (
//     <div
//       ref={ref}
//       className="slide"
//       data-active={active}
//       style={{
//         "--offset": offset,
//         "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
//       }}
//     >
//       <div
//         className="slideBackground"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       />
//       <div
//         className="slideContent"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       >
//         <div className="slideContentInner">
//           <h2 className="slideTitle">{slide.title}</h2>
//           <h3 className="slideSubtitle">{slide.subtitle}</h3>
//           <h3 className="slideLink">{slide.link1 ? <a href={slide.link1}><FaFacebook className="fa" /></a> : <div />} </h3>
//           <h3 className="slideLink">{slide.link2 ? <a href={slide.link2}><FaInstagram className="in" /></a> : <div />} </h3>
//           <h3 className="slideLink">{slide.link3 ? <a href={slide.link3}><FaYoutube className="yo" /></a> : <div />} </h3>
//           <h3 className="slideLink">{slide.link4 ? <a href={slide.link4}><FaTwitter className="tw" /></a> : <div />} </h3>
//           <h3 className="slideLink">{slide.link5 ? <a href={slide.link5}><FaLinkedin className="li" /></a> : <div />} </h3>

//           <p className="slideDescription">{slide.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Prevspk() {
//   const [state, dispatch] = React.useReducer(slidesReducer, initialState);

//   return (
//     <div className="slides">
//       <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

//       {[...slides, ...slides, ...slides].map((slide, i) => {
//         let offset = slides.length + (state.slideIndex - i);
//         return <Slide slide={slide} offset={offset} key={i} />;
//       })}
//       <button onClick={() => dispatch({ type: "PREV" })}>›</button>
//     </div>
//   );
// }

// export default Prevspk;