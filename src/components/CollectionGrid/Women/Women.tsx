import React, { useState, useEffect } from 'react';
import { Backdrop, Rating } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProductView from '../../ProductView/ProductView';
import ProductViewSm from '../../ProductView/ProductViewSm';
import { addToWishlist } from '../../../redux/wishlistSlice';
import { useDispatch } from 'react-redux';


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

const Women = () => {
    const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        height: 500,
        width: 800,
        mx: "auto",
        my: "auto",
        transform: 'translate(-50%, -65%)',
        // width: 400,
        bgcolor: '#ffffff',
        boxShadow: 24,
        // p: 4,
    };
    const style2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        // height: 500,
        width: 400,
        mx: "auto",
        my: "auto",
        transform: 'translate(-50%, -50%)',
        // width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        // p: 4,
    };

    const dispatch = useDispatch()

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
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6">
                {
                    products.map((product) => (
                        <div className="bg-white dark:bg-slate-600 shadow-inner overflow-hidden single-card ">
                            <div className="relative group">
                                <div style={{ height: '300px' }} className='bg-white overflow-hidden'>
                                    <img src={product.img} className='select-none w-full h-full object-contain img group-hover:hidden block transition' alt="" />
                                    <img src={product.img3} className='select-none img w-full h-full object-contain group-hover:block hidden transition' alt="" />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <button onClick={() => handleOpen(product)} className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition'>
                                        <i className="fa-regular fa-magnifying-glass"></i>
                                    </button>
                                    <button onClick={() => dispatch((addToWishlist(product)))} className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition'>
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>

                            </div>
                            <div style={{ height: '200px' }} className="pt-4 gb-3 px-4">
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
                            </div>
                            <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
                        </div>
                    ))}
            </div>
            <div className='bg-white dark:bg-gray-800 text-center'>
                <Modal
                    BackdropComponent={Backdrop}
                    onClose={handleClose}
                    open={open}
                >
                    <div>
                        <Box className='md:block lg:block hidden' sx={style1}>
                            <div style={{ width: '800px', height: '600px' }} className='mx-auto bg-white dark:bg-gray-800 px-1'>
                                <ProductView selectedProduct={selectedProduct} />
                            </div>

                        </Box>
                        <Box className='md:hidden lg:hidden block' sx={style2}>
                            <div className='bg-white dark:bg-gray-800'>
                                <ProductViewSm selectedProduct={selectedProduct} />
                            </div>

                        </Box>
                    </div>
                </Modal>

            </div>
        </div>
    );
};

export default Women;