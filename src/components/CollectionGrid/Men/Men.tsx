import React, { useState, useEffect } from 'react';
import { Rating } from "@mui/material";
import './Men.css';
interface ProductState {
    products: {
        title: string
        img: string
        hoverImg:string
        price: number
        salePrice: number
        size: string
        vendorName: string
        rating: number
    }[]
}

const Men = () => {
    const [products, setProducts] = useState<ProductState["products"]>
    ([]);

    useEffect(() => {
        if (products) {

            fetch('https://morning-inlet-49130.herokuapp.com/mens')
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [products])

return (
    <div className="container px-10 pb-16">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6">
        {
            products.map((product) => (
                <div className="bg-white shadow-inner overflow-hidden single-card group">
                <div className="relative">
                    <img style={{height:'250px'}}  src={product.hoverImg} className='w-full img' alt="" />
                    <img style={{height:'250px'}}  src={product.img} className='w-full hoverImg' alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                        <i className="fa-regular fa-magnifying-glass"></i>
                        </a>
                        <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                        <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                   
                </div>
                <div className="pt-4 gb-3 px-4">
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
                            <div className="text-xs text-gray-500 ml-3">(1)</div>
                        </div>
                    </div>
                    <button className='block w-full py-1 text-center top-5 text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600 transition'>Add to Cart</button>
            </div>
        ))}
            </div>
        </div>
    );
};

export default Men;