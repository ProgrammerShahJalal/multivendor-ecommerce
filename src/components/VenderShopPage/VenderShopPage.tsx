import React from 'react';
import { Link } from 'react-router-dom';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorCard from './VendorCard';
import VendorTop from './VendorTop';


/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
        <div className="bg-gray-50">
            <VendorTop />
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <VendorSidebar />
                <VendorCard />
            </div>
            {/* banner end  */}
            {/* card start  */}
            <div className='min-h-screen lg:flex md:flex-1  '>
                {/* sidebar start */}
                <div className='bg-slate-200 py-14 md:h-2/4'>
                    <h2 className='uppercase font-bold text-lg text-left px-11 py-3'>Search</h2>
                    <input type="text" className=' bg-slate-100 text-slate-400 py-3 px-4 border border-slate-30 hover:border-indigo-300' placeholder='Search Products' />
                    <VendorSidebar />
                </div>
                {/* sidebar end  */}

                <div className='grid lg:grid-cols-3 gap-4 w-full px-10 py-20'>
                    {/* card 1 Start  */}
                    <div className='bg-white text-gray-700 shadow-lg rounded-md h-3/5 border overflow-hidden'>
                        <div>
                            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="clothes" />
                        </div>

                        <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                            <div className='flex items items-center gap-2'>
                                <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Stock ready</span>
                                <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Vendore Store</span>
                            </div>
                            <div>
                                <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>Best Clothes </h2>
                            </div>
                            <div className='text-left'>
                                <span className='text-xl  font-bold'>$ 300.00</span>
                                <div className='flex items-center gap-2 mt-1'>
                                    <span className='test-sm line-through opacity-50'>
                                        $ 500.00
                                    </span>
                                    <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                        save 20%
                                    </span>
                                </div>
                                <span className='flex items-center mt-1 text-amber-400'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <span className='text-sm ml-2 text-gray-500'>
                                        20k reviews
                                    </span>

                                </span>
                                <div className='mt-5 flex gap-2'>
                                    <Link to="/">
                                        <button className='flex-grow flex justify-center items-center bg-yellow-500 hover:bg-yellow-500 transition rounded-md px-3 py-2'>
                                            Add To Cart
                                        </button></Link>
                                    <Link to="/wishlist">
                                        <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                            <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                        </button></Link>

                                </div>


                            </div>
                        </div>

                    </div>
                    {/* card 1 end  */}
                    <div className=' shadow-lg rounded-md h-3/5 border '>
                        <div>
                            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="clothes" />
                        </div>

                        <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                            <div className='flex items items-center gap-2'>
                                <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Stock ready</span>
                                <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Vendore Store</span>
                            </div>
                            <div>
                                <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>Best Clothes </h2>
                            </div>
                            <div className='text-left'>
                                <span className='text-xl  font-bold'>$ 300.00</span>
                                <div className='flex items-center gap-2 mt-1'>
                                    <span className='test-sm line-through opacity-50'>
                                        $ 500.00
                                    </span>
                                    <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                        save 20%
                                    </span>
                                </div>
                                <span className='flex items-center mt-1 text-amber-400'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <span className='text-sm ml-2 text-gray-500'>
                                        20k reviews
                                    </span>

                                </span>
                                <div className='mt-5 flex gap-2'>

                                    <Link to="/">
                                        <button className='flex-grow flex justify-center items-center bg-yellow-500 hover:bg-yellow-500 transition rounded-md px-3 py-2'>
                                            Add To Cart
                                        </button></Link>
                                    <Link to="/wishlist">
                                        <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                            <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                        </button></Link>

                                </div>


                            </div>
                        </div>

                    </div>
                    <div className='bg-white text-gray-700 shadow-lg rounded-md h-3/5 border overflow-hidden'>
                        <div>
                            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="clothes" />
                        </div>

                        <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                            <div className='flex items items-center gap-2'>
                                <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Stock ready</span>
                                <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Vendore Store</span>
                            </div>
                            <div>
                                <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>Best Clothes </h2>
                            </div>
                            <div className='text-left'>
                                <span className='text-xl  font-bold'>$ 300.00</span>
                                <div className='flex items-center gap-2 mt-1'>
                                    <span className='test-sm line-through opacity-50'>
                                        $ 500.00
                                    </span>
                                    <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                        save 20%
                                    </span>
                                </div>
                                <span className='flex items-center mt-1 text-amber-400'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <span className='text-sm ml-2 text-gray-500'>
                                        20k reviews
                                    </span>

                                </span>
                                <div className='mt-5 flex gap-2'>
                                    <Link to="/">
                                        <button className='flex-grow flex justify-center items-center bg-yellow-500 hover:bg-yellow-500 transition rounded-md px-3 py-2'>
                                            Add To Cart
                                        </button></Link>
                                    <Link to="/wishlist">
                                        <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                            <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                        </button></Link>

                                </div>


                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
