import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import UseAuth from '../../hooks/UseAuth';
import  { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Magnifier from "react-magnifier";
import { SwiperSlide, Swiper } from 'swiper/react';


const DealDetails = () => {
    let { id } = useParams();
    const { user } = UseAuth();

    const [dealDetails, setDealDetails] = useState([])
    useEffect(() => {
        fetch('https://morning-inlet-49130.herokuapp.com/specials')
            .then(res => res.json())
            .then((data) => {
                const onlyDeal = data.filter(detail => detail._id === id)
                setDealDetails(onlyDeal);
            })
    }, [id])

    const { title, hoverImg, img, details, salePrice, processor, vendorName, category, display, RAM, brands, rating } = dealDetails[0] || {};

    const purchase = () => {
        const order = {
            cus_name: user?.displayName,
            cus_email: user?.email,
            product_name: title,
            product_profile: details,
            product_image: img,
            product_image2: hoverImg,
            total_amount: salePrice
        }
        fetch(`https://morning-inlet-49130.herokuapp.com/init`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data);
            })
    }

    return (
        <div className="bg-gray-50 py-5">
            <h2 className='text-xl font-bold text-center'>{title}</h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-3 sm:gap-0 justify-center items-center">
                <div>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#ff7b00",
                            "--swiper-navigation-size": "30px"
                        }}
                        loop
                        spaceBetween={10}
                        navigation={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <div className="w-80 mx-auto">
                                <Magnifier mgShape='circle' src={hoverImg} className='bg-cover select-none' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-80 mx-auto">
                                <Magnifier mgShape='circle' src={img} className='bg-cover select-none' />
                            </div>
                        </SwiperSlide>
                        <div className='lg:hidden md:hidden sm:block mx-auto px-8 w-80 sm:py-0'>
                            <p>Vendor Name: {vendorName}</p>
                            <p>Brands: {brands}</p>
                            <p>Category: {category}</p>
                            <p>Display: {display}</p>
                            <p>RAM: {RAM}</p>
                            <p>Comments: {details}</p>
                        </div>
                    </Swiper>
                </div>
                <div>
                    <table className="table-auto border border-separate border-purple-500">
                        <thead>
                            <tr>
                                <th className='border border-purple-400'>Properties</th>
                                <th className='border border-purple-400'>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-purple-400'>Vendor Name</td>
                                <td className='border border-purple-400'>{vendorName}</td>
                            </tr>
                            <tr>
                                <td className='border border-purple-400'>Category</td>
                                <td className='border border-purple-400'>{category}</td>
                            </tr>
                            <tr>
                                <td className='border border-purple-400'>Brands</td>
                                <td className='border border-purple-400'>{brands}</td>
                            </tr>
                            <tr>
                                <td className='border border-purple-400'>Processor</td>
                                <td className='border border-purple-400'>{processor}</td>
                            </tr>
                            <tr>
                                <td className='border border-purple-400'>Display</td>
                                <td className='border border-purple-400'>{display}</td>
                            </tr>
                            <tr>
                                <td className='border border-purple-400'>RAM</td>
                                <td className='border border-purple-400'>{RAM}</td>
                            </tr>
                            <tr>
                                <td className='border border-purple-400'>Rating</td>
                                <td className='border border-purple-400'>{rating}</td>
                            </tr>
                            <tr>
                                <td className='border border-purple-400'>Comment</td>
                                <td className='border border-purple-400'>{details}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='w-80 px-16 mx-auto'>
                <button onClick={purchase} className='bg-indigo-500 text-white rounded-2xl px-4 py-2 mt-2'>Buy Now</button>
            </div>
        </div>
    )
};

export default DealDetails;