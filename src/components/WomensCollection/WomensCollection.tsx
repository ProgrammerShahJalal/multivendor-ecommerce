import React, { useState, useEffect } from 'react';
import { Backdrop, Rating } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProductViewSm from '../ProductView/ProductViewSm';
import ProductView from '../ProductView/ProductView';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
interface ProductState {
    products: {
        title: string
        img: string
        hoverImg: string
        img3: string
        price: number
        salePrice: number
        size: string
        vendorName: string
        rating: number
        _id: string
    }[]
}
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
const WomensCollection = () => {
    const [products, setProducts] = useState<ProductState["products"]>
        ([]);
    const [selectedProduct, setSelectedProduct] = useState<any>()
    const dispatch = useDispatch()
    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
        // navigate('/cart')
    }

    useEffect(() => {
        // if (products) {

        fetch('https://unitymart-server.onrender.com/womens')
            .then(res => res.json())
            .then(data => setProducts(data))
        // }
    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = (products) => {
        setSelectedProduct(products)
        setOpen(true)

    };
    const handleClose = () => setOpen(false);
    return (
        <div className="container lg:px-0 md:px-10 px-5 pb-16">
            <div className="grid place-content-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                {
                    products.map((product) => (
                        <div className="bg-white dark:bg-slate-600 shadow-inner overflow-hidden single-card">
                            <div className="relative group">
                                <div style={{ height: '300px' }} className='bg-white overflow-hidden'>
                                    <img src={product.hoverImg} className='select-none w-full h-full object-contain img group-hover:hidden block transition' alt="" />
                                    <img src={product.img3} className='select-none img w-full h-full object-contain group-hover:block hidden transition' alt="" />
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
                            <button onClick={() => handleAddToCart(product)} className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>View Product</button>
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

export default WomensCollection;