import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorTop from './VendorTop';


/* This example requires Tailwind CSS v2.0+ */
export default function VendorShopPage() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        fetch('https://guarded-ocean-73313.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)})

    }, [])
    

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <VendorTop />

            
            
            <div className='min-h-screen lg:flex md:flex-1  '>
                {/* sidebar start */}
                <div className='bg-slate-200 pb-8 md:h-2/4'>

                    <VendorSidebar />
                </div>
                {/* sidebar end  */}

                <div className='grid lg:grid-cols-4 gap-10 w-full px-10 py-5 '>
                    {products?.map((product:any)=>(

                   

                        <div className=' shadow-lg rounded-md h-48 border '>
                        <div>
                            <img className='w-48' src={product.images[0]?.src} alt="vendor products" />
                        </div>

                        <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                            <div className='flex items items-center gap-2'>
                                <span className=' py-1 rounded-full text-xs bg-gray-100'>Stock {product.stock}</span>
                                <span className=' py-1 rounded-full text-xs bg-gray-100'>Vendor Store</span>
                            </div>
                            <div>
                                <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>{product.title} </h2>
                            </div>
                            <div className='text-left'>
                                <span className='text-xl  font-bold'>{product.sale_price}</span>
                                <div className='flex items-center gap-2 mt-1'>
                                    <span className='test-sm line-through opacity-50'>
                                    {product.reg_price}
                                    </span>
                                    <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                        save 20%
                                    </span>
                                </div>
                                <span className='flex items-center mt-1 text-amber-400'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <span className='text-sm ml-2 text-gray-500'>
                                        20k reviews
                                    </span>

                                </span>
                                <div className='mt-5 flex gap-2'>

                                    <Link to="/cart">
                                        <button className='flex-grow text-white flex justify-center items-center bg-indigo-600 hover:bg-indigo-500 transition rounded-md px-3 py-2'>
                                            Add To Cart
                                        </button></Link>
                                    <Link to="/wishlist">
                                        <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                            <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                        </button></Link>

                                </div>


                            </div>
                        </div>

                    </div>

                    ))}
                    

                </div>
            </div>
        </div>
    );
};
