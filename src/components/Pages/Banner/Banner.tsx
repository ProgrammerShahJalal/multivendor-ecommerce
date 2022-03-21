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
          {/* <SwiperSlide style={{height:'30rem'}}
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
          </SwiperSlide> */}
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-1 xs:grid-cols-1">
              <div className="md:-mt-0 -mt-20 items-end justify-end flex">
                <img src='https://i.ibb.co/y5PdPdP/Make-your-business-2.png' alt="Image1" className="md:block" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-6xl text-black font-bold dark:text-white">
                  Earn money
                </h1>
                <p className="text-2xl py-5 text-black dark:text-white">
                  Register as a affiliate user and earn unlimited from us.
                </p>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/register"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Register
                </NavLink>
              </div>
              <div className="md:-mt-0 -mt-20 items-end justify-end flex">
                <img width={700} src='https://i.ibb.co/D4sPxZR/20943954.jpg' alt="Image1" className="md:block w-50" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-6xl text-black font-bold dark:text-white">
                  Flash Sale
                </h1>
                <p className="text-2xl py-5 text-black dark:text-white">
                  Special offers are on going. So buy now before offer ends
                </p>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/shop"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Shop
                </NavLink>
              </div>
              <div className="md:-mt-0 -mt-20 items-end justify-end flex">
                <img src='https://i.ibb.co/JvYkfgS/Untitled-2.png' width={600} alt="Image1" className="md:block" />
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide
            className="md:flex items-center justify-center"
            style={{ height: "30rem" }}>
            <div className="grid md:grid-cols-2 xs:grid-cols-1">
              <div className="flex flex-col items-center md:items-start justify-center md:pl-15 lg:pl-32 p-10 text-center md:text-left">
                <h1 className="text-6xl text-black font-bold dark:text-white">
                  Track Your Order
                </h1>
                <p className="text-2xl py-5 text-black dark:text-white">
                  Now you can track your orders <br />also you can see the estimate delivery time
                </p>
                <NavLink
                  style={{ borderRadius: '35px' }}
                  to="/orderTrack"
                  className="bg-gray-700 hover:bg-gray-800 transition-all px-6 py-2 mt-3 text-white"
                >
                  Track
                </NavLink>
              </div>
              <div className="md:-mt-0 -mt-20 items-end justify-end flex">
                <img src='https://i.ibb.co/WcfqgZz/Online-Shoping-29-Converted.png' width={500} alt="Image1" className="md:block" />
              </div>
            </div>

          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}