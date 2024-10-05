import React from 'react';
import laptopImage from '../assets/laptop.png';

function WeDoDifferent() {
  return (
    <div class="text-light my-5">
    <div className='container'>
    <div class="row pt-3">
  <div class="col-md-6 position-relative">
    <img src={laptopImage} alt="Team collaboration" class="img-fluid w-100 h-100"/>
  </div>
  <div class="col-md-6 p-4 d-flex flex-column justify-content-center">
    <h6 class="fw-medium mb-3" style={{ color: "#fa880c" }}>WHAT WE DO DIFFERENT</h6>
    <h3 class="fs-3 fw-bold mb-3">Tired of promises that don't deliver?</h3>
    <p class="mb-3">
      You're here because you want <span style={{ color: "#fa880c" }}>real results</span> for your business. We understand the challenges of marketing. Maybe your ads aren't performing as expected, your
      website isn't converting, or you simply lack the time or resources to manage it all.
    </p>
    <p class="mb-3">
      At KanavuLabs, we're here to help. Our team of experts specializes in creating <span style={{ color: "#fa880c" }}>effective marketing strategies</span> and
      <span style={{ color: "#fa880c" }}>custom software solutions</span> that drive growth.
    </p>
    <p class="mb-3">Ready to <span style={{ color: "#fa880c" }}>take your business to the next level?</span></p>
    <button class="btn btn-outline-light align-content-start w-25" onClick={() => window.location.href = 'tel:+1234567890'} >Let's talk</button>
  </div>
</div>
</div>
</div>
  )
}

export default WeDoDifferent
