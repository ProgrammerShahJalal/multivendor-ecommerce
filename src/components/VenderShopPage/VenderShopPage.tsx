import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorTop from './VendorTop';


/* This example requires Tailwind CSS v2.0+ */
export default function VendorShopPage() {
    const [products, setProducts] = useState<any>([]);
    const [notFound, setNotFound] = useState('')

    useEffect(() => {
        if (products.length === 0) {
        fetch('https://guarded-ocean-73313.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
        }

    }, [products]);
    const handleOnChange = (event: any) => {
        const searchText = event.target.value.toLowerCase();
       
        const findProduct: any = products && products.length > 0 ? products?.filter(product => product?.title.toLowerCase().includes(searchText)) : null;
        
        if (findProduct.length > 0) {
            setProducts(findProduct);
            setNotFound('')
        }
        else if (findProduct.length === 0) {
            setNotFound('This Type Of product Is Not Available Now')
            
            fetch('https://guarded-ocean-73313.herokuapp.com/products')
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }


    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <VendorTop />

            <div className='min-h-screen lg:flex md:flex-1 '>
                {/* sidebar start */}
                <div className='bg-slate-200 pb-8 md:h-2/4'>

                    <VendorSidebar />
                </div>
                {/* sidebar end  */}

                <div>
                <div className='text center'>
                    <h2 className='uppercase font-bold text-lg text-left  py-3'>Search</h2>
                    <input onChange={handleOnChange} type="text" className=' bg-slate-100 text-slate-400 py-3   border border-slate-30 hover:border-indigo-300' placeholder='Search Products' />
                    
                </div>
                <div>

                    <div className="text-xl text-center font-md text-red-600">{notFound}</div>
                </div>
                
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 py-5 '>

                    {products?.length > 0 && products?.map((product: any) => (<div className=' shadow-lg rounded-md w-border '>

                        <div className='w-64 mx-auto px-8'>
                            <img className='w-48' src={product.images[0]?.src} alt="vendor products" />
                        </div>

                        <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                            <div className='flex items items-center gap-2'>
                                <span className=' py-1 rounded-full text-xs bg-gray-200'>Stock {product.stock}</span>
                                <span className=' py-1 rounded-full text-xs bg-gray-200'>Vendor Store</span>
                            </div>
                            <div>
                                <h2 className='text-left font-semibold text-base  overflow-hidden' title='Best Vendor Product Title'>{product.title} </h2>
                            </div>
                            <div className='text-left'>
                                <span className='text-base  font-bold'>{product.sale_price}</span>
                                <span className='test-sm line-through opacity-50 ml-2'>
                                    {product.reg_price}
                                </span>
                                
                                <br />
                                <span className=' mt-1 text-amber-400'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                 

                                </span>
                                <div className='mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4 justify-between items-center place-items-center'>

                                    <Link to="/cart">
                                        <button className=' bg-indigo-600 hover:bg-indigo-500 transition rounded-md px-3 py-2 text-white'>
                                            Add To Cart
                                        </button></Link>
                                    <Link to="/wishlist">
                                        <button className=' bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                            <i className="fa-regular fa-heart opacity-50 "></i> Wishlist
                                        </button></Link>

                                </div>


                            </div>
                        </div>


                    </div>
                    ))}




                </div>
                </div>

            </div>
        </div>
    );
};
