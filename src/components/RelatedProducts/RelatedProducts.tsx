import React, { useState, useEffect } from 'react';
import { Rating } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ProductView from '../ProductView/ProductView';
import ProductViewSm from '../ProductView/ProductViewSm';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

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
        _id: string
    }[]
}
const RelatedProducts = () => {
    const [products, setProducts] = useState<any>([]);
    const [selectedProduct, setSelectedProduct] = useState<any>()

    useEffect(() => {
        // if (products) {

        fetch('https://unitymart-admin.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 4)))
        // }
    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = (products) => {
        setSelectedProduct(products)
        setOpen(true)

    };
    const dispatch = useDispatch()
    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
        // navigate('/cart')
    }

    const handleClose = () => setOpen(false);
    return (
        <div className="container lg:px-0 md:px-10 px-5 pb-16 mx-auto">
            <div className="grid place-content-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                {
                    products.map((product) => {
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
                        return <div className="bg-white dark:bg-slate-800 shadow-inner overflow-hidden single-card">

                            <div className="relative group">
                                <div style={{ height: '250px' }} className='z-100 overflow-hidden'>
                                    <img src={product.images[0]?.src} className='w-full select-none img z-0 group-hover:hidden block transition object-center' alt="" />
                                    <img src={product.images[1]?.src} className='w-full select-none hoverImg group-hover:block hidden transition object-center' alt="" />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <Link to={`/product/details/${product._id}`}>
                                        <button className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' onClick={() => handleOpen(product)}>
                                            <i className="fa-regular fa-magnifying-glass"></i>
                                        </button>
                                    </Link>
                                    <a className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                                        <i className="fa-regular fa-heart"></i>
                                    </a>
                                </div>

                            </div>
                            <div style={{ height: '200px' }} className="pt-4 gb-3 px-4">
                                <Link to={`/product/${product._id}`}>
                                    <h4 className="font-medium text-xl mb-2 text-gray-800 dark:text-white  transition">{product.title}</h4>
                                    <h5 className="font-bold text-sm mb-2 text-gray-800 dark:text-white transition">Category: {product.categories[0]?.label}</h5>
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

            <div className='px-3 mx-auto text-center'>
                <Modal
                    open={open}
                >
                    <Fade in={open}>
                        <Box>
                            {/* <button className='justify-end text-white select-none bg-red-500 rounded-full w-8 h-8' onClick={handleClose}>x</button> */}
                            <div className='md:block mx-auto px-1 lg:block hidden'>
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

export default RelatedProducts;