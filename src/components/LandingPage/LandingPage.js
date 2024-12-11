import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import heroImage from '../../assets/landing_hero.png'; // Importing the image

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="text-content">
        <h1>Welcome to Google Cloud's </h1>
        <h2>Get started with your estimate</h2>
        <p>Add and configure products to get a cost estimate to share with your team.</p>
        <div className="button-container">
          <Link to="/calculator">
            <button className="add-button">+ Add to Estimate</button>
          </Link>
        </div>
      </div>
      <div className="image-content">
        <img
          src={heroImage}
          alt="Hero"
          className="logo"
          style={{ height: '300px', width: '268px', marginLeft: '-40px' }}
        /> {/* Apply the inline styles */}
      </div>
    </div>
  );
};

export default LandingPage;
