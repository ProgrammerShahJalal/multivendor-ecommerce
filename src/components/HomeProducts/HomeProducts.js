import React from 'react';
import './HomeProducts.css'
const HomeProducts = () => {
    return (
        <div>
                 <div>
<div className="2xl:container 2xl:mx-auto">
            <div className="py-6 lg:px-20 md:px-6 px-4">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                    <div>
                        <div className="relative group card-main">
                            <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <div>
                            <a href="/">
                            <img alt='' src='https://i.ebayimg.com/images/g/qPoAAOSw1fZdYQ7w/s-l1600.jpg' className="image rounded-tl-lg rounded-tr-lg" />
                            <img alt='' src='https://image.made-in-china.com/202f0j00gMQYbsEBqzcU/New-Design-Loose-Jeans-Denim-Dresses-Women-Denim-Dress-Jeans-Dress-Women-with-High-Quality-Dress.jpg' className="image-hover rounded-tl-lg rounded-tr-lg"/>
                            </a>
                            </div>
                            <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>
                        <div className="p-5 description bg-white">
          <h3><a href="/">Mens T-Shirt</a></h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">XXL</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">L</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">M</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">S</a>
          </div>
        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>


        </div>
    );
};

export default HomeProducts;