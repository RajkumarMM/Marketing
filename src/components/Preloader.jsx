import React from 'react';
import { BallTriangle } from 'react-loader-spinner'; // Import BallTriangle

function Preloader() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100' >
          <BallTriangle color="#fa880c" height={80} width={80} />
        </div>
  )
}

export default Preloader;
