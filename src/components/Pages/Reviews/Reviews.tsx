import React, { useState, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Rating } from "@mui/material";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

interface ReviewState {
    reviews: {
        img: string
        name: string
        description: string
        ratings: string
    }[],
}

const Reviews = () => {
    const [reviews, setReviews] = useState<ReviewState["reviews"]>([]);

    useLayoutEffect(() => {
        function updateScreen(time) {
            // Make visual updates here.
            if (reviews.length === 0) {
                fetch('https://unitymart-server.onrender.com/reviews')
                    .then(res => res.json())
                    .then(data => { setReviews(data); }
                    )
            }
        }

        requestAnimationFrame(updateScreen);
    }, [reviews])

    return (
        <div className='my-7'>
            <div className='container mx-auto rounded-md py-7 bg-gradient-to-r from-blue-900 to-black'>

                <Swiper
                    spaceBetween={30}
                    effect={"coverflow"}
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
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,

                        },
                        768: {
                            slidesPerView: 2,
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
                >
                    {
                        reviews.map((review) => (
                            <SwiperSlide key={review.name}>
                                <div className='p-7 bg-indigo-100 justify-center text-center rounded-md'>
                                    <div>
                                        <img src={review.img} className="inline-block h-12 w-12 rounded-full ring-2 ring-green" alt="" />
                                    </div>
                                    <div>
                                        <h2>{review.name}</h2>
                                    </div>
                                    <div className='my-4'><p className='text-sm'>{review.description}</p> </div>
                                    <div className="flex justify-center gap-4">
                                        <p>{review.ratings} </p>
                                        <Rating name="half-rating-read" defaultValue={Number(review.ratings)} precision={0.5} readOnly />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className="text-center">
                    <Link to='/addReview'>
                        <button type="button" className="text-white bg-blue-800	hover:bg-blue-700 my-3 px-4 py-2 rounded-md">Give Your Review
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default Reviews;