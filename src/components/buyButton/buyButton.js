import React, { useState } from 'react';
import "./buyButton.css";
import { A } from 'hookrouter';
import { dividerClasses } from '@mui/material';

export default function BuyTicketbutton(){
    const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <a
        href="https://unstop.com/o/m3gYVIP?lb=NJfCCy0C&utm_medium=Share&utm_source=shortUrl"
        target="_blank"
      >
        <button
          className="button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          BUY NOW !
        </button>
      </a>
    </div>
  );
}