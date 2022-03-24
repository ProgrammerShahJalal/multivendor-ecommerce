import React, { useState, useEffect } from 'react';
import { Rating } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ProductView from '../ProductView/ProductView';
import ProductViewSm from '../ProductView/ProductViewSm';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../redux/wishlistSlice';

interface ProductState {
    products: {
        title: string
        img: string
        img3: string
        hoverImg: string
        price: number
        salePrice: number
        size: string
        vendorName: string
        rating: number
    }[]
}

const Men = () => {
    const dispatch = useDispatch()

    const [products, setProducts] = useState<ProductState["products"]>
        ([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (products) => {
        setSelectedProduct(products)
        setOpen(true)

    };
    const [selectedProduct, setSelectedProduct] = useState<any>()
    useEffect(() => {
        if (products) {

            fetch('https://morning-inlet-49130.herokuapp.com/mens')
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [products])

    return (
        <div className="container lg:px-12 md:px-10 px-10 pb-16">
            {
                    products.map((product) => (
                        <div className='justify-center items-center'>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-4'>
            <div className='h-44 w-44'>
                <img className='w-full h-full object-contain select-none ' src={product.img} alt="" />
            </div>
            <div className='grid grid-cols-1'>
                <div>
                <h1 className='text-md'>{product.title}</h1>
                <h1 className='text-md'>from: {product.vendorName}</h1>
                <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                </div>
                <div className='mt-2'>
                <button className='w-40 text-center top-5 text-white  p-2 bg-indigo-500 border border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition mr-2 md:mb-0 lg:mb-0 mb-2'>
                <i className="fa-regular fa-bag-shopping"></i> Add to cart
                </button>
                <button className='w-40 text-center top-5 hover:text-white p-2 hover:bg-indigo-500 border border-indigo-500 bg-transparent text-indigo-500 transition'>
                <i className="fa-regular fa-heart"> </i> Add to wishlist
                </button>
                </div>
            </div>
            </div>
                        </div>
            ))}
            
            <div className='px-3 mx-auto text-center'>
                <Modal
                    open={open}
                >
                    <Fade in={open}>
                        <Box>
                            {/* <button className='justify-end text-white select-none bg-red-500 rounded-full w-8 h-8' onClick={handleClose}>x</button> */}
                            <div style={{ width: '805px', height: '600px' }} className='md:block bg-white dark:bg-gray-800 mx-auto px-1 lg:block hidden'>
                                <ProductView selectedProduct={selectedProduct} />
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

export default Men;