import React from 'react';
import { Link } from 'react-router-dom';

const BannerGadget = () => {
    return (
        <div className='container mx-auto py-4 my-3'>
            <div className='container mx-auto py-3'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                    <div className='relative'>
                        <img src='https://i.ibb.co/1qGvwJf/electro-banner10.jpg' className="w-full" alt='' />
                        <div className='absolute inset-y-8 left-5 w-72 py-2'>
                            <h3 className='text-blue-500 font-medium'>NEW TECHNOLOGIES</h3>
                            <h1 className="lg:text-4xl text-black font-bold hover:text-pink-600 py-3 sm:text-sm">WEBCAMS 2022</h1>
                            <p className='text-gray-600 font-medium hover:text-pink-800 p-2 lg:block md:block hidden'>The webcam is an essential computer accessories.</p>
                            <Link to="/shop">
                                <button className='bg-blue-600 text-white px-3 py-2 pb-1 rounded-full hover:bg-pink-500 font-bold lg:block hidden'>SHOP MORE</button>
                            </Link>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='https://i.ibb.co/Smx4Fc1/electro-banner11.jpg' className="w-full" alt='' />
                        <div className='absolute inset-y-8 left-5 w-72 py-1'>
                            <h3 className='text-blue-200 font-medium'>APPLE ACCESSORIES</h3>
                            <h1 className="lg:text-4xl text-white font-bold hover:text-black py-3 sm:text-sm">LEATHER CASES</h1>
                            <p className='text-blue-200 font-medium hover:text-gray-800 p-2 lg:block md:block hidden'>Black Unity Braided Solo Loop functionality.</p>
                            <Link to="/shop">
                                <button className='bg-white text-black px-3 py-2 pb-1 rounded-full hover:bg-pink-500 font-bold lg:block hidden'>SHOP MORE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerGadget;