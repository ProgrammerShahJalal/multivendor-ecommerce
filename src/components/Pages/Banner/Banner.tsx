import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import nike from './../../../images/Brands/nike-banner.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import { NavLink } from "react-router-dom";

export default function Banners() {

    return (
        <>
        <div className="w-full">
          <Swiper
            pagination={{
              dynamicBullets: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide
              className="md:flex justify-between"
              style={{ height: "27rem" }}
            >
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-xl md:text-4xl">Nike sports shoes <span className="text-blue-500">(sizes available)</span></h1>
                <p className="text-2xl">
                  Nike sports shoes for all sizes.
                </p>
                <p className="text-3xl">
                  $<span className="text-red-600">120</span>
                </p>
                <NavLink
                  to="/blogs"
                  className="bg-green-400 hover:bg-green-500 transition-all rounded px-6 py-2 mt-3 text-white"
                >
                  Explore
                </NavLink>
              </div>
              <img src={nike} alt="Image1" className="hidden md:block h-full" />
            </SwiperSlide>
            <SwiperSlide
              className="md:flex justify-between"
              style={{ height: "27rem" }}
            >
              <img src='https://5.imimg.com/data5/NM/SX/EJ/SELLER-94403929/adidas-mens-sports-shoes-500x500.jpg' alt="Image1" className="hidden md:block h-full" />
              <div className="flex flex-col items-center md:items-end justify-center md:pr-15 lg:pr-32 p-10 text-center md:text-right">
                <h1 className="text-xl md:text-4xl">
                  Perfect fit for you <span className="text-blue-500">(sizes available)</span>
                </h1>
                <p className="text-2xl">
                  Adidas Jogging shoes for all feet size. For you.
                </p>
                <p className="text-3xl">
                  $<span className="text-red-600">113</span>
                </p>
                <NavLink
                  to="/blogs"
                  className="bg-green-400 hover:bg-green-500 transition-all rounded px-6 py-2 mt-3 text-white"
                >
                  Explore
                </NavLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
}
