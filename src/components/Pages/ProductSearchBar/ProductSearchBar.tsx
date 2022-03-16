import React, { useState, useLayoutEffect } from 'react';
import { Rating } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProductView from '../../ProductView/ProductView';
import ProductViewSm from '../../ProductView/ProductViewSm';
import Backdrop from '@mui/material/Backdrop';


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


const ProductSearchBar: React.FunctionComponent = () => {
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


    const [products, setProducts] = useState<ProductState["products"]>
        ([]);
    const [selectedProduct, setSelectedProduct] = useState<any>()
    const [open, setOpen] = React.useState(false);
    const handleOpen = (products) => {
        setSelectedProduct(products)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    useLayoutEffect(() => {
        fetch('https://guarded-ocean-73313.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    console.log(products);
    const [productList, setProductList] = useState<any>();

    const handleOnChange = (event: any) => {
        const searchText = event.target.value.toLowerCase();
        const findProduct: any = products && products.length > 0 ? products?.filter(p => p?.title.toLowerCase().includes(searchText)) : undefined;
        setProductList(findProduct);
        // console.log(findProduct, "Product");
        if (searchText === "") {
            setProductList("");
        }
    }

    return (
        <div className="container mx-auto pt-2 pb-5 my-4">
            <div className="text-xl text-center p-4">
                <input
                    className='text-center border w-96 py-2 rounded-full'
                    type='text'
                    placeholder="Search Product"
                    onChange={handleOnChange}
                />
            </div>

            <div className="text-xl text-center">
                {
                    productList && productList?.length === 0 && (
                        <div className="text-xl text-center font-bold text-red-600"> This Type Of Product Is Not Available Now</div>
                    )
                }

                <div className="grid place-content-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                    {productList && productList?.length > 0 && productList?.map((product: any) =>

                    (<div className="bg-white dark:bg-slate-800 shadow-inner overflow-hidden single-card group" key={product._id}>
                        <div className="relative">
                            <div style={{ height: '250px' }} className='z-100 overflow-hidden'>
                                <img src={product.images[0]?.src} className='w-full img z-0 transition object-cover' alt="" />
                                {/* <img src={product.img} className='w-full hoverImg transition object-cover' alt="" /> */}
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <button onClick={() => handleOpen(product)} className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition'>
                                    <i className="fa-regular fa-magnifying-glass"></i>
                                </button>
                                <a className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                                    <i className="fa-regular fa-heart"></i>
                                </a>
                            </div>

                        </div>
                        <div style={{ height: '200px' }} className="pt-4 gb-3 px-4">
                            <a href="/">
                                <h4 className="font-medium text-xl mb-2 text-gray-800 dark:text-white  transition">{product.title}</h4>
                                <h5 className="font-bold text-sm mb-2 text-gray-800 dark:text-white transition">from {product.brand}</h5>
                            </a>
                            <div className="flex justify-center mb-1 space-x-2 text-center">
                                <p className="text-xl text-indigo-500 font-semibold text-center">$ {product.reg_price}</p>
                                <p className="text-sm text-gray-400 line-through text-center">$ {product.sale_price}</p>
                            </div>
                            <div className="text-center">
                                {/* <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                                <div className="text-xs text-gray-500 ml-3">(1)</div> */}
                                <p className="font-medium text-xl mb-2 text-blue-800 dark:text-white px-2  transition">Stock: {product.stock}</p>
                                <p className="font-bold text-xl text-sm mb-2 text-blue-800 dark:text-white transition"> Offer-Date: {product.offerDate}</p>
                            </div>
                        </div>
                        <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
                    </div>)
                    )}
                </div>


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

export default ProductSearchBar;