import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// import './Banners.css';


// import required modules
import { Autoplay, Pagination, FreeMode, Navigation } from "swiper";

export default function Banners() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, FreeMode, Pagination, Navigation]}
            >
                <div className="mx-auto">
                    <SwiperSlide>
                        <div className="relative">
                            <img className="w-full" src="https://template.annimexweb.com/diva/assets/images/slideshow-banners/diva-banner2.jpg" />
                            <div className='absolute inset-0 bg-black bg-opacity-40 items-center py-7 justify-center'>

                                <h1 className='text-white text-4xl p-2 items-center justify-center transition'>Unity Mart</h1>
                                <h2 className='text-white text-5xl p-2 items-center justify-center transition'>Happy Coustomer</h2>

                                <button className='text-white btn text-2xl  py-2 px-3 rounded items-center bg-gray-600 justify-center hover:bg-gray-200 hover:text-black transition'>Buy Now</button>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img className="w-full" src="https://template.annimexweb.com/diva/assets/images/slideshow-banners/diva-banner1.jpg" />
                            <div className='absolute inset-0 bg-black bg-opacity-50 items-center py-7 justify-center'>

                                <h1 className='text-white text-4xl p-2 items-center justify-center transition'>Unity Mart</h1>
                                <h2 className='text-white text-5xl p-2 items-center justify-center transition'>Happy Coustomer</h2>

                                <button className='text-white btn text-2xl  py-2 px-3 rounded items-center bg-gray-600 justify-center hover:bg-gray-200 hover:text-black transition'>Buy Now</button>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img className="w-full" src="https://template.annimexweb.com/diva/assets/images/slideshow-banners/home3-banner1.jpg" />
                            <div className='absolute inset-0 bg-black bg-opacity-50 items-center py-7 justify-center'>

                                <h1 className='text-white text-4xl p-2 items-center justify-center transition'>Unity Mart</h1>
                                <h2 className='text-white text-5xl p-2 items-center justify-center transition'>Happy Coustomer</h2>

                                <button className='text-white btn text-2xl py-2 px-3 rounded items-center bg-gray-600 justify-center hover:bg-gray-200 hover:text-black transition'>Buy Now</button>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img className="w-full" src="https://template.annimexweb.com/diva/assets/images/slideshow-banners/home4-banner1.jpg" />
                            <div className='absolute inset-0 bg-black bg-opacity-50 items-center py-7 justify-center'>

                                <h1 className='text-white text-4xl p-2 items-center justify-center transition'>Unity Mart</h1>
                                <h2 className='text-white text-5xl p-2 items-center justify-center transition'>Happy Coustomer</h2>

                                <button className='text-white btn text-2xl  py-2 px-3 rounded items-center bg-gray-600 justify-center hover:bg-gray-200 hover:text-black transition'>Buy Now</button>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img className="w-full" src=" https://template.annimexweb.com/diva/assets/images/slideshow-banners/home4-banner2.jpg" />
                            <div className='absolute inset-0 bg-black bg-opacity-50 items-center py-7 justify-center'>

                                <h1 className='text-white text-4xl p-2 items-center justify-center transition'>Unity Mart</h1>
                                <h2 className='text-white text-5xl p-2 items-center justify-center transition'>Happy Coustomer</h2>

                                <button className='text-white btn text-2xl py-2 px-3 rounded items-center bg-gray-600 justify-center hover:bg-gray-200 hover:text-black transition'>Buy Now</button>

                            </div>
                        </div>
                    </SwiperSlide>

                </div>
            </Swiper>
        </>
    );
}
