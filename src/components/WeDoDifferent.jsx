import React from 'react';
import laptopImage from '../assets/laptop.png';
import { NavLink } from 'react-router-dom';

function WeDoDifferent() {
  return (
    <div className="text-light vh-md-100">
      <div className='container'>
        <div className="row pt-3">
          {/* Image Section */}
          <div className="col-md-6 position-relative mb-4 mb-md-0">
            <img src={laptopImage} alt="Team collaboration" className="img-fluid w-100 h-100" />
          </div>

          {/* Text Section */}
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <h6 className="fw-medium mb-3" style={{ color: "#fa880c" }}>WHAT WE DO DIFFERENT</h6>
            <h3 className="fs-4 fw-bold mb-3">Tired of promises that don't deliver?</h3>
            <p className="mb-3">
              You're here because you want <span style={{ color: "#fa880c" }}>real results</span> for your business. We understand the challenges of marketing. Maybe your ads aren't performing as expected, your
              website isn't converting, or you simply lack the time or resources to manage it all.
            </p>
            <p className="mb-3">
              At KanavuLabs, we're here to help. Our team of experts specializes in creating <span style={{ color: "#fa880c" }}>effective marketing strategies</span> and
              <span style={{ color: "#fa880c" }}>custom software solutions</span> that drive growth.
            </p>
            <p className="mb-3">Ready to <span style={{ color: "#fa880c" }}>take your business to the next level?</span></p>
            <NavLink to="/contact-us">
              <button className="btn btn-outline-light w-50">Let's talk</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeDoDifferent;
