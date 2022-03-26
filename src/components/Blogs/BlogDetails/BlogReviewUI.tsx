import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Rating } from "@mui/material";
import "swiper/css/pagination";
import { EffectCards, Pagination } from 'swiper';

interface ReviewState {
    reviews: {
        img: string
        name: string
        title: string
        description: string
        ratings: string
    }[],
}

const BlogReviewUI = () => {
    const [reviews, setReviews] = useState<ReviewState["reviews"]>([]);

    useEffect(() => {
        if (reviews.length === 0) {
            fetch('https://morning-inlet-49130.herokuapp.com/blogReviews')
                .then(res => res.json())
                .then(data => { setReviews(data); }
                )
        }
    }, [reviews])


    return (
        <div className='my-7'>
            <div className='container mx-auto rounded-md py-7 lg:w-72 md:w-60 sm:w-32'>

                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    modules={[EffectCards, Pagination]}
                >
                    {
                        reviews.map((review) => (
                            <SwiperSlide key={review.name}>
                                <div className='p-7 bg-indigo-100 justify-center text-center rounded-md lg:h-64 md:h-60 sm:h-32'>
                                    <div>
                                        Review on <h1 className='text-sm font-semibold'>{review.title}</h1>
                                    </div>
                                    <div>
                                        <h2 className='text-sm'>{review.name}</h2>
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
            </div>
        </div>
    );

};

export default BlogReviewUI;