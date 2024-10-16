import React from "react";
import SocialMedia from './SocialMedia';
import Header from './Header'; // Import the Header component
import bannerImage from '../assets/Banner.png';

function Hero() {
  return (
    <div className="vh-100 vw-100 bg-black text-white position-relative overflow-hidden">
      {/* Include the Header at the top */}
      <Header />

      {/* Background image with opacity */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <img
          src={bannerImage}
          alt="Office Background"
          className="w-100 h-100 object-fit-cover" // Use object-fit to cover the container
          style={{ objectFit: 'cover' }} // Ensures the image covers the div without distortion
        />
      </div>

      {/* Content container */}
      <div className="container h-100 d-flex flex-column justify-content-evenly position-relative z-1">
        {/* Headings in the middle */}
        <div className="d-flex align-items-center justify-content-center mt-5 pt-3">
          <div className="text-center">
            <h1 className="display-4 fw-bold">
              Marketing That <span style={{ color: "#fa880c" }}>Moves.</span>
            </h1>
            <h2 className="display-5 fw-bold">
              Solutions That <span style={{ color: "#fa880c" }}>Grow.</span>
            </h2>
          </div>
        </div>

        {/* SocialMedia content at the bottom */}
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Hero;
