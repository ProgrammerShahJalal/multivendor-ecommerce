import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const Brands = () => {
    return (
        <div className='px-10'>
            <h1 className='text-center text-3xl mb-4'>Our top sponsors</h1>
            <div className='lg:block md:block hidden'>
            <Swiper
        slidesPerView={5}
        freeMode={true}
        modules={[Autoplay]}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/Bs18fdf/adidas-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/QDGHqYF/rolex-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/BBbLntS/nike-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/56bSrc9/underarmour-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/B6g48Pz/apple-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/f8wzVkM/phero-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/d6JH723/daraz-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/ZN5Dw2P/microsoft-logo.png" />
        </SwiperSlide>
      </Swiper>
            </div>
            <div className='lg:hidden md:hidden block'>
            <Swiper
        slidesPerView={2}
        spaceBetween={0}
        modules={[Autoplay]}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/Bs18fdf/adidas-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/QDGHqYF/rolex-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/BBbLntS/nike-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/56bSrc9/underarmour-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/B6g48Pz/apple-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/f8wzVkM/phero-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/d6JH723/daraz-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:'70px',width:'240px',backgroundColor:'white',padding:'5px'}} alt="" src="https://i.ibb.co/ZN5Dw2P/microsoft-logo.png" />
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    );
};

export default Brands;