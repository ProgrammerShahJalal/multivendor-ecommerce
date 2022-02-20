import React from 'react';

const BannerGadget = () => {
    return (
        <div className='container mx-auto py-4'>
            <div className='container mx-auto py-3'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                    <div className='relative'>
                        <img src='https://e-commerce.myproyash.com/wp-content/uploads/2021/05/electro-banner10.jpg' className="w-full" alt='' />
                        <div className='absolute inset-y-8 left-5 w-72 py-2'>
                            <h3 className='text-blue-500 font-medium'>NEW TECHNOLOGIES</h3>
                            <h1 className="text-4xl text-black font-bold hover:text-pink-600 py-3">WEBCAMS 2022</h1>
                            <p className='text-gray-600 font-medium hover:text-pink-800 p-2'>Auctor litora ultrices suscipit malesuada nunc a netus</p>
                            <button className='bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-pink-500 font-bold'>SHOPE MORE</button>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='https://e-commerce.myproyash.com/wp-content/uploads/2021/05/electro-banner11.jpg' className="w-full" alt='' />
                        <div className='absolute inset-y-8 left-5 w-72 py-1'>
                            <h3 className='text-blue-200 font-medium'>APPLE ACCESSORIES</h3>
                            <h1 className="text-4xl text-white font-bold hover:text-black py-3">LEATHER CASES</h1>
                            <p className='text-blue-200 font-medium hover:text-gray-800 p-2'>Condimentum curabitur vestibulum dapibus porttitor adipiscing</p>
                            <button className='bg-white text-black px-3 py-2 rounded-full hover:bg-pink-500 font-bold'>SHOPE MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerGadget;