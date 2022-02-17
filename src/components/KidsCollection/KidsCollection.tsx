import React, { useState, useEffect } from 'react';
import { Rating } from "@mui/material";
import './KidsCollection.css';
interface ProductState {
    products: {
        title: string
        img: string
        size: string
        vendorName: string
        rating: number
    }[]
}

const KidsCollection = () => {
    const [products, setProducts] = useState<ProductState["products"]>
        ([]);

    useEffect(() => {
        if (products) {

            fetch('https://morning-inlet-49130.herokuapp.com/kids')
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [products])

return (
    <div>
    <div>
        <div className="2xl:container 2xl:mx-auto">
            <div className="py-6 lg:px-20 md:px-6 px-4">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
        {
            products.map((product) => (
                <div className='card-main'>
                        <div className="relative group">
                            <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full"></div>
                            <div>
                            <a href="/">
                            <img alt='' src={product.img} className="image rounded-tl-lg rounded-tr-lg" />
                            </a>
                            </div>
                            <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100 buttons">
                                <button className="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className="bg-transparent font-medium text-base leading-4 border-2 border-black py-3 w-full mt-2">Quick View</button>
                               
                            </div>
                            <div className="p-5 description">
          <h3><a href="/">{product.title}</a></h3>
          <h3>{product.vendorName}</h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
          <div className="flex flex-row my-3">
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">{product.size.slice(0,2)}</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">{product.size.slice(3,6)}</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">{product.size.slice(7,8)}</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">{product.size.slice(9,10)}</a>
            <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="/">{product.size.slice(11,12)}</a>
          </div>
          <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
        </div>
                        </div>
                       
                    </div>
        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsCollection;