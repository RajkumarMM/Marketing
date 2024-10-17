import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WeDoDifferent from './components/WeDoDifferent'
import SkyRocket from './components/SkyRocket';
import HelpClient from './components/HelpClient';
import Footer from './components/Footer'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css';

// Import the image
import bannerImage from './assets/Banner.png';

export default function App() {
  return (
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
          height: '100vh' 
        }} className='page-slide'>
          <Hero />
        </SwiperSlide>
        <SwiperSlide  className='page-slide'>
          <WhatWeDo />
        </SwiperSlide>
        <SwiperSlide  className='page-slide'>
          <WeDoDifferent />
        </SwiperSlide>
        <SwiperSlide  className='page-slide'>
          <SkyRocket />
        </SwiperSlide>
        <SwiperSlide  className='page-slide'>
          <HelpClient />
        </SwiperSlide>
        <SwiperSlide  className='page-slide'>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
