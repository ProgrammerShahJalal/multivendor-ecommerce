import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { NavLink } from "react-router-dom";


SwiperCore.use([Autoplay])
export default function Banners() {

  return (
    <>
      <div className="w-full xs:h-96">
        <Swiper
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}

          className="mySwiper">
          <SwiperSlide style={{height:'30rem'}}
            className="md:flex items-center justify-center">
                <img src='https://i.ibb.co/cvWKp44/New-Project.png' alt="Image1" />
          </SwiperSlide>
          <SwiperSlide style={{height:'30rem'}}
            className="md:flex items-center justify-center">
                <img src='https://i.ibb.co/c1FZSg3/mac-Book-Banner.png' alt="Image2" />
          </SwiperSlide>
          <SwiperSlide style={{height:'30rem'}}
            className="md:flex items-center justify-center">
                <img src='https://i.ibb.co/QdDNtBF/nike-Banner.png' alt="Image3" />
          </SwiperSlide>
          <SwiperSlide style={{height:'30rem'}}
            className="md:flex items-center justify-center">
                <img src='https://i.ibb.co/f135FKC/ps5-Banner.png' alt="Image4" />
          </SwiperSlide>
          <SwiperSlide style={{height:'30rem'}}
            className="md:flex items-center justify-center">
                <img src='https://i.ibb.co/C8YpBMD/rolex-Banner.png' alt="Image5" />
          </SwiperSlide>
          {/* <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-4xl text-black dark:text-white">
                  Apple macbook air 2022
                </h1>
                <p className="text-2xl text-black dark:text-white">
                  Smart like you
                </p>
                <div className="flex gap-2">
                <p className="line-through text-xl text-blue-500">
                  $<span className="text-blue-500">1999</span>
                </p>
                <p className="text-2xl text-black dark:text-white">
                  $<span className="text-red-600">1799</span>
                </p>
                </div>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/shop"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Buy Now <i className="fa-light fa-cart-circle-plus"></i>
                </NavLink>
              </div>
              <div className="md:-mt-0 -mt-20 items-end justify-end flex">
                <img src='https://i.ibb.co/X23hLSd/macbook-air.png' alt="Image1" className="md:block" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-3xl text-black dark:text-white">
                Rolex Datejust
                </h1>
                <p className="text-2xl text-black dark:text-white">
                  official rolex <span className="text-blue-600">X</span> unity mart discount
                </p>
                <div className="flex gap-2">
                <p className="line-through text-xl text-blue-500">
                  $<span className="text-blue-500">799</span>
                </p>
                <p className="text-2xl text-black dark:text-white">
                  $<span className="text-red-600">699</span>
                </p>
                </div>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/shop"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Buy Now <i className="fa-light fa-cart-circle-plus"></i>
                </NavLink>
              </div>
              <div className="md:-mt-0 -mt-20 items-end justify-end flex">
                <img src='https://i.ibb.co/BBfjnfk/rolex.webp' alt="Image1" className="md:block" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-4xl text-black dark:text-white">
                  Perfect fit for you
                </h1>
                <p className="text-2xl text-black dark:text-white">
                  Nike sports shoes for all feet size. For you.
                </p>
                <div className="flex gap-2">
                <p className="line-through text-xl text-blue-500">
                  $<span className="text-blue-500">120</span>
                </p>
                <p className="text-2xl text-black dark:text-white">
                  $<span className="text-red-600">113</span>
                </p>
                </div>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/shop"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Buy Now <i className="fa-light fa-cart-circle-plus"></i>
                </NavLink>
              </div>
              <div className="md:-mt-0 -mt-36 items-end justify-end flex">
                <img src='https://i.ibb.co/ZX9c3hS/nike.png' alt="Image1" className="md:block" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-4xl text-black dark:text-white">Sony Ps5 <span className="text-red-500">+</span> <span className="text-blue-500">(controller)</span></h1>
                <p className="text-2xl text-black dark:text-white">
                  Sony playstation version 5 with controller
                </p>
                <div className="flex gap-2">
                <p className="line-through text-xl text-blue-500">
                  $<span className="text-blue-500">999</span>
                </p>
                <p className="text-2xl text-black dark:text-white">
                  $<span className="text-red-600">985</span>
                </p>
                </div>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/shop"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Buy Now <i className="fa-light fa-cart-circle-plus"></i>
                </NavLink>
              </div>
              <div className="md:-mt-0 -mt-10 items-end justify-end flex">
                <img src='https://i.ibb.co/2d1cqfq/ps5.png' alt="Image1" className="md:block" />
              </div>
            </div>

          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
