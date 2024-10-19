import React from "react";
import PieIcon from '../assets/pieIcon.png';
import AppIcon from '../assets/appIcon.png';
import './WhatWeDo.css'
function WhatWeDo() {
  return (
    <div className="text-light vh-100 d-flex justify-content-center align-items-center">
      <div className="container" id="whatwedo">
        <h6 className="fw-medium py-3 text-md-start text-center" style={{ color: "#fa880c" }}>
          WHAT WE DO
        </h6>
        <p className="mb-4 fs-3 fw-bold text-md-start text-center">
          With a dedication to quality and a focus on results, we offer
          comprehensive services that empower your business to stand out in the
          competitive marketplace and achieve your digital goals.
        </p>
        <div className="row mb-4">
          <div className="col-md-6 d-flex flex-column align-items-center mb-3 text-center text-md-start"> {/* Center alignment for small screens */}
            <div>
              <div className="d-flex gap-3 align-items-center">
                <span>
                  <img src={PieIcon} alt="pieIcon" style={{ maxWidth: '40px' }} />
                </span>
                <span className="fw-semibold fs-4">
                Strategy That Drives Results
              </span>
              </div>
              <p className="pe-md-5 mt-2" style={{ color: '#929292' }}>
                See your social media investments pay off. We'll craft
                strategies that deliver real results and help you achieve your
                business goals.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center text-center text-md-start"> {/* Center alignment for small screens */}
            <div>
              <div className="d-flex align-items-center gap-3">
                <span>
                  <img src={AppIcon} alt="appIcon" style={{ maxWidth: '40px' }} />
                </span>
                <span className="fs-4 fw-semibold">
                Comprehensive Digital Services
              </span>
              </div>
              <p className="pe-md-5 mt-2" style={{ color: '#929292' }}>
                Build tools that seamlessly integrate into your daily workflow
                that streamline processes and boost efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
