import React, { useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ProductView from '../../ProductView/ProductView';
import ProductViewSm from '../../ProductView/ProductViewSm';
import Backdrop from '@mui/material/Backdrop';
import { Link } from 'react-router-dom';


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
        fetch('https://morning-inlet-49130.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    const [productList, setProductList] = useState<any>();

    const handleOnChange = (event: any) => {
        const searchText = event.target.value.toLowerCase();
        const findProduct: any = products && products.length > 0 ? products?.filter(p => p?.title.toLowerCase().includes(searchText)) : undefined;
        setProductList(findProduct);
        if (searchText === "") {
            setProductList("");
        }
    }

    return (
        <div className="container mx-auto items-center justify-center pt-2 pb-5 my-4 place-content-center place-items-center w-full">
            <div className="text-xl text-center p-4">
                <input
                    className='text-center border lg:w-96 sm:w-48 py-2 rounded-full'
                    type='text'
                    placeholder="Search Product"
                    onChange={handleOnChange}
                />
            </div>

            <div className="text-xl mx-auto justify-center items-center">
                {
                    productList && productList?.length === 0 && (
                        <h1 className="text-xl text-center font-bold text-red-600"> This Type Of Product Is Not Available Now</h1>
                    )
                }

                <div className='mx-auto items-start content-start justify-start place-content-center lg:w-96 sm:w-48
'>

                    {productList && productList?.length > 0 && productList?.map((product: any) =>

                        <Link to={`/product/${product._id}`}>
                            <tr className='mx-auto justify-start items-center overflow-y-scroll w-2/4'>
                                <td className="px-5 mx-auto py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                    <div className="flex mx-auto items-center">
                                        <div style={{ height: '60px', width: '60px' }}>
                                            <img className='h-full w-full object-contain' src={product?.images[0]?.src}
                                                alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                                {product.title}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <div className="px-5 py-5 bg-white dark:bg-slate-800 text-sm">
                                    <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left line-through">${product.reg_price}</p>
                                </div>
                                <td className="px-5 py-5 bg-white dark:bg-slate-800 text-sm">
                                    <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">${product.sale_price}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                    <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                        {product.stock}(left)
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                    <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                        from: {product.brand}
                                    </p>
                                </td>
                            </tr>
                        </Link>
                    )}

                </div>
                {
                    productList?.length === 0 ? <div className='flex justify-center items-center'>
                        <img className='w-64' src="https://i.ibb.co/Xptk1ZR/search.png" alt="" />
                    </div>

                        :
                        <></>
                }

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