import React from 'react';
import ImageSlider from './ImageSlider';

function HelpClient() {
  return (
    <div className='text-center text-light my-5 vh-100' style={{ backgroundColor: "#000000" }}>
      <div className='container'>
        <h6 className="fw-medium pt-4" style={{ color: "#fa880c" }}>HOW WE'VE HELPED OUR CLIENTS SUCCEED</h6>
        <h3 className="fs-4 fw-bold mt-1 px-3">See how we've helped businesses like yours thrive. Discover the <br/> positive impact our work can have.</h3>
      </div>
      <div className="mt-4">
        <ImageSlider />
      </div>
    </div>
  );
}

export default HelpClient;
