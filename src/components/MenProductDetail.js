import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link, useParams } from 'react-router-dom';
import { Rating } from "@mui/material";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
const ProductView = () => {
  let { id } = useParams();

  const [productDetail, setProductDetail] = useState([])
  useEffect(() => {
    fetch('https://unitymart-server.onrender.com/mens')
      .then(res => res.json())
      .then((data) => {
        const foundData = data.filter(detail => detail._id === id)
        console.log(foundData);
        setProductDetail(foundData);
      })
  }, [id])

  const { title, hoverImg, img, img3, img4, price, salePrice, vendorName, rating } = productDetail[0] || {};
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
  return (
    <>
      <div style={{ backgroundColor: 'white', width: '800px', height: '600px' }} className='mx-auto container place-content-center px-12 py-8 justify-center items-center grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 sm:flex-1'>
        <div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            // navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img alt="" src={img} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={hoverImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img4} />
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

            <SwiperSlide>
              <img alt="" src={img} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={hoverImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img4} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <h2 className='text-3xl mb-2 font-medium'>{title}</h2>
          <div className='flex items-center mb-4'>
            <div>
              <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </div>
            <div className="text-xs text-gray-500 ml-3">
              (1 Reviews)
            </div>
          </div>
          <div className='space-y-2'>
            <p className="p text-gray-800 dark:text-white font-semibold space-x-2">
              <span>Availability:</span>
              <span className='text-green-600'>In stock</span>
            </p>
            <p className="space-x-2">
              <span className='text-gray-800 dark:text-white font-semibold'>Vendor:</span>
              <span className='text-gray-600'>{vendorName}</span>
            </p>
            <p className="space-x-2">
              <span className='text-gray-800 dark:text-white font-semibold'>Category:</span>
              <span className='text-gray-600'>Men</span>
            </p>
            <p className="space-x-2">
              <span className='text-gray-800 dark:text-white font-semibold'>SKU:</span>
              {/* <span className='text-gray-600 uppercase'>{_id.slice(4,12)}</span> */}
            </p>
          </div>

          <div className="flex items-baseline mb-1 mt-2 space-x-2">
            <p className="text-xl text-indigo-500 font-semibold">{salePrice}</p>
            <p className="text-sm text-gray-400 line-through">{price}</p>
          </div>
          <div className="">
            <h3 className="text-xl text-gray-800 dark:text-white mb-3 uppercase font-medium ">Color</h3>
            <div className="flex gap-2">
              {/* Single Color Starts */}
              <div className="color-selctor">
                <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "red" }}></label>
              </div>
              <div className="color-selctor">
                <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "green" }}></label>
              </div>
              <div className="color-selctor">
                <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "blue" }}></label>
              </div>
            </div>
          </div>
          <div className="pt-4 block">
            <h3 className="text-xl text-gray-800 dark:text-white mb-3 uppercase font-medium">Size</h3>
            <div className="flex item-center gap-2">
              {/* single size selector starts */}
              <div className="size-selector">
                <input type="radio" name='size' className='hidden' id='xs' />
                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                  S
                </label>
              </div>
              <div className="size-selector">
                <input type="radio" name='size' className='hidden' id='xs' />
                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                  M
                </label>
              </div>
              <div className="size-selector">
                <input type="radio" name='size' className='hidden' id='xs' />
                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                  L
                </label>
              </div>
              <div className="size-selector">
                <input type="radio" name='size' className='hidden' id='xs' />
                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                  XS
                </label>
              </div>
            </div>
          </div>
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
          <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <Link to="/">
              <button className='text-center top-5 text-white  p-2 bg-indigo-500 border border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition'>
                <i className="fa-regular fa-bag-shopping"></i> Add to cart
              </button>
            </Link>
            <Link to="/">
              <button className='text-center top-5 hover:text-white  p-2 hover:bg-indigo-500 border border-indigo-500 bg-transparent text-indigo-500 transition'>
                <i className="fa-regular fa-heart"></i> Add to Wishlist
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h2 className="text-center font-bold text-xl">Related Products</h2>
      <RelatedProducts />
    </>

  );
};

export default ProductView;