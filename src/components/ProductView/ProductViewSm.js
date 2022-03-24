import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
const ProductViewSm = ({ selectedProduct }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [counter, setCounter] = useState(1);
    
    const decrement = () => {
        if (counter === 1) {
            setCounter(counter)
        }
        else (
            setCounter(counter - 1)
        )
    }
    const detailProduct = {
        _id: selectedProduct._id,
        title: selectedProduct.title,
        image: selectedProduct.images[0]?.src,
        category: selectedProduct.categories[0].label,
        price: parseInt(selectedProduct.sale_price ? selectedProduct.sale_price : selectedProduct.reg_price),
        attributes: [],
        cartQuantity: counter,
        vendor: {
            email: selectedProduct?.publisherDetails?.publisher || null
        }
    }
    const dispatch = useDispatch()

    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
        // navigate('/cart')
    }
    return (
        <div style={{ backgroundColor: 'white' }} className='w-full py-12 container place-content-center -mt-36 px-8 justify-center items-center grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
            <div>
                <Swiper
                    style={{

                    }}
                    spaceBetween={10}
                    // navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    // className="mySwiper2"
                >
                    <SwiperSlide>
                        <div className='mx-auto my-auto d-flex items-center justify-center' style={{height:'200px',width:'200px'}}>
                        <img className='w-full h-full object-contain' alt="" src={selectedProduct.images[0]?.src} />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='mx-auto my-auto d-flex items-center justify-center' style={{height:'200px',width:'200px'}}>
                        <img className='w-full h-full object-contain' alt="" src={selectedProduct.images[1]?.src} />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className='mx-auto d-flex items-center justify-center' style={{height:'200px',width:'200px'}}>
                        <img className='w-full h-full object-contain' alt="" src={selectedProduct.images[2]?.src} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='mx-auto my-auto d-flex items-center justify-center' style={{height:'200px',width:'200px'}}>
                        <img className='w-full h-full object-contain' alt="" src={selectedProduct.images[3]?.src} />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className='w-16 h-16'>
                        <img alt="" src={selectedProduct.images[0]?.src} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='w-16 h-16'>
                    <img alt="" src={selectedProduct.images[1]?.src} />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='w-16 h-16'>
                    <img alt="" src={selectedProduct.images[2]?.src} />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='w-16 h-16'>
                    <img alt="" src={selectedProduct.images[3]?.src} />
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div>
                <h2 className='text-3xl mb-2 font-medium'>Nike sports shoe</h2>
                <div className='flex items-center mb-4'>
                    <div>
                        <Rating name="half-rating-read" defaultValue={6} precision={0.5} readOnly />
                    </div>
                    <div className="text-xs text-gray-500 ml-3">
                        ({selectedProduct.rating} Reviews)
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className="p text-gray-800 dark:text-white font-semibold space-x-2">
                        <span>Availability:</span>
                        <span className='text-green-600'>In stock</span>
                    </p>
                    <p className="space-x-2">
                        <span className='text-gray-800 dark:text-white font-semibold'>Brand:</span>
                        <span className='text-gray-600'>{selectedProduct.brand}</span>
                    </p>
                    <p className="space-x-2">
                        <span className='text-gray-800 dark:text-white font-semibold'>Category:</span>
                        <span className='text-gray-600'>{selectedProduct.categories[0].label}</span>
                    </p>
                    <p className="space-x-2">
                        <span className='text-gray-800 dark:text-white font-semibold'>SKU:</span>
                        <span className='text-gray-600 uppercase'>{selectedProduct._id.slice(15, 25)}</span>
                    </p>
                </div>

                <div className="flex items-baseline mb-1 mt-2 space-x-2">
                    <p className="text-xl text-indigo-500 font-semibold">${selectedProduct.sale_price}</p>
                    <p className="text-sm text-gray-400 line-through">${selectedProduct.reg_price}</p>
                </div>
                <div className="grid grid-cols-2">
                <div>
                            <h3 className='text-xl text-gray-800 dark:text-white mb-1'>Quantity</h3>
                            <div className="flex border border-gray-500 divide-gray-500 text-gray-600 divide-x w-max">
                                <button onClick={decrement} className='h-8 w-8 flex items-center justify-center cursor-pointer select-none'>
                                    -
                                </button>
                                <div className='h-8 w-8 flex items-center justify-center'>
                                    {counter}
                                </div>
                                <button onClick={() => setCounter(counter + 1)} className='h-8 w-8 flex items-center justify-center cursor-pointer select-none'>
                                    +
                                </button>
                            </div>
                        </div>
                    <div className="border-b -mt-20 border-gray-200 pb-5">
                            <button onClick={() => handleAddToCart(detailProduct)} className='w-40 text-center top-5 text-white  p-2 bg-indigo-500 border border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition'>
                                <i className="fa-regular fa-bag-shopping"></i> Add to cart
                            </button>
                            <button className='w-40 text-center top-5 hover:text-white my-2 p-2 hover:bg-indigo-500 border border-indigo-500 bg-transparent text-indigo-500 transition'>
                                <i className="fa-regular fa-heart"> </i> Add to wishlist
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductViewSm;