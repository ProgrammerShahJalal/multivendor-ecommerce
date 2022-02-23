import React from 'react';
const BannerMax = () => {
    
    return (
        <div className='container mx-auto py-4'>

            {/*Another -1 */}

            <div className='my-20'>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 overflow-hidden'>
                    <div className="relative hover:scale-110 duration-700">
                        <img src="https://i.ibb.co/qRCgxC6/electro-banner1-2.jpg" className='w-full h-full ' alt="" />
                        <div className='absolute inset-y-12 left-5 font-bold py-7'>
                            <h1 className="text-4xl text-white hover:text-red-400 py-3">Monster Beats Headphones</h1>
                            <button className='bg-white px-3 py-2 rounded-full font-bold'>READ MORE</button>
                        </div>
                    </div>

                    <div className='bg-cover h-full'>
                        <div className="relative">
                            <div className="overflow-hidden">
                            <img src="https://i.ibb.co/Bw7CQR7/workplace.jpg" className='w-full h-full overflow-hidden transition hover:scale-110 duration-700' alt="" />
                            </div>
                            <div className='absolute inset-y-7 left-5  font-bold py-7'>
                                <h1 className="text-3xl text-white  hover:text-pink-600 py-3">Monster Beats</h1>
                                <h1 className="text-3xl text-white  hover:text-pink-600 py-3">Headphones</h1>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden">
                            <img src="https://i.ibb.co/jRpx9GK/happy-beautiful.jpg" className='w-full h-full transition hover:scale-110 duration-700 overflow-hidden' alt="" />
                            </div>

                            <div className='absolute inset-y-12 left-5  font-bold py-7'>
                                <h1 className="text-3xl text-white  hover:text-blue-600 py-3">Monster Beats</h1>
                                <h1 className="text-3xl text-white  hover:text-blue-600 py-3">Headphones</h1>
                            </div>
                        </div>
                    </div>

                    
                    <div className="relative overflow-hidden group">
                        <div className='group-hover:scale-110 duration-500 group-hover:translate-x-4 group-hover:skew-y-6'>
                        <img src="https://i.ibb.co/z23srdb/electro-banner.jpg" className='w-full h-full' alt="" />
                        </div>

                        <div className='absolute inset-y-12 left-5  font-bold py-7'>
                            <h1 className="text-4xl text-white  hover:text-pink-600 py-3">Monster Beats Headphones</h1>
                            <button className='bg-white px-3 py-2 rounded-full font-bold'>WATCH DEMO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerMax;