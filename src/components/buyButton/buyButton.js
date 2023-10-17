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
        <a href="https://unstop.com/o/s4yIih7?lb=NJfCCy0C">
             <button
      className="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      BUY TICKETS
        </button>
    </a>
      </div>
 );
}