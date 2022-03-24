import React, { useState, useEffect, FC } from 'react';
import { Backdrop, Rating } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProductView from '../ProductView/ProductView';
import ProductViewSm from '../ProductView/ProductViewSm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

interface ProductsProps {
    translate: (key: string) => string
}

const Products: FC<ProductsProps> = ({ translate }) => {
    const [products, setProducts] = useState<any>([]);
    const [selectedProduct, setSelectedProduct] = useState<any>()

    useEffect(() => {
        // if (products) {

        fetch('https://young-springs-82149.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        // }
    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = (products) => {
        setSelectedProduct(products)
        setOpen(true)
    };
    const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        height: 500,
        width: 800,
        mx: "auto",
        my: "auto",
        transform: 'translate(-50%, -65%)',
        bgcolor: '#ffffff',
        boxShadow: 24,
    };
    const style2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 400,
        mx: "auto",
        my: "auto",
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
    };
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))

    }
    const handleClose = () => setOpen(false);
    console.log(products, 'products');
    return (
        <div className="max-w-md md:max-w-7xl pb-16 mx-auto">
            <h2 className="text-3xl text-center font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-10">
                <span className="text-5xl pr-3" >{translate('latest')}</span>
                <span className=" text-indigo-600 text-5xl">{translate('product')}</span>
            </h2>
            <div className="grid place-content-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                {
                    products.map((product) => {
                        const detailProduct = {
                            _id: product._id,
                            title: product.title,
                            image: product.images[0]?.src,
                            category: product.categories[0].label,
                            price: parseInt(product.sale_price ? product.sale_price : product.reg_price),
                            cartQuantity: (1),
                            vendor: {
                                email: product?.publisherDetails?.publisher || null
                            }
                        }
                        return <div className="bg-white dark:bg-slate-600 shadow-inner overflow-hidden single-card">

                            <div className="relative group">
                                <div style={{ height: '300px' }} className='z-100 bg-white overflow-hidden'>
                                    <img src={product.images[0]?.src} className='w-full h-full select-none img z-0 group-hover:hidden block transition object-contain' alt="" />
                                    <img src={product.images[1]?.src} className='w-full h-full select-none hoverImg group-hover:block hidden transition object-contain' alt="" />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <button className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' onClick={() => handleOpen(product)}>
                                        <i className="fa-regular fa-magnifying-glass"></i>
                                    </button>
                                    <a className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                                        <i className="fa-regular fa-heart"></i>
                                    </a>
                                </div>

                            </div>
                            <div style={{ height: '200px' }} className="pt-4 gb-3 px-4">
                                <Link to={`/product/${product._id}`}>
                                    <h4 className="font-medium text-xl mb-2 text-gray-800 dark:text-white  transition">{product.title}</h4>
                                    <h5 className="font-bold text-sm mb-2 text-gray-800 dark:text-white transition">Category: {product.categories[0]?.label}</h5>
                                    <h5 className="font-bold text-sm mb-2 text-gray-800 dark:text-white transition">from {product.brand}</h5>
                                </Link>
                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-indigo-500 font-semibold">{product.sale_price}</p>
                                    <p className="text-sm text-gray-400 line-through">{product.reg_price}</p>
                                </div>
                                <div className="flex items-center">
                                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                    <div className="text-xs text-gray-500 ml-3">(1)</div>
                                </div>
                            </div>
                            <button onClick={() => handleAddToCart(detailProduct)} className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
                        </div>
                    })}

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

export default Products;