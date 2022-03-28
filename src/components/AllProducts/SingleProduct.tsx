import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { addToWishlist } from '../../redux/wishlistSlice';
import { ShareButton } from 'react-custom-share';
import Rating from '@mui/material/Rating';

const SingleProduct = () => {
    const { id } = useParams();
    const [productsDetails, setProductsDetails] = useState<any>([])
    const [quantity, setQuantity] = useState<string>("1")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [attributes, setAttributes] = useState<any>([]);
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);


    useLayoutEffect(() => {
        function updateScreen(time) {
            // Make visual updates here.
            setIsLoading(true)
            fetch(`https://young-springs-82149.herokuapp.com/products`)
                .then(res => res.json())
                .then((data) => {
                    console.log(data, 'data')
                    const product = data.filter(detail => detail._id === id)
                    setProductsDetails(product);
                }).finally(() => setIsLoading(false))
        }

        requestAnimationFrame(updateScreen);
    }, [id])

    useLayoutEffect(() => {
        function updateScreen(time) {
            // Make visual updates here.
            if (!productsDetails.length) {
                <h2>Loading</h2>
            }
        }
        requestAnimationFrame(updateScreen);
    }, [productsDetails.length])


    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        if (product.attributes.length > 0 && attributes.length === 0) {
            return alert('Please select any attributes')
        }
        dispatch(addToCart(product))

    }
    // console.log(attributes, 'attributes');





    const handleAttribute = (e) => {
        const name = e.target.name
        const value = e.target.value

        const findIndex = attributes?.findIndex(find => find.name === name)
        if (findIndex === -1) {
            setAttributes((prevState) => [...prevState, { name, value }])
        }
    }
    const shareFBButtonProps = {

        url: 'https://unitymart-c522a.web.app/',
        network: "Facebook",
        text: 'See what I just bought from Unity Mart',
        longtext:
            " "
    };
    // console.log(productsDetails.title)
    const shareLNButtonProps = {
        url: (window.location.href),
        network: "Linkedin",
        text: "Share unity mart to your facebook. Let your friends know about us",
        longtext:
            " "
    };
    const sharePNButtonProps = {
        url: (window.location.href),
        network: "Pinterest",
        text: "Share unity mart to your facebook. Let your friends know about us",
        longtext:
            " "
    };

    return (
        <div>

            <div className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-10 mx-auto">

                    <div className="lg:w-4/5 mx-auto lg:flex md:grid sm:grid grid-cols-1 md:grid-cols-2 ">
                        {isLoading ? "Loading" :
                            productsDetails.map(product => {
                                const detailProduct = {
                                    _id: product._id,
                                    title: product.title,
                                    image: product.images[0]?.src,
                                    category: product.categories[0].label,
                                    price: parseInt(product.sale_price ? product.sale_price : product.reg_price),
                                    attributes: attributes,
                                    cartQuantity: parseInt(quantity),
                                    vendor: {
                                        email: product?.publisherDetails?.publisher || null
                                    }
                                }
                                // console.log(product, 'single product');


                                return <>
                                    <div key={product._id} className='lg:w-1/2'>
                                        {
                                            product.images ? <Swiper

                                                loop={true}
                                                spaceBetween={10}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper2"
                                            >
                                                {product?.images.map(({ src }: { src: string }) => {
                                                    return <SwiperSlide className='w-full h-auto'>
                                                        <img className='w-full h-auto object-contain flex items-center justify-center' src={src} alt={product?.title} />
                                                    </SwiperSlide>

                                                })}
                                            </Swiper> : 'No img'
                                        }
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            loop={true}
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper mt-4"
                                        >
                                            {product?.images.map(({ src }: { src: string }) => {
                                                return <SwiperSlide style={{ height: '100px', width: '100px' }} >
                                                    <img className='w-full h-full object-contain' src={src} alt={product?.title} />
                                                </SwiperSlide>

                                            })}
                                        </Swiper>
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <div>
                                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Brand: <b>{product.brand}</b></h2>
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                                            <div className="grid grid-cols-2 justify-center items-center mb-4">
                                                <div className='grid grid-cols-2 justify-center items-center gap-4'>
                                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> <span className='text-sm'>14 Reviews</span>
                                                </div>

                                                <div className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200 gap-2'>
                                                    <ShareButton {...shareFBButtonProps}><i className="fa-brands fa-facebook-square text-xl text-blue-600"></i></ShareButton>
                                                    <ShareButton {...shareLNButtonProps}><i className="fa-brands fa-linkedin text-blue-600 text-xl"></i></ShareButton>
                                                    <ShareButton {...sharePNButtonProps}><i className="fa-brands fa-pinterest text-red-500 text-xl"></i></ShareButton>
                                                </div>
                                            </div>
                                            <p className="leading-relaxed"
                                                dangerouslySetInnerHTML={({ __html: product.product_des })}></p>

                                            <div className="flex py-4 space-x-4">

                                            </div>
                                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                                <div className="relative mr-4 mt-3">
                                                    <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                                                    <select onBlur={(e: any) => setQuantity(e.target.value)} className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                    </select>
                                                </div>

                                                {product.attributes.length > 0 ? product?.attributes.map((attr) => {
                                                    console.log(product.attributes.length, 'product.attributes.length');

                                                    return <div className=" mr-6 items-center">
                                                        <span className="mr-3"><b>{attr.label}</b></span><br />
                                                        <div className="relative">
                                                            <select onClick={(e) => handleAttribute(e)} name={attr.label} className="rounded appearance-none border border-gray-200 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10">
                                                                {attr?.selected.map(select => {
                                                                    return <option value={select.value}>{select.label}</option>
                                                                })}

                                                            </select>
                                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                                    <path d="M6 9l6 6 6-6"></path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                }) : ''}


                                            </div>
                                            <span className="title-font font-sm  text-gray-900">Category: <b>{product.categories[0].label}</b></span>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="inline-block align-bottom mr-5">
                                                    <span className="text-2xl leading-none align-baseline">$</span>
                                                    <span className="font-bold text-5xl leading-none align-baseline">{product.sale_price ? product.sale_price : product.reg_price} </span>
                                                    <span className="text-2xl leading-none align-baseline">.00</span>
                                                </div>
                                                <div className="inline-block align-bottom mr-5 mt-5 line-through">
                                                    <span className="text-2xl leading-none align-baseline">$</span>
                                                    <span className="font-bold text-2xl leading-none align-baseline">{product.sale_price ? product.reg_price : ''} </span>
                                                    <span className="text-2xl leading-none align-baseline">.00</span>
                                                </div>
                                                {/* <span className="title-font font-medium text-2xl text-gray-900">${product.price | 0}        <span className='line-through text-gray-500'>{product?.sale_price}</span>
                                                </span> */}
                                                <button onClick={() => handleAddToCart(detailProduct)} className="grid grid-cols-1 text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded items-center">Add to cart</button>

                                                <button onClick={() => dispatch((addToWishlist(detailProduct)))} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            })
                        }

                    </div>
                    {
                        productsDetails.map(product => {
                            return (
                                <div>
                                    <h2 className='text-lg font-bold'>Reviews of {product.title}</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                                        <div className='grid grid-cols-1'>
                                            <h2 className='text-4xl font-bold'>4.8 <span className='text-gray-400 text-2xl'>/5</span></h2>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                            <span>14 reviews</span>
                                        </div>
                                        <div className='grid grid-cols-1'>
                                            <div>
                                                <Rating name="read-only" value={5} readOnly /> <span>(13)</span>
                                            </div>
                                            <div>
                                                <Rating name="read-only" value={4} readOnly /> <span>(1)</span>
                                            </div>
                                            <div>
                                                <Rating name="read-only" value={3} readOnly /> <span>(0)</span>
                                            </div>
                                            <div>
                                                <Rating name="read-only" value={2} readOnly /> <span>(0)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            )
                        })
                    }

                </div>
                <div className='bg-slate-300 mb-10 mt-10 shadow'>
                    <h2 className='text-2xl text-center py-3'>Related Products</h2>
                </div>
                <RelatedProducts />
            </div >
        </div >



    )
};

export default SingleProduct;