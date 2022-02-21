import React from 'react';
import './BannerMax.css';
const BannerMax = () => {
    
    return (
        <div className='container mx-auto py-4'>
            <div className='bg-black grid md:grid-cols-2 sm:grid-cols-1  p-7 my-3 items-center justify-center'>
                <div className='text-white text-center font-bold'>
                    <h4 className="text-gray-400">GAMING COLLECTION</h4>
                    <h1 className="text-4xl hover:text-blue-300 py-2">Sony Playstation 4</h1>
                    <h1 className="text-4xl hover:text-blue-300 pb-3">Dualshok Controller</h1>
                    <button className='bg-blue-600 rounded-full py-2 px-4'>BUY NOW</button>
                    <button className=' bg-gray-500 mx-3 rounded px-3 py-1'>ReadMore</button>
                </div>
                <div className='mt-7'>
                    <img src='https://e-commerce.myproyash.com/wp-content/uploads/2021/05/dualshok.png' className='w-full -mb-20 pt-7' alt='' />
                </div>
            </div>

            {/*Another -1 */}

            <div className='my-20'>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 overflow-hidden'>
                    <div className="relative hover:scale-110 duration-700">
                        <img src="https://e-commerce.myproyash.com/wp-content/uploads/2021/05/electro-banner1-2.jpg" className='w-full h-full ' alt="" />
                        <div className='absolute inset-y-12 left-5 font-bold py-7'>
                            <h1 className="text-4xl text-white hover:text-red-400 py-3">Monster Beats Headphones</h1>
                            <button className='bg-white px-3 py-2 rounded-full font-bold'>READ MORE</button>
                        </div>
                    </div>

                    <div className='bg-cover h-full'>
                        <div className="relative">
                            <div className="overflow-hidden">
                            <img src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?w=740" className='w-full h-full overflow-hidden transition hover:scale-110 duration-700' alt="" />
                            </div>
                            <div className='absolute inset-y-7 left-5  font-bold py-7'>
                                <h1 className="text-3xl text-white  hover:text-pink-600 py-3">Monster Beats</h1>
                                <h1 className="text-3xl text-white  hover:text-pink-600 py-3">Headphones</h1>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden">
                            <img src="https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg?w=740" className='w-full h-full transition hover:scale-110 duration-700 overflow-hidden' alt="" />
                            </div>

                            <div className='absolute inset-y-12 left-5  font-bold py-7'>
                                <h1 className="text-3xl text-white  hover:text-blue-600 py-3">Monster Beats</h1>
                                <h1 className="text-3xl text-white  hover:text-blue-600 py-3">Headphones</h1>
                            </div>
                        </div>
                    </div>

                    
                    <div className="relative overflow-hidden group">
                        <div className='group-hover:scale-110 duration-500 group-hover:translate-x-4 group-hover:skew-y-6'>
                        <img src="https://e-commerce.myproyash.com/wp-content/uploads/2021/05/electro-banner.jpg" className='w-full h-full' alt="" />
                        </div>

                        <div className='absolute inset-y-12 left-5  font-bold py-7'>
                            <h1 className="text-4xl text-white  hover:text-pink-600 py-3">Monster Beats Headphones</h1>
                            <button className='bg-white px-3 py-2 rounded-full font-bold'>WATCH DEMO</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Another-2 */}

            <div className='container mx-auto py-3'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                    <div className='relative'>
                        <img src='https://e-commerce.myproyash.com/wp-content/uploads/2021/05/electro-banner10.jpg' className="w-full" alt='' />
                        <div className='absolute inset-y-8 left-5 w-72 py-2'>
                            <h3 className='text-blue-500 font-medium'>NEW TECHNOLOGIES</h3>
                            <h1 className="text-4xl text-black font-bold hover:text-pink-600 py-3">WEBCAMS 2021</h1>
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

export default BannerMax;