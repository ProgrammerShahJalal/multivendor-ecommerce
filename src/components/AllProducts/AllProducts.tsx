import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ProductView from '../ProductView/ProductView';
import ProductViewSm from '../ProductView/ProductViewSm';
import { Rating } from '@mui/material';

const AllProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<IProduct>()
    useEffect(() => {
        fetch('https://guarded-ocean-73313.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    const dispatch = useDispatch()
    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
        // navigate('/cart')
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = (products) => {
        setSelectedProduct(products)
        setOpen(true)

    };
    const handleClose = () => setOpen(false);
    return (
        <div className="container lg:px-0 md:px-10 px-5 pb-16 mx-auto">
            <h2 className="text-3xl text-center font-extrabold text-gray-900 sm:text-4xl mb-10">
                <span className="text-5xl pr-3" >Latest</span>
                <span className=" text-indigo-600 text-5xl">Products</span>
            </h2>
            <div className="grid place-content-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                {
                    products.length === 0 ? <h2>No Products Found</h2> :
                        products.map((product: any) => {
                            const detailProduct = {
                                _id: product._id,
                                title: product.title,
                                image: product.images[0]?.src,
                                category: product.categories[0].label,
                                price: parseInt(product.sale_price ? product.sale_price : product.reg_price),
                                // attributes: attributes,
                                cartQuantity: 1,
                                vendor: 'fathekarim3@gmail.com'
                            }
                            console.log(product);

                            return <div className="bg-white shadow-inner overflow-hidden single-card">

                                <div className="relative group">
                                    <div style={{ height: '250px' }} className='z-100 overflow-hidden'>
                                        <img src={product.images[0]?.src} className='w-full select-none img z-0 group-hover:hidden block transition object-center' alt="" />
                                        <img src={product.images[1]?.src} className='w-full select-none hoverImg group-hover:block hidden transition object-center' alt="" />
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                        {/* <Link to={`/product/details/${product._id}`}> */}
                                        <button className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' onClick={() => handleOpen(product)}>
                                            <i className="fa-regular fa-magnifying-glass"></i>
                                        </button>
                                        {/* </Link> */}
                                        <a className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                                            <i className="fa-regular fa-heart"></i>
                                        </a>
                                    </div>

                                </div>
                                <div style={{ height: '200px' }} className="pt-4 gb-3 px-4">
                                    <Link to={`/product/${product._id}`}>
                                        <h4 className="font-medium text-xl mb-2 text-grey-800  transition">{product.title}</h4>
                                        <h5 className="font-bold text-sm mb-2 text-grey-800 transition">Category: {product.categories[0]?.label}</h5>
                                    </Link>
                                    <div className="flex items-baseline mb-1 space-x-2">
                                        <p className="text-xl text-indigo-500 font-semibold">{product.sale_price}</p>
                                        <p className="text-sm text-gray-400 line-through">{product.reg_price}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                        {/* <div className="text-xs text-gray-500 ml-3">(1)</div> */}
                                    </div>
                                </div>
                                {product.attributes.length === 0 ? <button onClick={() => handleAddToCart(detailProduct)} className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button> : <Link to={`/product/${product._id}`}> <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>View Product</button></Link>}
                            </div>
                        })}

            </div>

            <div className='px-3 mx-auto text-center'>
                <Modal
                    open={open}
                >
                    <Fade in={open}>
                        <Box>
                            <button className='justify-end text-white select-none bg-red-500 rounded-full w-8 h-8' onClick={handleClose}>x</button>
                            {/* <div className='md:block mx-auto px-1 lg:block hidden'>
                                <ProductView handleClose={handleClose} selectedProduct={selectedProduct} />
                            </div> */}
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

export default AllProducts;