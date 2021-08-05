import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Homepage from './components/homepage/homepage_main.js';
import Prevspk from './components/PreviousSpeakers/Carousel.babel.js'

import {Switch, Router} from "react-router-dom";
function App() {
  return (
    <>
    
      <Sidebar />
      <Homepage />
      
      
      <div class = "slideouter">
      <Prevspk />
      </div>
      
      
    </>
  );
}

export default App;
