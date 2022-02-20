import React, { useState, useEffect } from 'react';
import { Rating } from "@mui/material";
import './WomensCollection.css';
interface ProductState {
    products: {
        title: string
        img: string
        hoverImg:string
        size: string
        vendorName: string
        rating: number
        price: number
        salePrice: number
    }[]
}

const WomensCollection = () => {
    const [products, setProducts] = useState<ProductState["products"]>
        ([]);

    useEffect(() => {
        if (products) {

            fetch('https://morning-inlet-49130.herokuapp.com/womens')
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [products])

return (
    <div className="container px-10 pb-16  items-center justify-center">
    <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 gap-6">
        {
            products.map((product) => (
                <div className="bg-white shadow-inner single-card overflow-hidden group">
                <div className="relative">
                <div style={{height:'260px'}} className='z-100 overflow-hidden'>
                                <img src={product.hoverImg} className='w-full img z-0 transition object-cover' alt="" />
                                <img src={product.img} className='w-full hoverImg transition object-cover' alt="" />
                                </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                        <i className="fa-regular fa-magnifying-glass"></i>
                        </a>
                        <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                        <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                   
                </div>
                <div style={{height:'200px'}} className="pt-4 gb-3 px-4">
                        <a href="/">
                            <h4 className="font-medium text-xl mb-2 text-grey-800 hover:text-red-600 transition">{product.title}</h4>
                            <h5 className="font-bold text-sm mb-2 text-grey-800 hover:text-red-600 transition">from {product.vendorName}</h5>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-red-600 font-semibold">{product.salePrice}</p>
                            <p className="text-sm text-gray-400 line-through">{product.price}</p>
                        </div>
                        <div className="flex items-center">
                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <button className='block w-full py-1 text-center top-5 text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600 transition'>Add to Cart</button>
            </div>
        ))}
            </div>
        </div>
    );
};

export default WomensCollection;