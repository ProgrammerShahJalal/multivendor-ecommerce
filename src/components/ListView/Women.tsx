import React, { useState, useEffect } from 'react';
import { Rating } from "@mui/material";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ProductView from '../ProductView/ProductView';
import ProductViewSm from '../ProductView/ProductViewSm';
interface ProductState {
    products: {
        title: string
        img: string
        hoverImg: string
        price: number
        salePrice: number
        size: string
        vendorName: string
        rating: number
    }[]
}

const Women = () => {
    const [products, setProducts] = useState<ProductState["products"]>
        ([]);
        const [open, setOpen] = React.useState(false);
        const handleOpen = (products) => {
            setSelectedProduct(products)
            setOpen(true)
    
        };
        const handleClose = () => setOpen(false);
        const [selectedProduct, setSelectedProduct] = useState<any>()
    useEffect(() => {
        if (products) {

            fetch('https://morning-inlet-49130.herokuapp.com/womens')
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [products])

    return (
        <div className="container lg:px-12 md:px-10 px-10 pb-16">
            <div className="grid grid-cols-1 gap-6">
                {
                    products.map((product) => (
                        <div className="bg-white dark:bg-slate-800 shadow-inner flex overflow-hidden single-card ">
                <div className="relative group">
                <div style={{height:'300px',width:'300px'}} className='z-100  overflow-hidden'>
                                <img src={product.hoverImg} className='w-full select-none block group-hover:hidden z-0 transition object-center' alt="" />
                                <img src={product.img} className='w-full hidden select-none group-hover:block transition object-center' alt="" />
                </div>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <button onClick={() => handleOpen(product)} className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800  transition'>
                        <i className="fa-regular fa-magnifying-glass"></i>
                        </button>
                        <a className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                        <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                   
                </div>
                <div style={{height:'200px'}} className="pt-4 gb-3 px-4">
                        <a href="/">
                            <h4 className="font-medium text-xl mb-2 text-gray-800 dark:text-white  transition">{product.title}</h4>
                            <h5 className="font-bold text-sm mb-2 text-gray-800 dark:text-white transition">from {product.vendorName}</h5>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-indigo-500 font-semibold">{product.salePrice}</p>
                            <p className="text-sm text-gray-400 line-through">{product.price}</p>
                        </div>
                        <div className="flex items-center">
                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className="text-xs text-gray-500 ml-3">(1)</div>
                        </div>
                        <div className="">
                        <h3 className="text-xl text-gray-800 dark:text-white mb-3 uppercase font-medium ">Color</h3>
                        <div className="flex gap-2">
                            {/* Single Color Starts */}
                            <div className="color-selctor">
                                <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                                <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "red" }}></label>
                            </div>
                            <div className="color-selctor">
                                <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                                <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "green" }}></label>
                            </div>
                            <div className="color-selctor">
                                <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                                <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "blue" }}></label>
                            </div>
                        </div>
                    </div>
                        <div className="border-b flex border-gray-200 gap-3 py-5">
                        <Link to="/">
                            <button className='w-40 text-center top-5 text-white  p-2 bg-indigo-500 border border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition'>
                                <i className="fa-regular fa-bag-shopping"></i> Add to cart
                            </button>
                        </Link>
                        <Link to="/">
                            <button className='w-40 text-center top-5 hover:text-white p-2 hover:bg-indigo-500 border border-indigo-500 bg-transparent text-indigo-500 transition'>
                                <i className="fa-regular fa-heart"> </i> Add to wishlist
                            </button>
                        </Link>
                    </div>
                    
                    </div>
                    <div className="grid grid-cols-3">
                    
                    <div className="pt-4 -mt-32 block">
                        <h3 className="text-xl text-gray-800 dark:text-white mb-3 uppercase font-medium">Size</h3>
                        <div className="flex item-center gap-2">
                            <div className="size-selector">
                                <input type="radio" name='size' className='hidden' id='xs' />
                                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    M
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name='size' className='hidden' id='xs' />
                                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    L
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name='size' className='hidden' id='xs' />
                                <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                    XS
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    ))}
            </div>
            <div className='px-3 mx-auto text-center'>
            <Modal
                    open={open}
                >
                    <Fade in={open}>
                        <Box>
                            {/* <button className='justify-end text-white select-none bg-red-500 rounded-full w-8 h-8' onClick={handleClose}>x</button> */}
                            <div className='md:block mx-auto px-1 lg:block hidden'>
                                <ProductView handleClose={handleClose} selectedProduct={selectedProduct} />
                            </div>
                            <div className='md:hidden lg:hidden block'>
                                <ProductViewSm selectedProduct={selectedProduct} />
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </div>
    );
};

export default Women;