import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// Custom CSS for slider
import './ImageSlider.css';
// Import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import GravityImage1 from '../assets/image-slider-images/GravBrand1.png';
import GravityImage2 from '../assets/image-slider-images/GravBrand2.png';
import GravityImage3 from '../assets/image-slider-images/GravBrand3.png';
import GravityImage5 from '../assets/image-slider-images/GravBrand5.png';

function ImageSlider() {
  return (
    <Swiper
      effect={'coverflow'}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true} // Enable infinite loop
      loopedSlides={5}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2000, // Auto-slide every 2 seconds
        disableOnInteraction: false, // Continue autoplay even after user interaction
      }}
      pagination={{
        clickable: true, // Make pagination dots clickable
      }}
      navigation={true} // Enable navigation buttons
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Import necessary modules
      className="image-slider"
      onSlideChangeTransitionEnd={(swiper) => {
        swiper.slides.forEach((slide) => {
          slide.classList.remove('image-slide-centered');
        });
        const centeredSlide = swiper.slides[swiper.activeIndex];
        centeredSlide.classList.add('image-slide-centered');
      }}
    >
      {/* Add your slides here */}
      <SwiperSlide className='image-slide'>
        <img src={GravityImage3} alt="Gravity Branding Image 1" />
      </SwiperSlide>
      <SwiperSlide className='image-slide'>
        <img src={GravityImage1} alt="Gravity Branding Image 2" />
      </SwiperSlide>
      <SwiperSlide className='image-slide'>
        <img src={GravityImage2} alt="Gravity Branding Image 3" />
      </SwiperSlide>
      <SwiperSlide className='image-slide'>
        <img src={GravityImage5} alt="Gravity Branding Image 4" />
      </SwiperSlide>
      <SwiperSlide className='image-slide'>
        <img src={GravityImage3} alt="Gravity Branding Image 5" />
      </SwiperSlide>
      <div className="slide-text mt-1">
        <h5>Gravity Screens</h5>
        <p>Branding</p>
      </div>
    </Swiper>
  );
}

export default ImageSlider;
