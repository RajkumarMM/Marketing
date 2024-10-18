import React from 'react';
import ImageSlider from './ImageSlider';

function HelpClient() {
  return (
    <div className='text-center text-light my-md-5 vh-100' style={{ backgroundColor: "#000000" }}>
      <div className='container'>
        <h6 className="fw-medium pt-md-4 pt-3" style={{ color: "#fa880c" }}>HOW WE'VE HELPED OUR CLIENTS SUCCEED</h6>
        <h3 className="fs-4 fw-bold mt-1 px-3">See how we've helped businesses like yours thrive. Discover the <br/> positive impact our work can have.</h3>
      </div>
      <div className="mt-md-4 mt-0">
        <ImageSlider />
      </div>
    </div>
  );
}

export default HelpClient;
