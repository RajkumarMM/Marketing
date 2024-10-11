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
            <span className="me-2">
              <img src={PieIcon} alt="pieIcon" />
            </span>
            <div>
              <h4 className="fw-semibold">Strategy That Drives Results</h4>
              <p>
                See your social media investments pay off. We'll craft
                strategies that deliver real results and help you achieve your
                business goals.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <span className="me-2">
              <img src={AppIcon} alt="appIcon" />
            </span>
            <div>
              <h4 className="font-weight-semibold">
                Comprehensive Digital Services
              </h4>
              <p>
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
