import React from 'react'
import AbImage from '../src/assets/aboutUsImage.png';
import SocialMedia from './components/SocialMedia';
import bannerImage from './assets/aboutBanner.png';
import Scroll from './components/Scroll';


function AboutUs() {
  return (
    <>
    {/* banner section */}
    <div className="vh-100 vw-100 bg-black text-white">
      {/* Background image with opacity */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <img
          src={bannerImage}
          alt="Office Background"
          className="w-100 h-100 object-cover opacity-50"
          style={{filter: 'grayscale(150%)'}}
        />
      </div>

      {/* Content container */}
      <div className="container h-100 d-flex flex-column justify-content-evenly position-relative z-0">
        
        {/* Headings in the middle */}
        <div className="d-flex align-items-center justify-content-center mt-2">
          <div className="text-center">
            <h1 className="display-4 fw-bold">
            Putting <span style={{ color: "#fa880c" }}>Technology</span> to <br />
              <span style={{ color: "#fa880c" }}>Work for You.</span>
            </h1>
            <p className="fw-semibold">
            Committed to delivering exceptional results by providing innovative <br /> solutions that meet the unique needs of our clients.
            </p>
          </div>
        </div>

        {/* SocialMedia content at the bottom */}
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
    {/* second section */}
    <div className="text-light">
    <div className='container-fluid'>
    <div className="row">
  <div className="col-md-6 position-relative">
    <img src={AbImage} alt="Team collaboration" className="img-fluid w-100 h-auto"/>
  </div>
  <div className="col-md-6 p-4 d-flex flex-column justify-content-center" id='whatwedo'>
    <h6 className="fw-medium mb-3" style={{ color: "#fa880c" }}>WHAT WE DO DIFFERENT</h6>
    <h3 className="fs-3 fw-bold mb-3">Tired of promises that don't deliver?</h3>
    <p className="mb-3">
      You're here because you want <span style={{ color: "#fa880c" }}>real results</span> for your business. <br />
      We understand the challenges of marketing. Maybe your ads aren't performing as expected, <br />your
      website isn't converting, or you simply lack the time or resources to manage it all.
    </p>
    <p className="mb-3">
      At KanavuLabs, we're here to help. Our team of experts specializes in creating <span style={{ color: "#fa880c" }}>effective marketing strategies</span> and
      <span style={{ color: "#fa880c" }}>custom software solutions</span> that drive growth.
    </p>
    <p className="mb-3">Ready to <span style={{ color: "#fa880c" }}>take your business to the next level?</span>
    <br />
    let's talk with us.
    </p>
  </div>
</div>
</div>
<Scroll />
</div>
</>
  )
}

export default AboutUs
