import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WeDoDifferent from './components/WeDoDifferent';
import SkyRocket from './components/SkyRocket';
import HelpClient from './components/HelpClient';
import Footer from './components/Footer';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css';

// Import the image
import bannerImage from './assets/Banner.png';

export default function App() {
  const [isSliderVisible, setIsSliderVisible] = useState(true);
  const [showBackground, setShowBackground] = useState(false); // State for background visibility
  const minHeight = 600; // Set your desired minimum height in pixels

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < minHeight) {
        setIsSliderVisible(false);
        setShowBackground(true); // Hide background if height is insufficient
      } else {
        setIsSliderVisible(true);
        setShowBackground(false); // Show background if height is sufficient
      }
    };

    // Check initial height
    handleResize();
    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isSliderVisible ? (
        <div style={{ height: '100vh' }}>
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="page-slider"
        >
          <SwiperSlide style={{ 
            backgroundImage: `url(${bannerImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }} className='page-slide'>
            <Hero showBackground={showBackground} /> {/* Pass showBackground prop */}
          </SwiperSlide>
          <SwiperSlide className='page-slide'>
            <WhatWeDo />
          </SwiperSlide>
          <SwiperSlide className='page-slide'>
            <WeDoDifferent />
          </SwiperSlide>
          <SwiperSlide className='page-slide'>
            <SkyRocket />
          </SwiperSlide>
          <SwiperSlide className='page-slide'>
            <HelpClient />
          </SwiperSlide>
          <SwiperSlide className='page-slide'>
            <Footer />
          </SwiperSlide>
        </Swiper>
        </div>
      ) : (
        <>
          <Hero showBackground={showBackground} /> {/* Pass showBackground prop */}
          <WhatWeDo />
          <WeDoDifferent />
          <SkyRocket />
          <HelpClient />
          <Footer />
        </>
      )}
    </>
  );
}
