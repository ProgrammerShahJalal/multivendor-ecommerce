
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { FreeMode, Autoplay, EffectCoverflow, Pagination } from "swiper";

interface ReviewState {
    reviews: {
        name: string
        url: string
        note: string
    }[]
}

const Reviews = () => {
    const [reviews, setReviews] = useState<ReviewState["reviews"]>([
        {
            name: "Md. Shahjala",
            url: "https://template.annimexweb.com/diva/assets/images/about/about-us-team1.jpg",
            note: "I am ok",
        },
        {
            name: "Md Fathe Karim",
            url: "https://template.annimexweb.com/diva/assets/images/about/about-us-team2.jpg",
            note: "I am ok",
        },
        {
            name: "Junaidul Kader",
            url: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
            note: "I am ok",
        },
        {
            name: "Mutasim",
            url: "https://template.annimexweb.com/diva/assets/images/about/about-us-team2.jpg",
            note: "I am ok",
        },
        {
            name: "Shahara Banu",
            url: "https://template.annimexweb.com/diva/assets/images/about/about-us-team3.jpg",
            note: "I am ok",
        },
        {
            name: "Karima Aktari",
            url: "https://template.annimexweb.com/diva/assets/images/about/about-us-team3.jpg",
            note: "I am ok",
        },
    ]);

    return (
        <div>
            <div className='container mx-auto rounded-md py-7'>

                <Swiper
                    spaceBetween={30}
                    effect={"coverflow"}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Autoplay, Pagination]}
                // className="mySwiper"

                >
                    {
                        reviews.map((review) => (
                            <SwiperSlide key={review.name}>
                                <div className='p-7 bg-blue-300 justify-center'>
                                    <div>
                                        <img src={review.url} className="w-36 rounded-full p-7" alt="" />
                                    </div>
                                    <div>
                                        {review.name}
                                    </div>
                                    <div>{review.note} </div>
                                    <div className='flex justify-center gap-1 text-yellow-400 text-sm'>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <button type="button" className="text-white bg-pink-600 my-3 px-4 py-2 rounded-md hover:bg-purple-800">Give Your Review</button>

            </div>
        </div>
    );
};

export default Reviews;