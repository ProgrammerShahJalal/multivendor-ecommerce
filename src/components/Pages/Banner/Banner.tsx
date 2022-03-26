import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import BannerLottie1 from "../../Lottie/BannerLottie1";
import BannerLottie2 from "../../Lottie/BannerLottie2";
import { Link } from "react-router-dom";


SwiperCore.use([Autoplay])
export default function Banners() {

  return (
    <>
      <div className="w-full xs:h-96">
        <Swiper
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-2">
              <Link to="/contact">
                <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                  <h1 className="md:text-3xl lg:text-6xl text-black font-bold dark:text-white text-sm">
                    Earn money
                  </h1>
                  <p className="lg:w-80 md:w-64 sm:w-64 md:text-2xl py-5 text-black dark:text-white sm:text-sm">
                    Register as a affiliate user and earn unlimited from us.
                  </p>
                  <button className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white rounded-lg"> Contact Us</button>
                </div>
              </Link>
              <div className="items-end justify-end flex">
                <BannerLottie1 />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-2">
              <Link to="/shop">
                <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                  <h1 className="md:text-3xl lg:text-6xl text-black font-bold dark:text-white sm:text-sm">
                    Flash Sale
                  </h1>
                  <p className="lg:w-80 md:w-64 sm:w-64 md:text-2xl py-5 text-black dark:text-white sm:text-sm">
                    Special offers are on going. So buy now before offer ends
                  </p>
                  <button className="bg-gray-700 hover:bg-gray-800 rounded-lg transition-all px-6 py-2 mt-3 text-white">Shop</button>
                </div>
              </Link>
              <div className="items-center justify-center flex py-4">
                <img src='https://i.ibb.co/JvYkfgS/Untitled-2.png' alt="Image1" className="md:w-80 lg:w-11/12 sm:60 my-5" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-2">
              <Link to="/orderTrack">
                <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                  <h1 className="md:text-3xl lg:text-6xl text-black font-bold dark:text-white sm:text-sm">
                    Track Your Order
                  </h1>
                  <p className="lg:w-80 md:w-64 sm:w-64 md:text-2xl py-5 text-black dark:text-white sm:text-sm">
                    Now you can track your orders also you can see the estimate delivery time
                  </p>
                  <button className="bg-gray-700 hover:bg-gray-800 rounded-lg transition-all px-6 py-2 mt-3 text-white">Track</button>
                </div>
              </Link>
              <div className="items-end justify-end flex py-4">
                <BannerLottie2 />
              </div>
            </div>

          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}