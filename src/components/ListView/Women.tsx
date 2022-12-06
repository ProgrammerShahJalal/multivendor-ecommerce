import React, { useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProductView from '../ProductView/ProductView';
import ProductViewSm from '../ProductView/ProductViewSm';
import { useDispatch } from 'react-redux';
import { Backdrop } from '@mui/material';
import { addToCart } from '../../redux/cartSlice';


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
    const dispatch = useDispatch()
    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
        // navigate('/cart')
    }
    const [products, setProducts] = useState<ProductState["products"]>
        ([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (products) => {
        setSelectedProduct(products)
        setOpen(true)
    };
    const handleClose = (products) => {
        setOpen(false)
    };
    const [selectedProduct, setSelectedProduct] = useState<any>()

    useLayoutEffect(() => {
        function updateScreen(time) {
            // Make visual updates here.
            if (products) {

                fetch('https://unitymart-admin.onrender.com/shop/products/category?category=Womens')
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
    return (
        <div className="container lg:px-12 md:px-10 px-0">
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
                        return <div key={product._id} className='justify-center items-center'>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-5 p-4 group border border-indigo-500 my-2 rounded'>
                                <div className='lg:h-52 lg:w-52 md:h-52 md:w-52 h-44 w-40'>
                                    <img className='w-full h-full object-contain select-none group-hover:hidden block transition' src={product.images[0]?.src} alt="" />
                                    <img className='w-full h-full object-contain select-none group-hover:block hidden transition' src={product.images[1]?.src} alt="" />
                                </div>
                                <div className='grid grid-cols-1'>
                                    <div>
                                        <h1 className='text-md'>{product.title}</h1>
                                        <h1 className='text-md'>from: {product.brand}</h1>
                                        <h1> Price: <span className='line-through text-red-500'> ${product.reg_price}</span> <span>${product.sale_price}</span></h1>
                                        {/* <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly /> */}
                                    </div>
                                    <div className='mt-2'>
                                        <button onClick={() => handleAddToCart(detailProduct)} className='w-40 text-center top-5 text-white  p-2 bg-indigo-500 border border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition mr-2 md:mb-0 lg:mb-0 mb-2'>
                                            <i className="fa-regular fa-bag-shopping"></i> Add to cart
                                        </button>
                                        <button onClick={() => handleOpen(product)} className='w-40 text-center top-5 hover:text-white p-2 hover:bg-indigo-500 border border-indigo-500 bg-transparent text-indigo-500 transition'>
                                            <i className="fa-regular fa-search"> </i> Quick View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

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