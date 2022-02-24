import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Brands = () => {
    return (
        <div className='py-10'>
            <h1 className='text-center text-3xl mb-4'>Our top sponsors</h1>
            <hr />
            <Swiper
        spaceBetween={3}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{height:'80px',width:'250px'}} alt="" src="https://i.ibb.co/Bs18fdf/adidas-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'80px',width:'250px'}} alt="" src="https://i.ibb.co/QDGHqYF/rolex-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'80px',width:'250px'}} alt="" src="https://i.ibb.co/BBbLntS/nike-logo.png" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img style={{height:'80px',width:'250px'}} alt="" src="https://i.ibb.co/56bSrc9/underarmour-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'80px',width:'250px'}} alt="" src="https://i.ibb.co/f8wzVkM/phero-logo.png" />
        </SwiperSlide>
        
      </Swiper>
      <hr />
        </div>
    );
};

export default Brands;