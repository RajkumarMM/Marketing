import React from "react";
import PieIcon from '../assets/pieIcon.png';
import AppIcon from '../assets/appIcon.png';

function WhatWeDo() {
  return (
    <div className="text-light vh-100 d-flex justify-content-center align-items-center">
      <div className="container" id="whatwedo">
        <h6 className="fw-medium py-3" style={{ color: "#fa880c" }}>
          WHAT WE DO
        </h6>
        <p className="mb-4 fs-3 fw-bold">
          With a dedication to quality and a focus on results, we offer
          comprehensive services that empower your business to stand out in the
          competitive marketplace and achieve your digital goals.
        </p>
        <div className="row mb-4">
          <div className="col-md-6 d-flex mb-3">
            
            <div className="pe-5">
              <h4 className="fw-semibold">
              <span className="me-3">
              <img src={PieIcon} alt="pieIcon" />
            </span>
                Strategy That Drives Results</h4>
              <p className="pe-5" style={{color: '#929292'}}>
                See your social media investments pay off. We'll craft
                strategies that deliver real results and help you achieve your
                business goals.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            
            <div>
              <h4 className="font-weight-semibold">
              <span className="me-3">
              <img src={AppIcon} alt="appIcon" />
            </span>
                Comprehensive Digital Services
              </h4>
              <p className=" pe-5" style={{color: '#929292'}}>
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
