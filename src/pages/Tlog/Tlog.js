// import React from "react";
// import "./Tlog.css";
// import { slides } from "./TlogData";
// import { FaYoutube } from "react-icons/fa";

// function Tlog() {
//   return (
//     <div className="main-div container">
//       <h1 className="heading">TLog</h1>

//       <div className="tlog">
//         {slides.map((slide) => (
//           <div data-aos="fade-up" className="tlogcard">
//             <div className="card imgcard" key={slide.id}>
//             <a target="_blank" href={slide.link}>
//                 <FaYoutube size={50} />
//               </a>
//               <img className="tlogimg" src={slide.image} />
//             </div>
//             <div className="tlogtext">
//               <h1>{slide.title}</h1>

              

//               <p>
//                 {slide.quote}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tlog;


import React from "react";
import "./Tlog.css";
import { slides } from "./TlogData";
import { FaYoutube } from "react-icons/fa";

// Helper function to extract timestamp and create YouTube URL with timestamp
const getYouTubeTimestampLink = (quote, link) => {
  const timeMatch = quote.match(/\d{1,2}:\d{2}/);
  if (!timeMatch) return link;

  const timeParts = timeMatch[0].split(":");
  const seconds = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);

  return `${link}&t=${seconds}s`;
};

function Tlog() {
  return (
    <div className="main-div container">
      <h1 className="heading">TLog</h1>

      <div className="tlog">
        {slides.map((slide) => {
          return (
            <div data-aos="fade-up" className="tlogcard" key={slide.id}>
              <div className="card imgcard">
                <a target="_blank" rel="noopener noreferrer" href={slide.link}>
                  <FaYoutube size={50} />
                </a>
                <img className="tlogimg" src={slide.image} alt={slide.title} />
              </div>
              <div className="tlogtext">
                <h1>{slide.title}</h1>

                {/* Handling multiple quotes */}
                {slide.quotes.map((quote, index) => {
                  const youtubeLinkWithTimestamp = getYouTubeTimestampLink(
                    quote,
                    slide.link
                  );

                  return (
                    <p key={index}>
                      {/* Link timestamp to YouTube video */}
                      <a
                        href={youtubeLinkWithTimestamp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {quote.split(" - ")[0]}
                      </a>{" "}
                      - {quote.split(" - ")[1].toUpperCase()}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tlog;
