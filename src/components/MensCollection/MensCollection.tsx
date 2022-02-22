import React, { useState, useEffect } from 'react';
import { Rating } from "@mui/material";
import './MensCollection.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ProductViewSm from '../ProductView/ProductViewSm';
import ProductView from '../ProductView/ProductView';
import { Link } from 'react-router-dom';
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
        _id: string
    }[]
}
const KidsCollection = () => {
    
    const [products, setProducts] = useState<ProductState["products"]>
    ([]);

    useEffect(() => {
        if (products) {

            fetch('https://morning-inlet-49130.herokuapp.com/mens')
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [products])
      
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
return (
    <div className="container lg:px-0 md:px-10 px-10 pb-16">
    <div className="grid place-content-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
        {
            products.map((product) => (
                <div className="bg-white shadow-inner overflow-hidden single-card">
                <div className="relative group">
                <div style={{height:'250px'}} className='z-100 overflow-hidden'>
                                <img style={{marginLeft:'20px'}} src={product.hoverImg} className='w-full img z-0 transition object-center' alt="" />
                                <img style={{marginLeft:'23px'}} src={product.img} className='w-full hoverImg transition object-center' alt="" />
                                </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Link to={`/product/buy/${product._id}`}>
                        <button className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' onClick={handleOpen}>
                        <i className="fa-regular fa-magnifying-glass"></i>
                        </button>
                        </Link>
                        <a className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                        <i className="fa-regular fa-heart"></i>
                        </a>
                    </div>
                   
                </div>
                <div style={{height:'200px'}} className="pt-4 gb-3 px-4">
                        <a href="/">
                            <h4 className="font-medium text-xl mb-2 text-grey-800  transition">{product.title}</h4>
                            <h5 className="font-bold text-sm mb-2 text-grey-800 transition">from {product.vendorName}</h5>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-indigo-500 font-semibold">{product.salePrice}</p>
                            <p className="text-sm text-gray-400 line-through">{product.price}</p>
                        </div>
                        <div className="flex items-center">
                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className="text-xs text-gray-500 ml-3">(1)</div>
                        </div>
                    </div>
                    <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
            </div>
        ))}
            </div>
            <div className='px-3 mx-auto text-center'>
      <Modal
        open={open}
      >
        <Fade in={open}>
          <Box>
              <button className='justify-end text-white select-none bg-red-500 rounded-full w-8 h-8' onClick={handleClose}>X</button>
            <div className='md:block lg:block hidden'>
            <ProductView />
            </div>
            <div className='md:hidden lg:hidden block'>
            <ProductViewSm />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
        </div>
    );
};

export default KidsCollection;