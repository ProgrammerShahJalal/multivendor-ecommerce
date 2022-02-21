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
            delay: 3000,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}

          className="mySwiper">
          <SwiperSlide
            className="md:flex justify-between"
            style={{ height: "34rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-12 text-center md:text-left">
                <h1 className="text-4xl">
                  Monster Beats Headphone
                </h1>
                <p className="text-2xl">
                  Best accessories for you!
                </p>
                <p className="text-3xl">
                  $<span className="text-red-600">35</span>
                </p>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/shop"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Buy Now <i className="fa-light fa-cart-circle-plus"></i>
                </NavLink>
              </div>
              <div className="md:-mt-0 lg:-mt-0 -mt-12">
                <img src='https://i.ibb.co/V95BWTm/headphone.jpg' alt="Image1" className="md:block" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide
            className="md:flex justify-between"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-4xl">
                  Perfect fit for you
                </h1>
                <p className="text-2xl">
                  Nike sports shoes for all feet size. For you.
                </p>
                <p className="text-3xl">
                  $<span className="text-red-600">113</span>
                </p>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/shop"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Buy Now <i className="fa-light fa-cart-circle-plus"></i>
                </NavLink>
              </div>
              <div className="md:-mt-0 -mt-40">
                <img src='https://i.ibb.co/ZX9c3hS/nike.png' alt="Image1" className="md:block" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide
            className="md:flex justify-between"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-4xl">Sony Ps5 <span className="text-red-500">+</span> <span className="text-blue-500">(controller)</span></h1>
                <p className="text-2xl">
                  Sony playstation version 5 with controller
                </p>
                <p className="text-3xl">
                  $<span className="text-red-600">987</span>
                </p>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/shop"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Buy Now <i className="fa-light fa-cart-circle-plus"></i>
                </NavLink>
              </div>
              <div className="md:-mt-0 -mt-10">
                <img src='https://i.ibb.co/mynSZHf/ps5.jpg' alt="Image1" className="md:block" />
              </div>
            </div>

          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
