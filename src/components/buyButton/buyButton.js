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
        
             <button
      className="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      SOLD OUT !
        </button>
    
      </div>
 );
}