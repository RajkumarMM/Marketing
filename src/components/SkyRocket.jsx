import React from 'react';
import roketImage from '../assets/Mask group.png';
import PieIcon from '../assets/pieIcon.png';
import AppIcon from '../assets/appIcon.png';

function SkyRocket() {
  return (
    <div className="text-light my-3 vh-100">
    <div className='container'>
    <div className="row pt-3">
    <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
    <h6 className="fw-medium mb-3" style={{ color: "#fa880c" }}>READY TO SKYROCKET YOUR BUSINESS?</h6>
    <h3 className="fs-3 fw-bold mb-3">We've helped companies boost their bottom line, dominate the digital world, and simplify their workflows. Imagine what we could do for you.</h3>
    <div className="d-flex flex-column gap-3 mt-2">
  <div className="d-flex align-items-start">
    <span className="me-2"><img src={PieIcon} alt="pieIcon" /></span>
    <div>
      <h4 className="fw-semibold">Sick of marketing that's a total flop?</h4>
      <p>We get it. That's why we're all about data-driven strategies and custom software that actually works.</p>
    </div>
  </div>

  <div className="d-flex align-items-start">
    <span className="me-2"><img src={AppIcon} alt="appIcon" /></span>
    <div>
      <h4 className="fw-semibold">We're not here to waste your time.</h4>
      <p>Let us handle the tech and marketing, so you can focus on what matters most: running your business.</p>
    </div>
  </div>
</div>

  </div>
  <div className="col-md-6 position-relative">
    <img src={roketImage} alt="Team collaboration" className="img-fluid w-100 h-100" />
  </div>
  
</div>
</div>
</div>
  )
}

export default SkyRocket
