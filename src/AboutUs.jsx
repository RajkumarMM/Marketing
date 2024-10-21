import React from 'react'
import AbImage1 from '../src/assets/aboutus/about-1.png';
import SocialMedia from './components/SocialMedia';
import bannerImage from './assets/aboutBanner.png';
import Scroll from './components/Scroll';
import Header from './components/Header';
import Footer from './components/Footer'


function AboutUs() {
  return (
    <>
    {/* banner section */}
    <div className="vh-100 vw-100 bg-black text-white pt-3">
    <Header />
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
    <div className="text-light float-start w-100 h-100 mb-5">
    <div className="container">
        <div className="row">
            {/* Image Section */}
            <div className="col-md-6 mb-4 mb-md-0">
                <img src={AbImage1} alt="Team collaboration" className="w-100 h-auto" />
            </div>

            {/* Text Section */}
            <div className="col-md-6 p-4 d-flex flex-column justify-content-center" id="whatwedo">
                <h6 className="fw-medium mb-3" style={{ color: "#fa880c" }}>WHO WE ARE</h6>
                <p className="mb-3">
                    Founded in 2021, our firm has been at the forefront of technological innovation, dedicated to empowering businesses through cutting-edge solutions. As a dynamic technology consultancy, we specialize in developing tailored strategies that seamlessly integrate advanced technologies, driving our clients toward unprecedented success.
                </p>
                <p>
                    Our commitment to excellence is underpinned by a deep understanding of the evolving technological landscape. We remain at the forefront of industry trends and innovations, ensuring that our solutions are consistently aligned with the latest advancements. By leveraging our expertise and harnessing the power of technology, we deliver customized solutions that address the unique challenges and opportunities of each individual client.
                </p>
            </div>
        </div>
    </div>
</div>

{/* third section */}
<section className="text-light my-5 w-100 h-100">
    <div className="container">
        {/* Title Section */}
        <div className="row justify-content-center text-center mb-md-5 mb-2">
            <div className="col-lg-8 col-md-10 col-12">
                <h3 className="fw-bold">Why Choose KanavuLabs?</h3>
            </div>
        </div>

        {/* First Content Block */}
        <div className="row justify-content-center text-center mb-md-5 mb-2">
            <div className="col-md-10 col-lg-8 col-12">
                <h6 className="fw-medium mb-3" style={{ color: "#fa880c" }}>DELIVERING MEASURABLE RESULTS</h6>
                <p>
                    Our proven expertise has empowered countless businesses to achieve substantial growth, enhance their online visibility, and streamline their operations. Through strategic planning, cutting-edge technologies, and a dedication to excellence, we consistently deliver tangible outcomes that drive your success.
                </p>
            </div>
        </div>

        {/* Two Columns for Content */}
        <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-6 col-12 mb-md-4 mb-2">
                <h6 className="fw-medium" style={{ color: "#fa880c" }}>A DEEP UNDERSTANDING OF YOUR CHALLENGES</h6>
                <p>
                    We recognise the complexities of today's business landscape and the imperative need for efficient, results-driven strategies. Our commitment to undefined-driven marketing and innovative software solutions ensures that your investments yield tangible returns, directly aligning with your organisational objectives.
                </p>
            </div>

            <div className="col-lg-5 col-md-6 col-12 mb-md-4 mb-2">
                <h6 className="fw-medium" style={{ color: "#fa880c" }}>VALUING YOUR TIME AND RESOURCES</h6>
                <p>
                    At KanavuLabs, we understand that your time is a precious commodity. By entrusting us with your technology and marketing needs, you can confidently focus on core business operations, knowing that your digital presence is in capable hands.
                </p>
            </div>
        </div>
    </div>
</section>



<Footer />
</>
  )
}

export default AboutUs
