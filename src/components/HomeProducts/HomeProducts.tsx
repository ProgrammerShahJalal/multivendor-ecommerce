import React, { PureComponent } from 'react';
import './HomeProducts.css';
type Props = {}


export default class HomeProducts extends PureComponent<Props> {
  render() {
    return (
      <div>
    
          <div className=''>
    <div className="my-20 container mx-auto px-5">
      <div className="flex flex-row justify-between my-5">
        <h2 className="text-3xl text-center">Men's Collection</h2>
        <a href="/" className="flex flex-row text-lg hover:text-purple-700">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

      
      <div className="shadow-lg card-main rounded-lg">
        <a href="/">
          <img alt='' src='https://i.ebayimg.com/images/g/qPoAAOSw1fZdYQ7w/s-l1600.jpg' className="image rounded-tl-lg rounded-tr-lg" />
          <img alt='' src='https://image.made-in-china.com/202f0j00gMQYbsEBqzcU/New-Design-Loose-Jeans-Denim-Dresses-Women-Denim-Dress-Jeans-Dress-Women-with-High-Quality-Dress.jpg' className="image-hover rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
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

      <div className="shadow-lg card-main rounded-lg">
        <a href="/">
        <img alt='' src='https://i.ebayimg.com/images/g/qPoAAOSw1fZdYQ7w/s-l1600.jpg' className="image-hover rounded-tl-lg rounded-tr-lg" />
          <img alt='' src='https://image.made-in-china.com/202f0j00gMQYbsEBqzcU/New-Design-Loose-Jeans-Denim-Dresses-Women-Denim-Dress-Jeans-Dress-Women-with-High-Quality-Dress.jpg' className="image rounded-tl-lg rounded-tr-lg"/>
        </a>
        <div className="p-5">
          <h3><a href="/">Blue Denim Dress</a></h3>
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
    )
  }
}