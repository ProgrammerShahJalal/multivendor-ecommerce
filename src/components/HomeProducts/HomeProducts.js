import React from 'react';
import './HomeProducts.css'
const HomeProducts = () => {
    return (
        <div>
                 <div>
<div className="2xl:container 2xl:mx-auto">
            <div className="py-6 lg:px-20 md:px-6 px-4">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                    <div className='card-main'>
                        <div className="relative group">
                            <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full"></div>
                            <div>
                            <a href="/">
                            <img alt='' src='https://www.golfposer.com/media/catalog/product/n/i/nike-golf-shoes-air-max-270-white-x.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=473' className="image rounded-tl-lg rounded-tr-lg" />
                            <img alt='' src='https://www.golfposer.com/media/catalog/product/n/i/nike-air-max-270-golf-shoes-2021-02h_3mdebjnadyzbsems.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700' className="image-hover rounded-tl-lg rounded-tr-lg"/>
                            </a>
                            </div>
                            <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100 buttons">
                                <button className="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className="bg-transparent font-medium text-base leading-4 border-2 border-black py-3 w-full mt-2">Quick View</button>
                                
                            </div>
                            <div className="p-5 description">
          <h3><a href="/">Nike sports shoes</a></h3>
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


        </div>
    );
};

export default HomeProducts;