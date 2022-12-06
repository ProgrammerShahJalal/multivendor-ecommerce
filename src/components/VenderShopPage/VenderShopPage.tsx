import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import { addToWishlist } from '../../redux/wishlistSlice';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorTop from './VendorTop';


/* This example requires Tailwind CSS v2.0+ */
export default function VendorShopPage() {
    const { storeSlug } = useParams()
    const dispatch = useDispatch()
    const [products, setProducts] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [notFound, setNotFound] = useState('')

    const { wishlist } = useSelector((state: any) => state.wishlist);

    // const userDetails = localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem('userDetails') || '{}') : { role: "", email: "" }

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://unitymart-admin.onrender.com/user/vendors/products/${storeSlug}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            }).finally(() => setIsLoading(false))

    }, [storeSlug]);

    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
        // navigate('/cart')
    }

    const handleOnChange = (event: any) => {
        const searchText = event.target.value.toLowerCase();

        const findProduct: any = products && products.length > 0 ? products?.filter(product => product?.title.toLowerCase().includes(searchText)) : null;

        if (findProduct.length > 0) {
            setProducts(findProduct);
            setNotFound('')
        }
        else if (findProduct.length === 0) {
            setNotFound('This Type Of product Is Not Available Now')
            fetch(`https://unitymart-admin.onrender.com/user/vendors/products/${storeSlug}`)
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }


    return (
        <div className=" dark:bg-gray-800 px-8">
            <VendorTop />

            <div className='min-h-screen lg:flex md:flex-1 gap-5'>
                {/* sidebar start */}
                {/* <div className='bg-slate-200 pb-8 md:h-2/4'>
            <div className='min-h-screen lg:flex md:flex-1 gap-5'>
                {/* sidebar start */}
                <div className='bg-slate-200 pb-8 md:h-2/4 w-1/5'>
                    <VendorSidebar />
                </div>
                {/* sidebar end  */}

                <div className='w-4/5'>
                    <div className='text center'>
                        <h2 className='uppercase font-bold text-lg text-left  py-3'>Search</h2>
                        <input onChange={handleOnChange} type="text" className=' bg-slate-100 text-slate-400 py-3   border border-slate-30 hover:border-indigo-300' placeholder='Search Products' />

                    </div>
                    <div>

                        <div className="text-xl text-center font-md text-red-600">{notFound}</div>
                    </div>

                    {isLoading ? <span className='flex justify-center'><CircularProgress color="inherit" /></span> : <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 py-5'>

                        {products?.length === 0 ? <h2>No Products Found</h2> : products?.map((product: any) => {
                            const detailProduct = {
                                _id: product._id,
                                title: product.title,
                                image: product.images[0]?.src,
                                category: product.categories[0].label,
                                price: parseInt(product.sale_price ? product.sale_price : product.reg_price),
                                attributes: [],
                                cartQuantity: 1,
                                vendor: {
                                    email: product?.publisherDetails?.publisher || null
                                }
                            }
                            console.log(detailProduct, 'detailProduct');


                            return <div className=' shadow-lg rounded-md w-border '>

                                <Link to={`/product/${product._id}`}><div className='w-60 mx-auto px-8 bg-white'>
                                    <img className='select-none w-full h-36 object-contain bg-white' src={product.images[0]?.src} alt="vendor products" />
                                </div></Link>

                                <div className='p-5 dark:text-white flex flex-col gap-3 w-60'>
                                    <div className='flex items items-center gap-2'>
                                        <span className=' py-1 rounded-full text-xs'>Stock {product.stock}</span>
                                        <span className=' py-1 rounded-full text-xs'>{product.publisherDetails.store}</span>
                                    </div>
                                    <Link to={`/product/${product._id}`}><div>
                                        <h2 className='text-left font-semibold text-base  overflow-hidden h-20 w-36' title='Best Vendor Product Title'>{product.title} </h2>
                                    </div></Link>
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
                                        {/* <div className='mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4 justify-between items-center place-items-center'> */}


                                        <div className='mt-5 grid grid-cols-1 gap-3 justify-between items-center place-items-center'>
                                            <button onClick={() => handleAddToCart(detailProduct)} className=' bg-indigo-600 hover:bg-indigo-500 transition rounded-md px-3 py-2 text-white'>
                                                Add To Cart
                                            </button>

                                            <button onClick={() => dispatch(addToWishlist(detailProduct))} className=' bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                                <i className="fa-regular fa-heart opacity-50 "></i> Wishlist
                                            </button>
                                        </div>

                                        {/* </div> */}


                                    </div>
                                </div>


                            </div>
                        })}




                    </div>}
                </div>

            </div>
        </div>
    );
};