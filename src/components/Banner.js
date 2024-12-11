import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import heroImage from '../assets/lloyds-banking-group.png';


const Banner = () => {
  return (
    <div className="banner">
      <div className="text-left"> LLOYDS BANK </div>
      <Link to="/" className="logo-left">
        <img src={heroImage} alt="Logo Left" />
      </Link>
      
      {/* <div className="buttons-right">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div> */}
    </div>
  );
};

export default Banner;
