import React, { useState, useLayoutEffect } from 'react';
import { Backdrop, Rating } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProductView from '../../ProductView/ProductView';
import ProductViewSm from '../../ProductView/ProductViewSm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import { addToWishlist } from '../../../redux/wishlistSlice';
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

const Kids = () => {

    const [products, setProducts] = useState<ProductState["products"]>
        ([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (products) => {
        setSelectedProduct(products)
        setOpen(true)

    };
    const handleClose = () => setOpen(false);
    const [selectedProduct, setSelectedProduct] = useState<any>()

    useLayoutEffect(() => {
        function updateScreen(time) {
            // Make visual updates here.
            if (products) {

                fetch('https://unitymart-admin.onrender.com/shop/products/category?category=Kids')
                    .then(res => res.json())
                    .then(data => setProducts(data))
            }
        }

        requestAnimationFrame(updateScreen);
    }, [products])


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
    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
        // navigate('/cart')
    }
    return (
        <div className="container lg:px-0 md:px-10 px-10 pb-16 mx-auto">
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
                                attributes: [],
                                cartQuantity: 1,
                                vendor: {
                                    email: product?.publisherDetails?.publisher || null
                                }
                            }


                            return <div key={product._id} className="bg-white shadow-inner overflow-hidden single-card">

                                <div className="relative group">
                                    <div style={{ height: '150px' }} className='z-100 overflow-hidden'>
                                        <img src={product.images[0]?.src} className='select-none w-full h-full img z-0 group-hover:hidden block transition object-contain' alt="" />
                                        <img src={product.images[1]?.src} className='w-full select-none h-full hoverImg group-hover:block hidden transition object-center object-contain' alt="" />
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                        {/* <Link to={`/product/details/${product._id}`}> */}
                                        <button className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' onClick={() => handleOpen(product)}>
                                            <i className="fa-regular fa-magnifying-glass"></i>
                                        </button>
                                        <button onClick={() => dispatch((addToWishlist(detailProduct)))} className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition'>
                                            <i className="fa-regular fa-heart"></i>
                                        </button>
                                    </div>

                                </div>
                                <div style={{ height: '200px' }} className="pt-4 gb-3 px-4">
                                    <Link to={`/product/${product._id}`}>
                                        <h4 className="font-medium text-xl mb-2 text-grey-800  transition">{product.title?.slice(0, 20)}...</h4>
                                        <h5 className="font-bold text-sm mb-2 text-grey-800 transition">Category: {product.categories[0]?.label}</h5>
                                    </Link>
                                    <div className="flex items-baseline mb-1 space-x-2">
                                        <p className="text-xl text-indigo-500 font-semibold">${product.sale_price}</p>
                                        <p className="text-sm text-gray-400 line-through">${product.reg_price}</p>
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

export default Kids;