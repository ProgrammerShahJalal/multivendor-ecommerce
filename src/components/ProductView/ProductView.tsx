import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const ProductView = () => {

return (
    <div className='container px-12 py-8 justify-center items-center grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12'>
        <div>
            <img src="http://localhost:3000/static/media/nike-banner.f56df4a0485ca59af826.png" alt="" />
            <div className="grid grid-cols-5 gap-4 mt-4">
                <img className='w-full cursor-pointer border border-indigo-500' src="http://localhost:3000/static/media/nike-banner.f56df4a0485ca59af826.png" alt="" />
                <img className='w-full cursor-pointer' src="http://localhost:3000/static/media/nike-banner.f56df4a0485ca59af826.png" alt="" />
                <img className='w-full cursor-pointer' src="http://localhost:3000/static/media/nike-banner.f56df4a0485ca59af826.png" alt="" />
                <img className='w-full cursor-pointer' src="http://localhost:3000/static/media/nike-banner.f56df4a0485ca59af826.png" alt="" />
                <img className='w-full cursor-pointer' src="http://localhost:3000/static/media/nike-banner.f56df4a0485ca59af826.png" alt="" />
            </div>
        </div>
        
        <div>
            <h2 className='text-3xl mb-2 font-medium'>Nike sports shoe</h2>
            <div className='flex items-center mb-4'>
        <div>
        <Rating name="half-rating-read" defaultValue={6} precision={0.5} readOnly />
        </div>
        <div className="text-xs text-gray-500 ml-3">
            (1 Reviews)
        </div>
    </div>
    <div className='space-y-2'>
    <p className="p text-gray-800 font-semibold space-x-2">
        <span>Availability:</span>
        <span className='text-green-600'>In stock</span>
    </p>
    <p className="space-x-2">
        <span className='text-gray-800 font-semibold'>Brand:</span>
        <span className='text-gray-600'>Nike</span>
    </p>
    <p className="space-x-2">
        <span className='text-gray-800 font-semibold'>Category:</span>
        <span className='text-gray-600'>Men</span>
    </p>
    <p className="space-x-2">
        <span className='text-gray-800 font-semibold'>SKU:</span>
        <span className='text-gray-600 uppercase'>udhff45gr</span>
    </p>
    </div>
    
    <div className="flex items-baseline mb-1 mt-2 space-x-2">
                            <p className="text-xl text-indigo-500 font-semibold">$450</p>
                            <p className="text-sm text-gray-400 line-through">$500</p>
    </div>
                                    <div className="">
                                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">Color</h3>
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
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
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
                            <h3 className='text-xl text-gray-800 mb-1'>Quantity</h3>
                            <div className="flex border border-gray-500 divide-gray-500 text-gray-600 divide-x w-max">
                                <div className='h-8 w-8 flex items-center justify-center cursor-pointer select-none'>
                                    -
                                </div>
                                <div className='h-8 w-8 flex items-center justify-center'>
                                    <input style={{width:'34px',height:'34px'}} type="text" />
                                </div>
                                <div className='h-8 w-8 flex items-center justify-center cursor-pointer select-none'>
                                    +
                                </div>
                        </div>
                    </div>
                        <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                            <Link to = "/">
                            <button className='text-center top-5 text-white  p-2 bg-indigo-500 border border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition'>
                            <i className="fa-regular fa-bag-shopping"></i> Add to cart
                            </button>
                            </Link>
                            <Link to = "/">
                            <button className='text-center top-5 hover:text-white  p-2 hover:bg-indigo-500 border border-indigo-500 bg-transparent text-indigo-500 transition'>
                            <i className="fa-regular fa-heart"></i> Add to Wishlist
                            </button>
                            </Link>
                        </div>
                </div>
            </div>
    );
};

export default ProductView;