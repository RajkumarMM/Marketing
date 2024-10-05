import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
//coustom css for slider
import './ImageSlider.css';
// Import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import GravityImage1 from '../assets/image-slider-images/GravBrand1.png';
import GravityImage2 from '../assets/image-slider-images/GravBrand2.png';
import GravityImage3 from '../assets/image-slider-images/GravBrand3.png';
import GravityImage4 from '../assets/image-slider-images/GravBrand4.png';
import GravityImage5 from '../assets/image-slider-images/GravBrand5.png';

function ImageSlider() {
  return (
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true} // Enable infinite loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000, // Auto-slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        pagination={{
          clickable: true, // Make pagination dots clickable
        }}
        navigation={true} // Enable navigation buttons
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Import necessary modules
        className="mb-5"
      >
        {/* Add your slides here */}
        <SwiperSlide>
        <img src={GravityImage3} alt="gravityBrandingImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GravityImage2} alt="gravityBrandingImage" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={GravityImage5} alt="gravityBrandingImage" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={GravityImage4} alt="gravityBrandingImage" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={GravityImage1} alt="gravityBrandingImage" />
        </SwiperSlide>
        <div className="slide-text mt-1">
            <h5>Gravity Screens</h5>
            <p>Branding</p>
          </div>
      </Swiper>
  );
}

export default ImageSlider;
