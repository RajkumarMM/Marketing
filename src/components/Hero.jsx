import React from "react";
import SocialMedia from './SocialMedia';
import Header from './Header'; // Import the Header component
import bannerImage from '../assets/Banner.png';
import './Hero.css';
function Hero({ showBackground }) {
  return (
    <div className="hero w-100 text-white position-relative">
      <Header />

      {/* Background image with opacity */}
      {showBackground && (
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img
            src={bannerImage}
            alt="Office Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure full coverage
          />
        </div>
      )}
      
      <div className="container h-100 d-flex flex-column justify-content-evenly position-relative z-1">
        <div className="d-flex align-items-center justify-content-center mt-5 pt-3">
          <div className="text-center">
            <h1 className="display-4 fw-bold">
              Marketing That <span style={{ color: "#fa880c" }}>Moves.</span>
            </h1>
            <h2 className="display-5 fw-bold">
              Solutions That <span style={{ color: "#fa880c" }}>Grows.</span>
            </h2>
          </div>
        </div>

        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Hero;
