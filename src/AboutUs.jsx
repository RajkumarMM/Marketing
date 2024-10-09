import React from 'react'
import AbImage from '../src/assets/aboutUsImage.png';
import ScrollToTop from './components/ScrollToTop';


function AboutUs() {
  return (
    <div class="text-light mt-2">
    <div className='container-fluid'>
    <div class="row">
  <div class="col-md-6 position-relative">
    <img src={AbImage} alt="Team collaboration" class="img-fluid w-100 h-auto"/>
  </div>
  <div class="col-md-6 p-4 d-flex flex-column justify-content-center" id='whatwedo'>
    <h6 class="fw-medium mb-3" style={{ color: "#fa880c" }}>WHAT WE DO DIFFERENT</h6>
    <h3 class="fs-3 fw-bold mb-3">Tired of promises that don't deliver?</h3>
    <p class="mb-3">
      You're here because you want <span style={{ color: "#fa880c" }}>real results</span> for your business. <br />
      We understand the challenges of marketing. Maybe your ads aren't performing as expected, <br />your
      website isn't converting, or you simply lack the time or resources to manage it all.
    </p>
    <p class="mb-3">
      At KanavuLabs, we're here to help. Our team of experts specializes in creating <span style={{ color: "#fa880c" }}>effective marketing strategies</span> and
      <span style={{ color: "#fa880c" }}>custom software solutions</span> that drive growth.
    </p>
    <p class="mb-3">Ready to <span style={{ color: "#fa880c" }}>take your business to the next level?</span>
    <br />
    let's talk with us.
    </p>
  </div>
</div>
</div>
<ScrollToTop />
</div>
  )
}

export default AboutUs
