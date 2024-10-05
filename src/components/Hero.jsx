import React from 'react';
import Header from "./Header";
import SocialMedia from './SocialMedia';
import bannerImage from '../assets/Banner.png';

function Hero() {
  return (
    <div className="position-relative vh-100 vw-100 bg-black text-white">
        {/* Background image with opacity */}
        <div className="position-absolute top-0 start-0 w-100 h-100 ">
          <img
            src={bannerImage}
            alt="Office Background"
            className="w-100 h-100 object-cover"
          />
        </div>

        {/* Content container */}
        <div className="container h-100 d-flex flex-column justify-content-between position-relative z-index-1">
          {/* Logo and button */}
          <Header />

          {/* Headings (centered vertically) */}
          <div className="row flex-grow-1 align-items-center">
            <div className="col-md-12 text-center">
              <h1 className="display-4 fw-bold">
                Marketing That <span style={{ color: "#fa880c" }}>Moves.</span>
              </h1>
              <h2 className="display-5 fw-bold">
                Solutions That <span style={{ color: "#fa880c" }}>Grow.</span>
              </h2>
            </div>
          </div>
          <SocialMedia />
        </div>
      </div>
  )
}

export default Hero;
